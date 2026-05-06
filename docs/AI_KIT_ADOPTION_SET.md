# AI Kit Adoption Set: 投資家タイプ診断

作成日: 2026-05-05
担当: Codex
採用キット版: v0.9.1-dev-aide-concept

## 採用セット

```text
Adoption set: multi-ai-full
Adoption set display name: Team / multi-ai-full
Reason: 複数AI/複数担当、フロントエンド、16タイプ画像、QA、スクリーンショット確認、運用レビューを含むため。
Upgrade condition: なし。現時点で最大セットが妥当。
```

## 採用判断

このプロジェクトは小さな検証ではなく、以下を同時に扱っています。

- ビジュアル担当、ロジック担当、コンテンツ担当、QA担当、統合担当の分担
- React/Viteアプリ本体
- 16タイプ別画像アセット
- PC/スマホの表示確認
- テスト、ビルド、ブラウザ確認
- AI開発セッション管理キット自体の改善フィードバック

そのため、`Starter / minimal` や `Core / standard` ではなく `Team / multi-ai-full` を採用します。

## 現在採用する文書

| 文書 | 採用状況 | 理由 |
|---|---|---|
| `AGENTS.md` | 採用 | 役割分担と禁止事項の入口 |
| `docs/AI_KIT_VERSION.md` | 採用 | 採用キット版とステータスの固定 |
| `docs/AI_KIT_ADOPTION_SET.md` | 採用 | 文書量が多い理由を明示 |
| `docs/AI_KIT_ADOPTION_CHECKLIST.md` | 採用 | 導入漏れ確認 |
| `docs/EXECUTION_PROFILE.md` | 採用 | `hybrid-ready` と fallback の固定 |
| `docs/PROJECT_START_PRECHECK.md` | 採用 | すでに進行中の導入状態を整理 |
| `docs/AI_START_ROUTER.md` | 採用 | 作業単位ごとの開始役割判定 |
| `docs/CHANGE_INTAKE.md` | 採用 | 変更案をAdopt/Park/Rejectで整理 |
| `docs/DECISION_LOG.md` | 採用 | 採用判断を後続AIへ残す |
| `docs/PROJECT_PRINCIPLES.md` | 採用 | 診断アプリ固有の判断基準 |
| `WORKING_LOCATION.md` | 採用 | 正式作業場所の固定 |
| `docs/handoffs/` | 採用 | セッション再開のため |
| `docs/GIT_UNMANAGED_HISTORY.md` | 採用 | Git開始前の重要判断履歴 |
| `docs/operation_reviews/` | 採用 | キット更新と運用見直し |
| `VISUAL_FIX_BRIEF.md` | 採用 | ビジュアル修正依頼の具体指示 |
| キット本体の `REVIEW_TO_TASKS_TEMPLATE.md` | 参照採用 | レビュー指摘の担当割り当て |
| キット本体の `VISUAL_FIX_TEMPLATE.md` | 参照採用 | 視覚修正指示書の型 |
| キット本体の `ASSET_QA_CHECKLIST.md` | 参照採用 | 画像アセット確認 |
| キット本体の `SCREENSHOT_REVIEW_CHECKLIST.md` | 参照採用 | PC/スマホ表示確認 |
| キット本体の `ENVIRONMENT_FALLBACKS.md` | 参照採用 | npm等が使えない時の代替確認 |

## 未採用だが後で追加する可能性がある文書

- プロジェクト内コピー版の共通ルール: DevAide本体を参照できない環境で作業する場合に追加。
- プロジェクト内コピー版のプロンプト: 外部AIに渡す固定プロンプトをプロジェクト内で完結させたい場合に追加。

## セット変更ルール

- `standard` に下げる場合でも、既存文書は削除せず `未使用` または `deprecated` として扱う。
- Git管理開始後は、この採用セット文書もコミット対象に含める。
- 採用セットを変更した場合は、`docs/GIT_UNMANAGED_HISTORY.md` と `docs/handoffs/` に理由を残す。
