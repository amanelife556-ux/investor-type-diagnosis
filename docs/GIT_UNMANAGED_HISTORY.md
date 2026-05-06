# Git Unmanaged History: 昭和社員転生診断

作成日: 2026-05-06

## 状態

このプロジェクトはGit管理されていますが、投資家タイプ診断からコピーした時点の大量の派生差分があります。初回コミットまでは、この文書に重要な変更理由を残します。

## 2026-05-06 - 社会人タイプ診断として別プロジェクト化

- `/Volumes/My Passport for Mac/development/investor-type-diagnosis` を参照元に、`/Volumes/My Passport for Mac/development/work-style-diagnosis` を作成。
- タイトル、メタ情報、診断データ、ロジック、テスト、README、favicon、OGP画像を社会人タイプ診断向けに変更。
- 4軸は安定志向/挑戦志向、個人集中/チーム連携、実行重視/設計重視、現実改善/未来創造。
- 20問、16タイプ、共有カード生成、結果画面を実装。
- `npm test`、`npm run test:logic`、`npm run build` 通過。

## 2026-05-06 - DevAide Core Lite 適用

- DevAide `v0.11.0-product-facing-cleanup` を `Core Lite / standard-lite` としてtrial適用。
- `AGENTS.md`、`WORKING_LOCATION.md`、`docs/AI_KIT_VERSION.md`、`docs/PROJECT_PRINCIPLES.md` など中核文書を社会人タイプ診断向けに更新。
- 古い投資家タイプ診断由来の文書は `docs/LEGACY_DOCS_NOTE.md` に従い、正本として扱わない。

## 2026-05-06 - 昭和社員転生診断へ大幅転換

- タイトルを「転生したら昭和の社員だった件」へ変更。
- 診断名/共有用名称を「昭和社員転生診断」へ変更。
- 16タイプを昭和社員アバターへ全面差し替え。
- 結果画面に、昭和での生存戦略、社内の評判、令和では封印したいムーブ、昭和では評価されたポイント、令和への帰還メモ、サブ罪状、令和NG濃度、同期社員/天敵社員を追加。
- X共有文と共有カード文言を昭和社員転生診断向けに変更。
