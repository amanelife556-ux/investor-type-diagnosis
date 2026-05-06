import { adviceByAxis, axes, questions, showaEmployeeTypes } from "./diagnosisData";
import type { AxisKey, Question, Scores, ShowaEmployeeType } from "./types";

export type DiagnosisResult = {
  code: string;
  type: ShowaEmployeeType;
  scores: Scores;
  advice: string[];
  relatedTypes: RelatedType[];
};

export type RelatedTypeKind = "similar" | "complement" | "contrast";

export type RelatedType = {
  kind: RelatedTypeKind;
  label: string;
  code: string;
  type: ShowaEmployeeType;
  description: string;
};

export function createEmptyScores(): Scores {
  return {
    stability: 0,
    collaboration: 0,
    planning: 0,
    future: 0,
  };
}

export function calculateScores(answers: number[]): Scores {
  return questions.reduce<Scores>((scores, question, index) => {
    scores[question.axis] += answers[index] ?? 0;
    return scores;
  }, createEmptyScores());
}

export function calculateAxisMaximums(targetQuestions: Question[] = questions): Scores {
  return targetQuestions.reduce<Scores>((maximums, question) => {
    maximums[question.axis] += 1;
    return maximums;
  }, createEmptyScores());
}

export function getScorePosition(score: number, maximum: number): number {
  if (maximum <= 0) return 50;

  const rawPosition = ((score + maximum) / (maximum * 2)) * 100;
  return Math.min(100, Math.max(0, rawPosition));
}

export function getProgressPercent(answered: number, total: number = questions.length): number {
  if (total <= 0) return 0;

  const rawPercent = (answered / total) * 100;
  return Math.round(Math.min(100, Math.max(0, rawPercent)));
}

export function validateCompleteAnswers(answers: number[]): void {
  if (answers.length !== questions.length) {
    throw new Error(`Expected ${questions.length} answers, received ${answers.length}`);
  }

  const invalidIndex = answers.findIndex((answer) => answer !== -1 && answer !== 1);

  if (invalidIndex >= 0) {
    throw new Error(`Invalid answer at index ${invalidIndex}: ${answers[invalidIndex]}`);
  }
}

export function buildCode(scores: Scores): string {
  return (Object.keys(axes) as AxisKey[])
    .map((key) => (scores[key] >= 0 ? axes[key].positiveCode : axes[key].negativeCode))
    .join("");
}

export function buildAdvice(scores: Scores): string[] {
  return (Object.entries(scores) as [AxisKey, number][]).map(([axis, value]) => {
    return adviceByAxis[axis][value >= 0 ? "positive" : "negative"];
  });
}

function flipCodeAt(code: string, index: number): string {
  const pairs: Record<string, string> = {
    A: "C",
    C: "A",
    S: "T",
    T: "S",
    E: "D",
    D: "E",
    N: "F",
    F: "N",
  };
  const parts = code.split("");
  parts[index] = pairs[parts[index]];
  return parts.join("");
}

export function invertCode(code: string): string {
  return code
    .split("")
    .map((letter) => flipCodeAt(letter, 0))
    .join("");
}

export function buildRelatedTypes(code: string): RelatedType[] {
  const similarCode = flipCodeAt(code, 3);
  const complementCode = flipCodeAt(flipCodeAt(code, 0), 2);
  const contrastCode = invertCode(code);

  const related = [
    {
      kind: "similar",
      label: "同期社員",
      code: similarCode,
      description: "昭和の会社で同じ空気を吸っていそうな同期社員です。",
    },
    {
      kind: "complement",
      label: "巻き込まれ社員",
      code: complementCode,
      description: "あなたの昭和ムーブに巻き込まれやすい社員です。",
    },
    {
      kind: "contrast",
      label: "天敵社員",
      code: contrastCode,
      description: "同じ会議室にいると、時代の歪みが発生しそうな天敵社員です。",
    },
  ] satisfies Omit<RelatedType, "type">[];

  return related.map((item) => {
    const type = showaEmployeeTypes[item.code];

    if (!type) {
      throw new Error(`Unknown related Showa employee type code: ${item.code}`);
    }

    return {
      ...item,
      type,
    };
  });
}

export function getDiagnosisResult(answers: number[]): DiagnosisResult {
  validateCompleteAnswers(answers);

  const scores = calculateScores(answers);
  const code = buildCode(scores);
  const type = showaEmployeeTypes[code];

  if (!type) {
    throw new Error(`Unknown Showa employee type code: ${code}`);
  }

  return {
    code,
    type,
    scores,
    advice: buildAdvice(scores),
    relatedTypes: buildRelatedTypes(code),
  };
}

export function buildShareText(result: DiagnosisResult): string {
  return [
    "昭和社員転生診断の結果、",
    `私は「${result.type.role}」でした。`,
    result.type.shareLine,
    `令和NG濃度：${result.type.ngScore}%`,
    "",
    "#昭和社員転生診断",
  ].join("\n");
}

export function buildXShareUrl(text: string, url?: string): string {
  const params = new URLSearchParams({ text });

  if (url) {
    params.set("url", url);
  }

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}
