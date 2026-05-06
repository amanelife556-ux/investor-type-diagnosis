# AI Kit Version

対象プロジェクト: 昭和社員転生診断
最終更新日: 2026-05-06
管理者: ユーザー

## 採用しているキット

```text
Kit name: DevAide
Kit source: /Volumes/My Passport for Mac/development/ai_development_session_kit/product
Kit version: v0.11.0-product-facing-cleanup
Kit reference date: 2026-05-06
Status: trial
```

このプロジェクトでは、DevAide を「人間の判断とAIの作業を外部化する軽量運用」として試験適用します。

## 採用セット

```text
Adoption set: Core Lite / standard-lite
Execution profile: codex-only
Primary coordinator: Codex / 人間
Upgrade condition: 16枚の結果カード制作、複数AIレビュー、公開前QAが本格化したら Team / multi-ai-full へ上げる。
```

## 採用する文書

| 種類 | 文書 | 状態 |
|---|---|---|
| AI作業ルール | `AGENTS.md` | adopted |
| 作業場所 | `WORKING_LOCATION.md` | adopted |
| プロジェクト原則 | `docs/PROJECT_PRINCIPLES.md` | adopted |
| 開始前整理 | `docs/PROJECT_START_PRECHECK.md` | adopted |
| 判断ログ | `docs/DECISION_LOG.md` | adopted |
| 変更案受付 | `docs/CHANGE_INTAKE.md` | adopted |
| 実行プロファイル | `docs/EXECUTION_PROFILE.md` | adopted |
| Git未管理履歴 | `docs/GIT_UNMANAGED_HISTORY.md` | adopted |
| 引き継ぎ | `docs/handoffs/` | adopted |
| 旧文書の扱い | `docs/LEGACY_DOCS_NOTE.md` | adopted |

## Optional Module 判断

| Module | 状態 | 理由 |
|---|---|---|
| Screenshot Review | parked | 画面はあるが、今回はまずDevAide適用まで。次のUI調整時に採用する。 |
| Asset QA | parked | ヒーロー画像とOGP画像のみ。16枚カード制作に入ったら採用する。 |
| Launch Readiness | parked | 公開URL未定のため、公開前に採用する。 |
| Session Board | parked | 現時点は単独統合で足りる。複数AI作業が並行したら採用する。 |
| Operation Review | parked | 1サイクル回した後に必要なら採用する。 |

## 上書きルール

このプロジェクトでは、以下を DevAide 本体より優先します。

1. ユーザーの最新指示
2. `docs/PROJECT_PRINCIPLES.md`
3. `docs/DECISION_LOG.md`
4. `WORKING_LOCATION.md`
5. `AGENTS.md`
6. `docs/handoffs/` の最新メモ

DevAide 本体とプロジェクト固有ルールが矛盾する場合は、プロジェクト固有ルールを優先します。

## 注意点

- このプロジェクトは投資家タイプ診断、社会人タイプ診断を経て、昭和社員転生診断へ大幅転換しました。
- 後続AIは、昭和社員転生診断の正本として `AGENTS.md`、`WORKING_LOCATION.md`、`docs/PROJECT_PRINCIPLES.md`、`src/diagnosisData.ts` を優先してください。
- 旧文書の扱いは `docs/LEGACY_DOCS_NOTE.md` を参照してください。
