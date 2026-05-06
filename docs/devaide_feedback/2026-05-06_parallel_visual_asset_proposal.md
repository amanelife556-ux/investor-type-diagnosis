# DevAide Proposal: 並行ビジュアル制作の品質管理

作成日: 2026-05-06
作成者: Codex
対象プロジェクト: 投資家タイプ診断
ステータス: 案のみ / DevAide本体未反映

## 目的

投資家タイプ診断の投稿カード画像制作で起きた、並行作業による品質劣化と、その後の品質回復指示から得た学びをDevAideへ反映する案として整理する。

この文書は案であり、DevAide本体は変更しない。

## 背景

X投稿用の結果カード画像を16タイプ分作るため、4グループに分割して並行制作しようとした。

しかし、並行化した結果、以下の問題が起きた。

- 画像ごとの密度や完成感がばらついた。
- 基準カードと比べてSNSでの見栄えが落ちた。
- 既存ポートレートを貼っただけに近いカードが出た。
- 顔や雰囲気が似て、タイプごとの差別化が弱くなった。
- 文字の大きさ、改行、余白の品質が安定しなかった。
- 古い指示書と新しい指示書が並び、どれを正本にするか分かりにくくなった。

その後、画像担当が品質回復用の指示書を作成し、以下の条件が重要だと分かった。

- 正本指示書を1つに固定する。
- 基準品質画像を明示する。
- working directory と active directory を分ける。
- active反映はレビュー後に行う。
- 既存画像の貼り込み禁止を明記する。
- 同じ顔の着せ替え禁止を明記する。
- 顔、髪型、表情、服、小物、ポーズをタイプごとに変える。
- スマホ縮小での可読性をレビュー項目に入れる。
- 画像内テキストの完全一致をレビュー項目に入れる。

## DevAide反映案

### 案1: 並行ビジュアル制作テンプレートを追加

追加候補:

```text
docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md
```

目的:

- 複数AI/複数担当で画像、投稿カード、キャラクター、OGP画像などを作る時に、品質を落とさず並行化する。

含める項目:

- 正本指示書
- 基準品質画像
- working output directory
- active/published asset directory
- 分担表
- 画像内テキスト一覧
- 貼り込み禁止
- 同じ顔の着せ替え禁止
- タイプごとの差別化ルール
- 納品形式
- スマホ縮小レビュー
- 採用/修正/差し戻し判断欄

### 案2: Asset QA Checklistに並行制作項目を追加

変更候補:

```text
docs/ASSET_QA_CHECKLIST.md
```

追加したいチェック項目:

- 正本の指示書が1つに決まっている。
- 古い指示書には「背景資料 / 非正本」と明記されている。
- 基準品質画像が指定されている。
- working directory と active directory が分離されている。
- 制作担当は active directory を直接上書きしていない。
- 既存画像を貼り込んだだけになっていない。
- 同じ顔の着せ替えになっていない。
- 顔、髪型、表情、服、小物、ポーズの差別化がある。
- 画像内テキストが完全一致している。
- 余計な可読文字が入っていない。
- スマホ幅プレビューで主要文言が読める。

### 案3: 旧指示書の扱いルールを追加

追加候補:

```text
docs/AI_DEVELOPMENT_RULES.md
docs/DECISION_LOG_TEMPLATE.md
docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md
```

学び:

- 古い指示書を削除せず残す場合、後続AIや別担当がそれを正本と誤解しやすい。

追加したいルール:

```text
複数の指示書がある場合は、必ず正本を1つ明記する。
古い指示書には「背景資料」「非正本」「現在は参照のみ」と明記する。
```

### 案4: Change Intakeに「品質回復ルール」を残す導線を追加

変更候補:

```text
docs/CHANGE_INTAKE_TEMPLATE.md
```

学び:

- 並行制作で品質が落ちた時、単に「やり直す」ではなく、何が品質を落としたかをChange Intakeに残すとよい。

追加したい欄:

```text
Quality regression:
- 何が劣化したか
- 基準との差分
- 再発防止ルール
- 正本指示書への反映先
```

## 推奨バージョン案

```text
v0.10.0-parallel-visual-assets
Status: proposal
Change level: Minor
```

理由:

- 既存運用を壊さない追加テンプレート。
- 画像制作やSNSカード制作があるプロジェクトでは有用。
- コード中心のプロジェクトでは任意導入でよい。

## DevAide本体に入れる場合の変更案

追加:

```text
docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md
docs/versions/2026-05-06_v0.10.0-parallel-visual-assets.md
```

変更:

```text
docs/ASSET_QA_CHECKLIST.md
CHANGELOG.md
```

任意変更:

```text
docs/CHANGE_INTAKE_TEMPLATE.md
docs/AI_DEVELOPMENT_RULES.md
docs/DECISION_LOG_TEMPLATE.md
```

## 反映判断

現時点では、DevAide本体へは未反映。

次にDevAide本体へ反映する場合は、この文書を元に、まず `docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md` と `docs/ASSET_QA_CHECKLIST.md` への最小反映から始めるのがよい。

