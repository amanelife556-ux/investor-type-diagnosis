import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const dataSource = readFileSync(resolve(root, "src/diagnosisData.ts"), "utf8");
const mainSource = readFileSync(resolve(root, "src/main.tsx"), "utf8");
const appSource = readFileSync(resolve(root, "src/App.tsx"), "utf8");
const questionAxes = [...dataSource.matchAll(/axis: "(stability|collaboration|planning|future)"/g)].map(
  (match) => match[1],
);
const questionTexts = [...dataSource.matchAll(/text: "([^"]+)"/g)]
  .map((match) => match[1])
  .filter((text) => !["とても当てはまる", "やや当てはまる", "あまり当てはまらない", "ほとんど当てはまらない"].includes(text));
const typeKeys = [...dataSource.matchAll(/^  ([A-Z]{4}): \{/gm)].map((match) => match[1]);
const shareLineCount = [...dataSource.matchAll(/shareLine: "/g)].length;
const requiredTypeFields = [
  "role",
  "mark",
  "line",
  "shareLine",
  "summary",
  "survivalStrategy",
  "reputation",
  "returnMemo",
  "ngScoreComment",
  "allyType",
  "enemyType",
];
const ngMovesCount = [...dataSource.matchAll(/ngMoves: \["[^"]+", "[^"]+", "[^"]+"/g)].length;
const acquittalPointsCount = [...dataSource.matchAll(/acquittalPoints: \["[^"]+", "[^"]+", "[^"]+"/g)].length;
const subChargesCount = [...dataSource.matchAll(/subCharges: \["[^"]+", "[^"]+", "[^"]+"/g)].length;
const tagCount = [...dataSource.matchAll(/tags: \["#[^"]+", "#[^"]+"/g)].length;
const ngScoreCount = [...dataSource.matchAll(/ngScore: \d+/g)].length;
const axisDescriptionCount = [...dataSource.matchAll(/description: "/g)].length;
const typeColorPairs = [...dataSource.matchAll(/colors: \["(#[0-9a-fA-F]{6})", "(#[0-9a-fA-F]{6})"\]/g)];
const expectedTypeKeys = ["A", "C"].flatMap((stability) =>
  ["S", "T"].flatMap((collaboration) =>
    ["E", "D"].flatMap((planning) => ["N", "F"].map((future) => stability + collaboration + planning + future)),
  ),
);

assert.equal(questionAxes.length, 12);
assert.equal(questionTexts.length, 12);
assert.equal(new Set(questionTexts).size, 12);
assert.match(dataSource, /とても当てはまる/);
assert.match(dataSource, /ほとんど当てはまらない/);
assert.equal(axisDescriptionCount, 4);
assert.deepEqual(
  questionAxes.reduce(
    (counts, axis) => {
      counts[axis] += 1;
      return counts;
    },
    { stability: 0, collaboration: 0, planning: 0, future: 0 },
  ),
  { stability: 3, collaboration: 3, planning: 3, future: 3 },
);
assert.equal(typeKeys.length, 16);
assert.equal(new Set(typeKeys).size, 16);
assert.deepEqual([...typeKeys].sort(), expectedTypeKeys.sort());
assert.equal(shareLineCount, 16);
assert.equal(ngMovesCount, 16);
assert.equal(acquittalPointsCount, 16);
assert.equal(subChargesCount, 16);
assert.equal(tagCount, 16);
assert.equal(ngScoreCount, 16);
requiredTypeFields.forEach((field) => {
  assert.equal([...dataSource.matchAll(new RegExp(`${field}: "[^"]+"`, "g"))].length, 16);
});
assert.equal(typeColorPairs.length, 16);
assert.match(mainSource, /import \{ App \} from "\.\/App";/);
assert.match(mainSource, /import "\.\/styles\.css";/);
assert.doesNotMatch(mainSource, /function App\(/);
assert.equal(existsSync(resolve(root, "src/styles.css")), true);
assert.equal(existsSync(resolve(root, "assets/work-style-hero.png")), true);
assert.match(appSource, /昭和社員転生診断/);
assert.match(appSource, /転生したら昭和の社員だった件/);
assert.match(appSource, /onClick=\{startDiagnosis\}/);
assert.match(appSource, /onClick=\{\(\) => onAnswer\(choice\.value\)\}/);
assert.match(appSource, /onClick=\{onBack\}/);
assert.match(appSource, /onClick=\{onRestart\}/);
assert.match(appSource, /onClick=\{onDownloadImage\}/);
assert.match(appSource, /href=\{xShareUrl\}/);

console.log(
  "smoke test passed: Showa employee diagnosis entry, core flows, balanced questions, all 16 type codes, complete avatar metadata",
);
