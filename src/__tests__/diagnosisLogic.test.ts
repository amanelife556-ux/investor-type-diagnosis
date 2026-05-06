import { describe, expect, it } from "vitest";
import { axes, investorTypes, questions } from "../diagnosisData";
import {
  buildCode,
  buildRelatedTypes,
  buildShareText,
  buildXShareUrl,
  calculateAxisMaximums,
  calculateScores,
  getDiagnosisResult,
  getProgressPercent,
  getScorePosition,
  validateCompleteAnswers,
} from "../diagnosisLogic";
import type { AxisKey } from "../types";

const typeCodes = Object.keys(investorTypes);

function answersForCode(code: string): number[] {
  const desiredByAxis: Record<AxisKey, number> = {
    risk: code[0] === axes.risk.positiveCode ? 1 : -1,
    horizon: code[1] === axes.horizon.positiveCode ? 1 : -1,
    involvement: code[2] === axes.involvement.positiveCode ? 1 : -1,
    reward: code[3] === axes.reward.positiveCode ? 1 : -1,
  };

  return questions.map((question) => desiredByAxis[question.axis]);
}

describe("diagnosis logic", () => {
  it("has 20 questions", () => {
    expect(questions).toHaveLength(20);
  });

  it("has balanced question coverage across the 4 axes", () => {
    const counts = questions.reduce(
      (current, question) => {
        current[question.axis] += 1;
        return current;
      },
      { risk: 0, horizon: 0, involvement: 0, reward: 0 },
    );

    expect(counts).toEqual({
      risk: 5,
      horizon: 5,
      involvement: 5,
      reward: 5,
    });
  });

  it("has explanatory copy for every axis", () => {
    Object.values(axes).forEach((axis) => {
      expect(axis.description.trim()).not.toBe("");
      expect(axis.left.trim()).not.toBe("");
      expect(axis.right.trim()).not.toBe("");
    });
  });

  it("keeps each question as a clear binary choice", () => {
    const questionTexts = new Set<string>();

    questions.forEach((question) => {
      expect(question.text.trim()).not.toBe("");
      expect(questionTexts.has(question.text)).toBe(false);
      questionTexts.add(question.text);
      expect(question.choices).toHaveLength(2);
      expect(question.choices.map((choice) => choice.value).sort()).toEqual([-1, 1]);
      question.choices.forEach((choice) => {
        expect(choice.text.trim()).not.toBe("");
      });
    });
  });

  it("defines every 16-type code exactly once", () => {
    expect(typeCodes).toHaveLength(16);
    expect(new Set(typeCodes).size).toBe(16);

    const expectedCodes = ["S", "R"].flatMap((risk) =>
      ["L", "T"].flatMap((horizon) =>
        ["P", "A"].flatMap((involvement) => ["I", "G"].map((reward) => risk + horizon + involvement + reward)),
      ),
    );

    expect([...typeCodes].sort()).toEqual(expectedCodes.sort());
  });

  it("has complete display metadata for every investor type", () => {
    Object.values(investorTypes).forEach((type) => {
      expect(type.role.trim()).not.toBe("");
      expect(type.mark.trim()).not.toBe("");
      expect(type.motif.trim()).not.toBe("");
      expect(type.line.trim()).not.toBe("");
      expect(type.summary.trim()).not.toBe("");
      expect(type.preferredMethods).toHaveLength(3);
      type.preferredMethods.forEach((method) => {
        expect(method.trim()).not.toBe("");
      });
      expect(type.strength.trim()).not.toBe("");
      expect(type.watchout.trim()).not.toBe("");
      expect(type.colors).toHaveLength(2);
      type.colors.forEach((color) => {
        expect(color).toMatch(/^#[0-9a-f]{6}$/i);
      });
    });
  });

  it("calculates scores by axis", () => {
    expect(calculateScores(Array(20).fill(1))).toEqual({
      risk: 5,
      horizon: 5,
      involvement: 5,
      reward: 5,
    });
  });

  it("calculates score display maximums from questions", () => {
    expect(calculateAxisMaximums()).toEqual({
      risk: 5,
      horizon: 5,
      involvement: 5,
      reward: 5,
    });
  });

  it("normalizes score positions for score bars", () => {
    expect(getScorePosition(-5, 5)).toBe(0);
    expect(getScorePosition(0, 5)).toBe(50);
    expect(getScorePosition(5, 5)).toBe(100);
    expect(getScorePosition(99, 5)).toBe(100);
    expect(getScorePosition(0, 0)).toBe(50);
  });

  it("normalizes progress percentage", () => {
    expect(getProgressPercent(0, 20)).toBe(0);
    expect(getProgressPercent(10, 20)).toBe(50);
    expect(getProgressPercent(20, 20)).toBe(100);
    expect(getProgressPercent(25, 20)).toBe(100);
    expect(getProgressPercent(-1, 20)).toBe(0);
    expect(getProgressPercent(1, 0)).toBe(0);
  });

  it("builds the expected code from scores", () => {
    expect(buildCode({ risk: -1, horizon: 1, involvement: -1, reward: 1 })).toBe("SLPG");
  });

  it("builds related types as similar, complement, and contrast perspectives", () => {
    const related = buildRelatedTypes("SLPI");

    expect(related.map((item) => item.kind)).toEqual(["similar", "complement", "contrast"]);
    expect(related.map((item) => item.code)).toEqual(["SLPG", "RLAI", "RTAG"]);
    related.forEach((item) => {
      expect(item.type).toBe(investorTypes[item.code]);
      expect(item.description.trim()).not.toBe("");
    });
  });

  it.each(typeCodes)("builds valid, unique related types for %s", (code) => {
    const related = buildRelatedTypes(code);
    const relatedCodes = related.map((item) => item.code);

    expect(related).toHaveLength(3);
    expect(new Set(relatedCodes).size).toBe(3);
    expect(relatedCodes).not.toContain(code);
    relatedCodes.forEach((relatedCode) => {
      expect(typeCodes).toContain(relatedCode);
    });
  });

  it.each(typeCodes)("can reach investor type %s from a concrete answer pattern", (code) => {
    const result = getDiagnosisResult(answersForCode(code));

    expect(result.code).toBe(code);
    expect(result.type).toBe(investorTypes[code]);
    expect(result.advice).toHaveLength(4);
    expect(result.relatedTypes).toHaveLength(3);
  });

  it("has share lines for every investor type", () => {
    typeCodes.forEach((code) => {
      expect(investorTypes[code].shareLine.trim()).not.toBe("");
    });
  });

  it("rejects incomplete diagnosis result answers", () => {
    expect(() => getDiagnosisResult(Array(19).fill(1))).toThrow("Expected 20 answers");
  });

  it("rejects invalid answer values", () => {
    const answers = Array(20).fill(1);
    answers[3] = 0;

    expect(() => validateCompleteAnswers(answers)).toThrow("Invalid answer at index 3");
  });

  it("creates a shareable result text and X intent URL", () => {
    const result = getDiagnosisResult(Array(20).fill(1));
    const text = buildShareText(result);
    const url = buildXShareUrl(text, "https://example.com/diagnosis");

    expect(result.code).toBe("RLAG");
    expect(text).toContain("未来航路の探求者");
    expect(text).toContain("あなたはどのタイプ？");
    expect(text).toContain("#投資家タイプ診断");
    expect(text).not.toContain(result.type.shareLine);
    expect(text).not.toContain("好みやすい投資法:");
    expect(url).toContain("https://twitter.com/intent/tweet?");
    expect(url).toContain("text=");
    expect(url).toContain("url=");
  });
});
