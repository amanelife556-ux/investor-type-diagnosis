# セッション引き継ぎメモ: 現在地整理

作成日: 2026-05-05
作成者: Codex
対象プロジェクト: 投資家タイプ診断
対象ブランチ: 未確認。このコピー先は現時点ではGitリポジトリではない。

## 次回AIへの最初の指示

```text
まず以下を読んでから作業してください。

- AGENTS.md
- docs/AI_KIT_VERSION.md
- docs/AI_KIT_ADOPTION_SET.md
- docs/PROJECT_START_PRECHECK.md
- docs/AI_START_ROUTER.md
- docs/DECISION_LOG.md
- docs/CHANGE_INTAKE.md
- docs/EXECUTION_PROFILE.md
- /Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_DEVELOPMENT_RULES.md
- /Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REPORTING_MODES.md
- docs/PROJECT_PRINCIPLES.md
- WORKING_LOCATION.md
- docs/GIT_UNMANAGED_HISTORY.md
- docs/operation_reviews/2026-05-05_operation_review.md
- docs/handoffs/2026-05-05_current_state.md
- 作業に関係する個別指示書

今回の目的は、既存の16タイプ投資家診断アプリの意図を維持したまま、未対応課題を上から順に処理することです。
未確認事項は推測せず、未確認と明記してください。
仕様変更が必要に見える場合は、実装せずに人間へ確認してください。
```

## 今回の目的

- AI開発セッション管理キットの方針を、このプロジェクトの作業運用に取り込む。
- 他の作業者/AIが同じルールで再開できるようにする。
- キット `v0.6.0-proposal` の有用な内容を、上書きではなく履歴付きで再適用した。
- キット `v0.7.0-proposal` の導入セットを確認し、今回のプロジェクトに適した採用セットを固定する。
- DevAide `v0.9.1-dev-aide-concept` を適用し、人間判断、変更案、開始役割を外部化する。

## 読んだ資料

- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_DEVELOPMENT_RULES.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REPORTING_MODES.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/SESSION_HANDOFF_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/PROJECT_PRINCIPLES_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/KIT_VERSION_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/EXECUTION_PROFILES_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/ADOPTION_CHECKLIST_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/GIT_UNMANAGED_HISTORY_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/OPERATION_REVIEW_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/ADOPTION_SETS_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/versions/2026-05-05_v0.7.0-adoption-sets.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/PROJECT_START_PRECHECK_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_START_ROUTER_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/CHANGE_INTAKE_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/DECISION_LOG_TEMPLATE.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/versions/2026-05-05_v0.9.1-dev-aide-concept.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/versions/2026-05-05_v0.6.0-operation-review.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/review.md`
- `docs/AI_KIT_VERSION.md`
- `docs/EXECUTION_PROFILE.md`
- `WORKING_LOCATION.md`
- `VISUAL_FIX_BRIEF.md`

## 決定事項

- 今後の作業場所は `/Volumes/My Passport for Mac/development/investor-type-diagnosis`。
- 共通AI運用ルールは `/Volumes/My Passport for Mac/development/ai_development_session_kit` を参照する。
- このプロジェクトでは `docs/AI_KIT_VERSION.md` により、DevAide `v0.9.1-dev-aide-concept` を `trial` として採用する。
- 採用セットは `Team / multi-ai-full`。
- 実行プロファイルは `hybrid-ready`、実行モードは `hybrid`、fallbackは `codex-only` とする。
- プロジェクト固有の思想は `docs/PROJECT_PRINCIPLES.md` に置く。
- 採用した重要判断は `docs/DECISION_LOG.md` に残す。
- すぐ実装しない変更案は `docs/CHANGE_INTAKE.md` にAdopt/Park/Rejectで整理する。
- Git管理開始までは、重要な変更と判断を `docs/GIT_UNMANAGED_HISTORY.md` に残す。
- セッション終了時は `docs/handoffs/` に引き継ぎメモを残す。

## 修正・変更内容

| ファイル | 変更内容 | 理由 |
|---|---|---|
| `AGENTS.md` | AI作業ルール、参照ポリシー、役割分担、禁止事項を追加 | 他AI/作業者が同じ運用で入れるようにするため |
| `docs/AI_KIT_VERSION.md` | 採用しているキット版を `v0.9.1-dev-aide-concept` に更新 | DevAide最新版とプロジェクト運用を分離するため |
| `docs/AI_KIT_ADOPTION_SET.md` | `multi-ai-full` の採用セットを追加 | 文書量が多い理由と採用範囲を明確にするため |
| `docs/PROJECT_START_PRECHECK.md` | 導入前提と開始状態を追加 | DevAide適用時の入口整理のため |
| `docs/AI_START_ROUTER.md` | 作業単位ごとの開始役割判定を追加 | AI名ではなく役割で始めるため |
| `docs/CHANGE_INTAKE.md` | 変更案受付を追加 | 仕様変更案や保留案を散らかさないため |
| `docs/DECISION_LOG.md` | 採用判断ログを追加 | 人間判断と禁止事項を後続AIへ残すため |
| `docs/EXECUTION_PROFILE.md` | `hybrid-ready` の実行プロファイルを追加 | 複数AIとCodex fallbackを切り替えやすくするため |
| `docs/AI_KIT_ADOPTION_CHECKLIST.md` | キット導入チェックリストを追加 | 版固定、参照リンク、作業場所、Git状態の抜け漏れ防止 |
| `docs/GIT_UNMANAGED_HISTORY.md` | Git未管理中の履歴メモを追加 | Git開始前でも重要判断を残すため |
| `docs/operation_reviews/2026-05-05_operation_review.md` | AI開発運用レビューを追加 | 途中見直しと次の改善タスクを明確にするため |
| `docs/PROJECT_PRINCIPLES.md` | プロジェクト固有の目的、優先価値、禁止事項、設計判断条件を追加 | セッションごとの判断ブレを減らすため |
| `docs/handoffs/2026-05-05_current_state.md` | 現在地と次回開始指示を追加 | 次回AIが再開しやすくするため |
| `docs/reviews/2026-05-05_multi_ai_development_review.md` | 今回のマルチAI開発レビューを追加 | キット採用の有効性と改善点を記録するため |

## 変更しなかったこと

- 診断ロジック、設問、タイプ文言、UI実装は変更していない。
- 画像切り出し問題は `VISUAL_FIX_BRIEF.md` に指示済みだが、今回の変更対象外。

## 未対応課題

| 優先度 | 課題 | 理由 | 次の行動 |
|---|---|---|---|
| 高 | 診断書ポートレートの中央寄せ/切り出し修正 | キャラが中央に出ていない | `VISUAL_FIX_BRIEF.md` に従ってビジュアル担当が修正 |
| 中 | ブラウザでPC/スマホ手動確認 | npmテストとビルドは通ったが実画面確認が必要 | `npm run dev` で確認 |
| 中 | Git管理の開始有無 | コピー先はGitリポジトリではない | 人間が必要なら `git init` またはリモート設定 |

## 次回の作業順

1. `docs/AI_KIT_VERSION.md` を読む。
2. `docs/AI_KIT_ADOPTION_SET.md` を読む。
3. `docs/PROJECT_START_PRECHECK.md` を読む。
4. `docs/AI_START_ROUTER.md` を読む。
5. `docs/DECISION_LOG.md` を読む。
6. `docs/CHANGE_INTAKE.md` を読む。
7. `docs/EXECUTION_PROFILE.md` を読む。
8. `AGENTS.md` を読む。
9. `docs/PROJECT_PRINCIPLES.md` を読む。
10. `WORKING_LOCATION.md` を読む。
11. 作業対象の個別指示書を読む。
12. 実装前に目的、変更対象、変更しない範囲、未確認事項、テストを整理する。
13. 変更後に `npm test` と `npm run build` を実行する。

## 注意点

- 投資助言に見える表現を追加しない。
- 16タイプ、4軸、20問構成を勝手に変えない。
- `src/main.tsx` は起動専用。
- 画面本体は `src/App.tsx`。
- `assets/type-portraits/{TYPE_CODE}.png` は16タイプコードと対応する。

## 実行済みテスト

```text
npm test
```

結果:

```text
31 tests passed
```

```text
npm run build
```

結果:

```text
成功
```

```text
node src/__tests__/diagnosisLogic.node-test.mjs
```

結果:

```text
smoke test passed: app entry, core flows, asset imports, balanced questions, all 16 type codes, complete type metadata
```

## 次回AIへの具体的な実行指示

```text
あなたはこのプロジェクトの次回開発セッションを担当します。

目的:
- 未対応課題を、既存の診断体験とプロジェクト原則を守って処理する。

必ず守ること:
- AGENTS.md を読む
- docs/AI_KIT_VERSION.md を読む
- docs/AI_KIT_ADOPTION_SET.md を読む
- docs/PROJECT_START_PRECHECK.md を読む
- docs/AI_START_ROUTER.md を読む
- docs/DECISION_LOG.md を読む
- docs/CHANGE_INTAKE.md を読む
- docs/EXECUTION_PROFILE.md を読む
- docs/PROJECT_PRINCIPLES.md を読む
- 未確認事項を推測しない
- 仕様変更が必要なら実装前に人間へ確認する
- 変更後にテスト結果を報告する

最初にやること:
1. WORKING_LOCATION.md で作業場所を確認する
2. 関連する指示書を読む
3. npm test / npm run build の現状を確認する

完了条件:
- 変更範囲が指示内に収まっている
- npm test が通る
- npm run build が通る
- 未確認事項が報告されている
```
