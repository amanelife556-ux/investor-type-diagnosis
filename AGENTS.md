# AI作業ルール

このプロジェクトでは、DevAide の方針を参照して作業します。

DevAide はAIに開発を丸投げするためのものではありません。
人間がプロダクトオーナーとしてAI開発チームを率ち、AIは実装、レビュー、整理、QAを支援します。

参照元:

```text
/Volumes/My Passport for Mac/development/ai_development_session_kit
```

必ず読むもの:

- `docs/AI_KIT_VERSION.md`
- `docs/AI_KIT_ADOPTION_SET.md`
- `docs/PROJECT_START_PRECHECK.md`
- `docs/AI_START_ROUTER.md`
- `docs/DECISION_LOG.md`
- `docs/CHANGE_INTAKE.md`
- `docs/EXECUTION_PROFILE.md`
- `docs/AI_KIT_ADOPTION_CHECKLIST.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_DEVELOPMENT_RULES.md`
- `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REPORTING_MODES.md`
- `docs/PROJECT_PRINCIPLES.md`
- `WORKING_LOCATION.md`
- `docs/handoffs/` の最新メモ
- 作業指示書がある場合はその指示書

## 実行プロファイル

```text
Execution profile: hybrid-ready
Execution mode: hybrid
Primary coordinator: Codex / 人間
Fallback profile: codex-only
```

詳しい実行主体と切り替えルールは `docs/EXECUTION_PROFILE.md` を参照してください。

## 作業開始時の確認

作業前に、短く以下を整理してください。

1. 今回の目的
2. 変更対象
3. 変更しない範囲
4. 未確認事項
5. 実装方針
6. 確認するテスト
7. `docs/DECISION_LOG.md` に関係する既存判断
8. `docs/CHANGE_INTAKE.md` に入れるべき変更案の有無

未確認事項は推測せず、`未確認` と書いてください。

## 役割分担

- 全体構成/統合レビュー: Codex / 人間
- ビジュアル担当: `src/styles.css` と `assets/`
- 画像作成担当: 高解像度の生成元画像は `assets/type-portraits-ai-working/` に保存する。`assets/type-portraits/` は直接上書きしない。
- ロジック担当: `src/diagnosisLogic.ts` と `src/__tests__/`
- コンテンツ担当: Fermat。`src/diagnosisData.ts` と `src/types.ts`
- QA担当: Raman。テスト、ビルド、PC/スマホ手動確認、コピー/X共有確認
- 整理担当: Codex。handoff、キット再適用、運用レビュー

## 統合ルール

- 外部担当の成果は、Codexまたは人間が統合判断する。
- 画像作成担当の成果は、Codexまたは人間が確認してから `assets/type-portraits/` へ反映する。
- React構造、診断データ、診断ロジックをまたぐ変更は、単独担当だけで完了扱いにしない。
- `hybrid-ready` で進めた成果は、外部担当の作業とCodex側の統合作業を分けて報告する。
- `codex-only` で進めた場合、独立レビューが不足している範囲を未確認事項として残す。
- 仕様変更案や後回しの改善案は、すぐ実装せず `docs/CHANGE_INTAKE.md` にAdopt/Park/Rejectで整理する。
- 採用した重要判断は `docs/DECISION_LOG.md` に残す。

## 禁止事項

- 人間の確認なしに診断軸、タイプコード、設問数、タイプ数を変更しない。
- 見た目の調整を理由に診断ロジックや設問意図を変えない。
- テストを通すために仕様を弱めない。
- `src/main.tsx` に画面ロジックを戻さない。画面本体は `src/App.tsx` に集約する。
- 失敗したテストや未実行コマンドを報告から落とさない。

## 報告方針

通常は `REPORTING_MODES.md` の通常開発モードで報告してください。

ユーザーには主に以下だけを返します。

- 結論
- ユーザー判断が必要な点
- 実行したテストと結果
- 未確認事項
- 次の自然なタスク

テスト失敗、原因不明、仕様変更の可能性がある場合だけ、詳細ログや原因候補を出してください。

## セッション終了時

区切りがついたら、次回AIが再開できるように `docs/handoffs/YYYY-MM-DD_作業名.md` を作成または更新してください。
