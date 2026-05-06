import { adviceByAxis, axes, investorTypes, questions } from "./diagnosisData";
import type { AxisKey, InvestorType, Question, Scores } from "./types";

export type DiagnosisResult = {
  code: string;
  type: InvestorType;
  scores: Scores;
  advice: string[];
  relatedTypes: RelatedType[];
};

export type RelatedTypeKind = "similar" | "complement" | "contrast";

export type RelatedType = {
  kind: RelatedTypeKind;
  label: string;
  code: string;
  type: InvestorType;
  description: string;
};

export function createEmptyScores(): Scores {
  return {
    risk: 0,
    horizon: 0,
    involvement: 0,
    reward: 0,
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
    S: "R",
    R: "S",
    L: "T",
    T: "L",
    P: "A",
    A: "P",
    I: "G",
    G: "I",
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
      label: "近いタイプ",
      code: similarCode,
      description: "判断の土台は近く、収益源の見方だけが少し違うタイプです。",
    },
    {
      kind: "complement",
      label: "補完タイプ",
      code: complementCode,
      description: "リスク感覚と関わり方に違いがあり、偏りを整える視点をくれるタイプです。",
    },
    {
      kind: "contrast",
      label: "対照タイプ",
      code: contrastCode,
      description: "ほぼ反対側から市場を見るタイプです。自分にない前提を確認したいときの参考になります。",
    },
  ] satisfies Omit<RelatedType, "type">[];

  return related.map((item) => {
    const type = investorTypes[item.code];

    if (!type) {
      throw new Error(`Unknown related investor type code: ${item.code}`);
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
  const type = investorTypes[code];

  if (!type) {
    throw new Error(`Unknown investor type code: ${code}`);
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
    "投資家タイプ診断をやってみたよ",
    `私のタイプは「${result.type.role}」`,
    "あなたはどのタイプ？",
    "",
    "#投資家タイプ診断",
  ].join("\n");
}

export function buildXShareUrl(text: string, url?: string): string {
  const params = new URLSearchParams({ text });

  if (url) {
    params.set("url", url);
  }

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}
