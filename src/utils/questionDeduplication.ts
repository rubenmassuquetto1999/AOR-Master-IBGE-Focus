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
 * with user/custom questions.
 */
export function deduplicateAndMergeQuestions(
  baseQuestions: Question[],
  extraQuestions: Question[] = [],
  deletedIds: string[] = []
): Question[] {
  const mergedMap = new Map<string, Question>();
  const baseNormSet = new Set<string>();
  const basePrefixSet = new Set<string>();

  // 1. Index and store base static questions (authoritative source)
  for (const q of baseQuestions) {
    if (!deletedIds.includes(q.id)) {
      mergedMap.set(q.id, q);
      const norm = normalizeQuestionText(q.text);
      if (norm) {
        baseNormSet.add(norm);
        if (norm.length >= 35) {
          basePrefixSet.add(norm.slice(0, 35));
        }
      }
    }
  }

  // 2. Add extra custom questions only if truly unique (O(1) checks)
  for (const q of extraQuestions) {
    if (!q || !q.id || deletedIds.includes(q.id)) continue;
    if (mergedMap.has(q.id)) continue;

    const norm = normalizeQuestionText(q.text);
    if (!norm) continue;

    // Fast check: exact normalized match or prefix match in base
    if (baseNormSet.has(norm)) continue;
    if (norm.length >= 35 && basePrefixSet.has(norm.slice(0, 35))) continue;

    mergedMap.set(q.id, q);
    baseNormSet.add(norm);
    if (norm.length >= 35) {
      basePrefixSet.add(norm.slice(0, 35));
    }
  }

  return Array.from(mergedMap.values());
}
