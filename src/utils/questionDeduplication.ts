import { Question } from "../types";

/**
 * Fast normalization of question text to compare content irrespective of formatting,
 * question numbering prefixes (e.g., "13) ", "Questão 14 - ", "1. ", "Q. 15: "),
 * casing, accents, extra whitespace, or punctuation.
 */
export function normalizeQuestionText(text: string): string {
  if (!text) return "";
  let clean = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .trim();

  // Strip leading question numbering prefixes like "13)", "Questão 14:", "Q. 15 -", "1.", "1 - ", etc.
  clean = clean
    .replace(/^(\s*quest[aã]o\s*\d+[\s\:\.\-\–\)]*|\s*q\.\s*\d+[\s\:\.\-\–\)]*|\s*\d+[\s\:\.\-\–\)]+|\s*[ivxldcm]+[\s\:\.\-\–\)]+)/i, "")
    .trim();

  return clean
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Checks whether an extra/custom question is equivalent to a base question.
 */
export function isQuestionEquivalent(q1: Question, q2: Question): boolean {
  if (!q1 || !q2) return false;
  if (q1.id && q2.id && q1.id === q2.id) return true;

  const n1 = normalizeQuestionText(q1.text);
  const n2 = normalizeQuestionText(q2.text);
  if (!n1 || !n2) return false;

  if (n1 === n2) return true;

  // Substring containment for questions where formatting/instructions vary slightly
  if (n1.length > 30 && n2.length > 30) {
    if (n1.includes(n2) || n2.includes(n1)) return true;
  }

  // Prefix match (first 40 chars)
  const prefixLen = 40;
  if (n1.length >= prefixLen && n2.length >= prefixLen) {
    if (n1.slice(0, prefixLen) === n2.slice(0, prefixLen)) {
      return true;
    }
  }

  return false;
}

/**
 * High-performance O(1) deduplication and merging of base static questions
 * with user/custom questions and persistent field overrides.
 */
export function deduplicateAndMergeQuestions(
  baseQuestions: Question[],
  extraQuestions: Question[] = [],
  deletedIds: string[] = [],
  overrides: Record<string, Partial<Question>> = {}
): Question[] {
  const mergedMap = new Map<string, Question>();
  const baseNormToIdMap = new Map<string, string>();
  const basePrefixToIdMap = new Map<string, string>();

  // 1. Index and store base static questions (applying any persistent overrides)
  for (const rawQ of baseQuestions) {
    if (!deletedIds.includes(rawQ.id)) {
      const q = overrides[rawQ.id] ? { ...rawQ, ...overrides[rawQ.id] } : rawQ;
      mergedMap.set(q.id, q);
      const norm = normalizeQuestionText(q.text);
      if (norm) {
        baseNormToIdMap.set(norm, q.id);
        if (norm.length >= 35) {
          basePrefixToIdMap.set(norm.slice(0, 35), q.id);
        }
      }
    }
  }

  // 2. Add extra custom/modified questions (user modifications override base questions)
  for (const rawQ of extraQuestions) {
    if (!rawQ || !rawQ.id || deletedIds.includes(rawQ.id)) continue;
    const q = overrides[rawQ.id] ? { ...rawQ, ...overrides[rawQ.id] } : rawQ;

    // If this question ID already exists in mergedMap, the user's updated version takes precedence
    if (mergedMap.has(q.id)) {
      const existingQ = mergedMap.get(q.id)!;
      mergedMap.set(q.id, { ...existingQ, ...q });
      continue;
    }

    const norm = normalizeQuestionText(q.text);
    if (!norm) {
      mergedMap.set(q.id, q);
      continue;
    }

    // If exact normalized text exists in base questions, MERGE the user modifications into it
    // instead of discarding it!
    if (baseNormToIdMap.has(norm)) {
      const existingId = baseNormToIdMap.get(norm)!;
      const existingQ = mergedMap.get(existingId);
      if (existingQ) {
        mergedMap.set(existingId, { ...existingQ, ...q, id: existingId });
      }
      continue;
    }

    // If prefix matches closely, update the existing question
    if (norm.length >= 35 && basePrefixToIdMap.has(norm.slice(0, 35))) {
      const existingId = basePrefixToIdMap.get(norm.slice(0, 35))!;
      const existingQ = mergedMap.get(existingId);
      if (existingQ) {
        mergedMap.set(existingId, { ...existingQ, ...q, id: existingId });
      }
      continue;
    }

    mergedMap.set(q.id, q);
    baseNormToIdMap.set(norm, q.id);
    if (norm.length >= 35) {
      basePrefixToIdMap.set(norm.slice(0, 35), q.id);
    }
  }

  // 3. Ensure any global overrides (e.g., batch unified bancas) are applied across all remaining questions
  if (Object.keys(overrides).length > 0) {
    for (const [id, patch] of Object.entries(overrides)) {
      if (mergedMap.has(id)) {
        mergedMap.set(id, { ...mergedMap.get(id)!, ...patch });
      }
    }
  }

  return Array.from(mergedMap.values());
}
