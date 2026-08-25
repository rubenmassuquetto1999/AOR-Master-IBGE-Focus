import { Question } from "./types";
import { questionsPt } from "./data/questionsPt";
import { questionsAdm } from "./data/questionsAdm";
import { questionsInfo } from "./data/questionsInfo";
import { questionsRlm } from "./data/questionsRlm";
import { questionsIbgeEtica } from "./data/questionsIbgeEtica";
import { questionsKatiaData } from "./questionsKatiaData";
import { questionsNewBatch } from "./data/questionsNewBatch";

export const initialQuestions: Question[] = [
  ...questionsPt,
  ...questionsAdm,
  ...questionsInfo,
  ...questionsRlm,
  ...questionsIbgeEtica,
  ...questionsKatiaData,
  ...questionsNewBatch,
];
