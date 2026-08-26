import { Question } from "./types";
import { questionsPt } from "./data/questionsPt";
import { questionsAdm } from "./data/questionsAdm";
import { questionsInfo } from "./data/questionsInfo";
import { questionsRlm } from "./data/questionsRlm";
import { questionsIbgeEtica } from "./data/questionsIbgeEtica";
import { questionsKatiaData } from "./questionsKatiaData";
import { questionsNewBatch } from "./data/questionsNewBatch";
import { questionsBatchRlmAssoc } from "./data/questionsBatchRlmAssoc";
import { mapQuestionToOfficialTopic } from "./data/disciplinesData";

const rawQuestions: Question[] = [
  ...questionsPt,
  ...questionsAdm,
  ...questionsInfo,
  ...questionsRlm,
  ...questionsIbgeEtica,
  ...questionsKatiaData,
  ...questionsNewBatch,
  ...questionsBatchRlmAssoc,
];

export const initialQuestions: Question[] = rawQuestions.map((q) => ({
  ...q,
  assunto: mapQuestionToOfficialTopic(q.assunto, q.text),
}));

