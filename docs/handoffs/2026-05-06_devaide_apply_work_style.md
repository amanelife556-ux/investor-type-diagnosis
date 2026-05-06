# Handoff: DevAide適用

作成日: 2026-05-06
作業者: Codex

## 目的

社会人タイプ診断に DevAide を適用し、後続AIが投資家タイプ診断由来の古い運用文書に引っ張られない状態へ整理する。

## 実施内容

- DevAide `v0.11.0-product-facing-cleanup` を `Core Lite / standard-lite` としてtrial適用。
- 実行プロファイルを現時点では `codex-only` に設定。
- `AGENTS.md`、`WORKING_LOCATION.md`、`docs/AI_KIT_VERSION.md`、`docs/PROJECT_PRINCIPLES.md`、`docs/PROJECT_START_PRECHECK.md` を社会人タイプ診断向けに更新。
- `docs/DECISION_LOG.md`、`docs/CHANGE_INTAKE.md`、`docs/GIT_UNMANAGED_HISTORY.md` を社会人タイプ診断向けに初期化。
- `docs/LEGACY_DOCS_NOTE.md` を追加し、コピー元の投資家診断文書を正本として扱わないことを明記。

## 現在の正本

- 作業場所: `/Volumes/My Passport for Mac/development/work-style-diagnosis`
- 診断データ: `src/diagnosisData.ts`
- 診断ロジック: `src/diagnosisLogic.ts`
- 画面: `src/App.tsx`
- プロジェクト原則: `docs/PROJECT_PRINCIPLES.md`

## 未確認事項

- 16枚の静的結果カードを作るかどうかは未確認。
- 公開URLとOGP最終画像は未確認。
- スマホ/PCのスクリーンショットQAは今回未実施。

## 次の自然なタスク

- 画面をブラウザで確認し、社会人タイプ診断として文言と見た目を磨く。
- 必要なら Screenshot Review と Asset QA を採用する。
- 16枚カード制作に入る場合は Team / multi-ai-full へ上げる。
