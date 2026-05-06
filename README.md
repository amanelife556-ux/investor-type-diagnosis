# 投資家タイプ診断

16タイプの投資家アーキタイプ診断アプリです。20問・4軸の回答スコアから診断コードを作り、対応するタイプ、強み、注意点、運用ヒントを表示します。Vite + React + TypeScript で、バックエンドなしでローカル動作します。

## 担当境界

AI作業者は、作業開始前に `docs/AI_KIT_VERSION.md`、`docs/AI_KIT_ADOPTION_SET.md`、`docs/PROJECT_START_PRECHECK.md`、`docs/AI_START_ROUTER.md`、`docs/DECISION_LOG.md`、`docs/CHANGE_INTAKE.md`、`docs/EXECUTION_PROFILE.md`、`AGENTS.md`、`docs/PROJECT_PRINCIPLES.md`、`WORKING_LOCATION.md`、`docs/handoffs/` の最新メモを読んでください。共通方針は `/Volumes/My Passport for Mac/development/ai_development_session_kit` を参照します。

- 全体構成: 画面遷移、状態管理、データとロジックとビジュアルの接続を管理する。
- ビジュアル担当: `src/styles.css` と `assets/` を中心に、見た目、レイアウト、キャラクター表現、レスポンシブを調整する。
- 画像作成担当: 高解像度の生成元画像を `assets/type-portraits-ai-working/` に置く。`assets/type-portraits/` は直接上書きしない。
- Codex/統合担当: 画像確認後、必要に応じて変換し、`assets/type-portraits/` へ反映する。
- ロジック担当: `src/diagnosisLogic.ts` と `src/__tests__/` を中心に、スコア計算、診断コード生成、進捗率、スコア表示位置、共有文面、テストを管理する。
- コンテンツ担当: `src/diagnosisData.ts` と `src/types.ts` を中心に、設問、4軸、16タイプ、アドバイス文を管理する。
- QA担当: `src/__tests__/`、主要導線、16タイプ到達、スマホ表示、コピー/X共有を中心に、リリース前の品質確認を管理する。

## AI運用

- 採用キット版: `v0.9.1-dev-aide-concept` をこのプロジェクトでは `trial` として使用。
- 採用セット: `Team / multi-ai-full`
- 実行プロファイル: `hybrid-ready`
- 実行モード: `hybrid`
- 統合担当: Codex / 人間
- 判断ログ: `docs/DECISION_LOG.md`
- 変更案受付: `docs/CHANGE_INTAKE.md`
- 開始役割判定: `docs/AI_START_ROUTER.md`
- Git未管理中の重要な変更履歴: `docs/GIT_UNMANAGED_HISTORY.md`
- 運用レビュー: `docs/operation_reviews/2026-05-05_operation_review.md`

## 担当者

- 全体構成/統合: Codex
- コンテンツ担当: Fermat
- QA担当: Raman

## コンテンツ担当の初回ミッション

- 20問が4軸に均等に効いているか確認する。
- 各タイプ名、キャッチコピー、強み、注意点が似すぎていないか確認する。
- 投資助言ではなく自己理解の診断として読める表現に整える。
- SNS共有時に伝わる短い結果文を磨く。

## QA担当の初回ミッション

- 全16タイプに到達できる回答パターンを確認する。
- 開始、回答、戻る、結果、再診断、コピー、X共有の導線を確認する。
- PC幅とスマホ幅で文字はみ出し、ボタン崩れ、結果カード崩れを確認する。
- `npm test` とブラウザ手動確認の両方でリリース前チェックを回す。

## 主要ファイル

- `src/main.tsx`: Reactの起動だけを担当するエントリ。
- `src/App.tsx`: イントロ、設問、結果、X共有テキスト生成、コピー操作を構成する唯一の画面実装。
- `src/diagnosisData.ts`: 診断に使うデータ定義。
- `src/diagnosisLogic.ts`: 診断計算、回答検証、進捗率、スコアバー位置、共有テキスト、共有URL生成。
- `src/styles.css`: UIテーマとレスポンシブスタイル。
- `assets/investor-archetypes.png`: ファーストビュー用のビジュアル。
- `assets/type-portraits-ai-working/`: 画像作成担当が置く高解像度の生成元画像。
- `assets/type-portraits/`: Codex確認後に反映する16タイプ別の結果画面ポートレート。

## ローカル実行

```bash
npm install
npm run dev
```

## テスト

```bash
npm test
```

パッケージマネージャがない環境でも、入口の一本化、主要導線、CSSと画像参照、20問/4軸バランス、16タイプ定義、共有文面、16タイプ別画像の最低限チェックは次で確認できます。

```bash
node src/__tests__/diagnosisLogic.node-test.mjs
```

## 実装方針

- UIは `diagnosisData` と `diagnosisLogic` の公開APIだけを使う。
- `src/main.tsx` には画面ロジックを置かず、画面変更は `src/App.tsx` に集約する。
- スコアバーは設問数から軸ごとの最大値を計算し、設問数が増減しても表示が破綻しないようにする。
- ビジュアル修正は既存のクラス名を優先し、React側の構造変更は必要なときだけ行う。
