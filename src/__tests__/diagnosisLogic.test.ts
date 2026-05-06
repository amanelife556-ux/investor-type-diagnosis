import { describe, expect, it } from "vitest";
import { axes, questions, showaEmployeeTypes, subChargePool } from "../diagnosisData";
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

const typeCodes = Object.keys(showaEmployeeTypes);
const axisKeys = Object.keys(axes) as AxisKey[];

function answersForCode(code: string): number[] {
  const desiredByAxis: Record<AxisKey, number> = {
    stability: code[0] === axes.stability.positiveCode ? 1 : -1,
    collaboration: code[1] === axes.collaboration.positiveCode ? 1 : -1,
    planning: code[2] === axes.planning.positiveCode ? 1 : -1,
    future: code[3] === axes.future.positiveCode ? 1 : -1,
  };

  return questions.map((question) => desiredByAxis[question.axis]);
}

describe("diagnosis logic", () => {
  it("has 12 questions balanced across 4 axes", () => {
    const counts = questions.reduce<Record<AxisKey, number>>(
      (current, question) => {
        current[question.axis] += 1;
        return current;
      },
      { stability: 0, collaboration: 0, planning: 0, future: 0 },
    );

    expect(questions).toHaveLength(12);
    expect(counts).toEqual({ stability: 3, collaboration: 3, planning: 3, future: 3 });
  });

  it("keeps each question as a clear 4-choice scale", () => {
    const questionTexts = new Set<string>();

    questions.forEach((question) => {
      expect(question.text.trim()).not.toBe("");
      expect(questionTexts.has(question.text)).toBe(false);
      questionTexts.add(question.text);
      expect(question.choices).toHaveLength(4);
      expect(question.choices.map((choice) => choice.text)).toEqual([
        "とても当てはまる",
        "やや当てはまる",
        "あまり当てはまらない",
        "ほとんど当てはまらない",
      ]);
      expect(question.choices.map((choice) => choice.value).sort()).toEqual([-1, -1, 1, 1]);
    });
  });

  it("defines every 16-type code exactly once", () => {
    const expectedCodes = ["A", "C"].flatMap((stability) =>
      ["S", "T"].flatMap((collaboration) =>
        ["E", "D"].flatMap((planning) => ["N", "F"].map((future) => stability + collaboration + planning + future)),
      ),
    );

    expect(typeCodes).toHaveLength(16);
    expect(new Set(typeCodes).size).toBe(16);
    expect([...typeCodes].sort()).toEqual(expectedCodes.sort());
  });

  it("has complete display metadata for every Showa employee type", () => {
    Object.values(showaEmployeeTypes).forEach((type) => {
      expect(type.role.trim()).not.toBe("");
      expect(type.mark.trim()).not.toBe("");
      expect(type.line.trim()).not.toBe("");
      expect(type.shareLine.trim()).not.toBe("");
      expect(type.summary.trim()).toContain("転生結果");
      expect(type.survivalStrategy.trim()).not.toBe("");
      expect(type.reputation.trim()).not.toBe("");
      expect(type.ngMoves.length).toBeGreaterThanOrEqual(3);
      expect(type.acquittalPoints.length).toBeGreaterThanOrEqual(3);
      expect(type.returnMemo.trim()).not.toBe("");
      expect(type.subCharges.length).toBeGreaterThanOrEqual(3);
      expect(type.ngScore).toBeGreaterThanOrEqual(0);
      expect(type.ngScore).toBeLessThanOrEqual(100);
      expect(type.ngScoreComment.trim()).not.toBe("");
      expect(type.tags.length).toBeGreaterThanOrEqual(2);
      expect(type.allyType.trim()).not.toBe("");
      expect(type.enemyType.trim()).not.toBe("");
      expect(type.colors).toHaveLength(2);
      type.colors.forEach((color) => {
        expect(color).toMatch(/^#[0-9a-f]{6}$/i);
      });
    });
  });

  it("keeps a large sub charge pool for result variation", () => {
    expect(subChargePool.length).toBeGreaterThanOrEqual(30);
  });

  it("calculates scores by axis", () => {
    expect(calculateScores(Array(12).fill(1))).toEqual({
      stability: 3,
      collaboration: 3,
      planning: 3,
      future: 3,
    });
  });

  it("calculates score display maximums from questions", () => {
    expect(calculateAxisMaximums()).toEqual({
      stability: 3,
      collaboration: 3,
      planning: 3,
      future: 3,
    });
  });

  it("normalizes score positions for score bars and progress", () => {
    expect(getScorePosition(-3, 3)).toBe(0);
    expect(getScorePosition(0, 3)).toBe(50);
    expect(getScorePosition(3, 3)).toBe(100);
    expect(getProgressPercent(6, 12)).toBe(50);
    expect(getProgressPercent(15, 12)).toBe(100);
  });

  it("builds the expected code from scores", () => {
    expect(buildCode({ stability: -1, collaboration: 1, planning: -1, future: 1 })).toBe("ATEF");
  });

  it("builds related types as Showa perspectives", () => {
    const related = buildRelatedTypes("ASEN");

    expect(related.map((item) => item.kind)).toEqual(["similar", "complement", "contrast"]);
    expect(related.map((item) => item.code)).toEqual(["ASEF", "CSDN", "CTDF"]);
    related.forEach((item) => {
      expect(item.type).toBe(showaEmployeeTypes[item.code]);
      expect(item.description.trim()).not.toBe("");
    });
  });

  it.each(typeCodes)("can reach Showa employee type %s from a concrete answer pattern", (code) => {
    const result = getDiagnosisResult(answersForCode(code));

    expect(result.code).toBe(code);
    expect(result.type).toBe(showaEmployeeTypes[code]);
    expect(result.advice).toHaveLength(axisKeys.length);
    expect(result.relatedTypes).toHaveLength(3);
  });

  it("rejects incomplete or invalid diagnosis result answers", () => {
    expect(() => getDiagnosisResult(Array(11).fill(1))).toThrow("Expected 12 answers");

    const answers = Array(12).fill(1);
    answers[3] = 0;
    expect(() => validateCompleteAnswers(answers)).toThrow("Invalid answer at index 3");
  });

  it("creates a shareable result text and X intent URL", () => {
    const result = getDiagnosisResult(Array(12).fill(1));
    const text = buildShareText(result);
    const url = buildXShareUrl(text, "https://example.com/diagnosis");

    expect(result.code).toBe("CTDF");
    expect(text).toContain("コンプラ前夜の宴会部長");
    expect(text).toContain("令和NG濃度");
    expect(text).toContain("#昭和社員転生診断");
    expect(url).toContain("https://twitter.com/intent/tweet?");
    expect(url).toContain("text=");
    expect(url).toContain("url=");
  });
});
