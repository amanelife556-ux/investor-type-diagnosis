# 作業場所の指示

このプロジェクトの今後の作業場所は、次のディレクトリです。

```text
/Volumes/My Passport for Mac/development/investor-type-diagnosis
```

## 作業ルール

- 作業開始前に `docs/AI_KIT_VERSION.md`、`docs/AI_KIT_ADOPTION_SET.md`、`docs/AI_START_ROUTER.md`、`docs/DECISION_LOG.md`、`docs/CHANGE_INTAKE.md`、`docs/EXECUTION_PROFILE.md`、`AGENTS.md`、`docs/PROJECT_PRINCIPLES.md`、`docs/handoffs/` の最新メモを読んでください。
- 共通AI運用ルールは `/Volumes/My Passport for Mac/development/ai_development_session_kit` の DevAide を参照してください。
- 新しい編集、テスト、ビルド確認は上記ディレクトリで行ってください。
- 古い作業元である `/Users/kikuchihiroki/Documents/New project/investor-type-diagnosis` は参照用として扱い、基本的には編集しないでください。
- このコピー先は現時点ではGitリポジトリではありません。Git管理開始までは、重要な変更と判断を `docs/GIT_UNMANAGED_HISTORY.md` に残してください。履歴管理が必要な場合は、最初にGit初期化またはリモート設定を行ってください。
- 実装の入口は `src/main.tsx`、画面本体は `src/App.tsx` です。
- ビジュアル作業は `src/styles.css` と `assets/` を中心に行ってください。
- 診断ロジックは `src/diagnosisLogic.ts`、診断データは `src/diagnosisData.ts` を中心に管理してください。

## 確認コマンド

```bash
cd "/Volumes/My Passport for Mac/development/investor-type-diagnosis"
npm install
npm test
npm run build
npm run dev
```

`npm` が使えない環境では、入口、主要導線、CSS/画像参照、20問/4軸バランス、16タイプ定義、16タイプ別画像の最低限のスモークテストとして次を実行してください。

```bash
node src/__tests__/diagnosisLogic.node-test.mjs
```
