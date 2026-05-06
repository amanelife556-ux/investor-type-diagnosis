import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const dataSource = readFileSync(resolve(root, "src/diagnosisData.ts"), "utf8");
const mainSource = readFileSync(resolve(root, "src/main.tsx"), "utf8");
const appSource = readFileSync(resolve(root, "src/App.tsx"), "utf8");
const questionAxes = [...dataSource.matchAll(/axis: "(risk|horizon|involvement|reward)"/g)].map((match) => match[1]);
const questionTexts = [...dataSource.matchAll(/^    text: "([^"]+)"/gm)].map((match) => match[1]);
const choiceValues = [...dataSource.matchAll(/value: (-?1)/g)].map((match) => Number(match[1]));
const investorTypeKeys = [...dataSource.matchAll(/^  ([A-Z]{4}): \{/gm)].map((match) => match[1]);
const shareLineCount = [...dataSource.matchAll(/shareLine: "/g)].length;
const requiredTypeFields = [
  "role",
  "mark",
  "motif",
  "line",
  "shareLine",
  "summary",
  "strength",
  "watchout",
];
const preferredMethodsCount = [...dataSource.matchAll(/preferredMethods: \["[^"]+", "[^"]+", "[^"]+"\]/g)].length;
const axisDescriptionCount = [...dataSource.matchAll(/description: "/g)].length;
const typeColorPairs = [...dataSource.matchAll(/colors: \["(#[0-9a-fA-F]{6})", "(#[0-9a-fA-F]{6})"\]/g)];
const expectedTypeKeys = ["S", "R"].flatMap((risk) =>
  ["L", "T"].flatMap((horizon) =>
    ["P", "A"].flatMap((involvement) => ["I", "G"].map((reward) => risk + horizon + involvement + reward)),
  ),
);

assert.equal(questionAxes.length, 20);
assert.equal(questionTexts.length, 20);
assert.equal(new Set(questionTexts).size, 20);
assert.equal(choiceValues.length, 40);
assert.equal(choiceValues.filter((value) => value === 1).length, 20);
assert.equal(choiceValues.filter((value) => value === -1).length, 20);
assert.equal(axisDescriptionCount, 4);
assert.deepEqual(
  questionAxes.reduce(
    (counts, axis) => {
      counts[axis] += 1;
      return counts;
    },
    { risk: 0, horizon: 0, involvement: 0, reward: 0 },
  ),
  { risk: 5, horizon: 5, involvement: 5, reward: 5 },
);
assert.equal(investorTypeKeys.length, 16);
assert.equal(new Set(investorTypeKeys).size, 16);
assert.deepEqual([...investorTypeKeys].sort(), expectedTypeKeys.sort());
assert.equal(shareLineCount, 16);
assert.equal(preferredMethodsCount, 16);
requiredTypeFields.forEach((field) => {
  assert.equal([...dataSource.matchAll(new RegExp(`${field}: "[^"]+"`, "g"))].length, 16);
});
assert.equal(typeColorPairs.length, 16);
assert.match(mainSource, /import \{ App \} from "\.\/App";/);
assert.match(mainSource, /import "\.\/styles\.css";/);
assert.doesNotMatch(mainSource, /function App\(/);
assert.equal(existsSync(resolve(root, "src/styles.css")), true);
assert.match(appSource, /const shareCardImages = import\.meta\.glob/);
expectedTypeKeys.forEach((code) => {
  assert.equal(existsSync(resolve(root, `assets/type-portraits/${code}.png`)), true);
  assert.equal(existsSync(resolve(root, `assets/share-cards/${code}.png`)), true);
});
assert.match(appSource, /onClick=\{startDiagnosis\}/);
assert.match(appSource, /onClick=\{\(\) => onAnswer\(choice\.value\)\}/);
assert.match(appSource, /onClick=\{onBack\}/);
assert.match(appSource, /onClick=\{onRestart\}/);
assert.match(appSource, /onClick=\{onDownloadImage\}/);
assert.match(appSource, /href=\{xShareUrl\}/);

console.log(
  "smoke test passed: app entry, core flows, asset imports, balanced questions, all 16 type codes, complete type metadata",
);
