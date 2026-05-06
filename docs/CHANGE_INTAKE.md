# Change Intake: 投資家タイプ診断

作成日: 2026-05-05
管理者: ユーザー
対象キット版: v0.9.1-dev-aide-concept

## 目的

- すぐ実装しない案を散らかさない。
- AIや人間が出した変更案を、同じ基準で扱う。
- 別セッションのAIが同じ提案を繰り返すのを防ぐ。
- 採用した判断を `docs/DECISION_LOG.md` や実装タスクへ昇格できるようにする。
- AIが勝手に仕様を広げる前に、人間判断が必要な案を止める。

## 分類

```text
Adopt:
  採用する。

Park:
  今すぐは採用しないが、後で再検討する。

Reject:
  今回はやらない。理由を残す。
```

## 受付一覧

| ID | Date | Source | Proposal | Status | Reason | Next action |
|---|---|---|---|---|---|---|
| C-001 | 2026-05-05 | human / visual QA | 診断書ポートレートの中央寄せ/切り出しを直す | Adopt | 結果画面の品質に直接影響するため | 元画像から16枚を再分割済み。ブラウザ目視確認待ち |
| C-002 | 2026-05-05 | Codex | DevAideのDecision Log / Change Intake / AI Start Routerを導入する | Adopt | 複数AI開発で判断と変更案を外部化できるため | 文書追加済み |
| C-003 | 2026-05-05 | Codex | DevAideを正式採用 `adopted` に上げる | Park | まだ1サイクル運用確認が終わっていないため | ビジュアル修正、QA、handoff後に再確認 |
| C-004 | 2026-05-05 | review | 診断仕様をAI判断で拡張する | Reject | 16タイプ/4軸/20問はプロダクト核であり人間判断が必要 | 人間が仕様変更を明示した場合のみ再提案可 |
| C-005 | 2026-05-05 | human / visual QA | 全16タイプのポートレートを1枚ずつ作り直す | Adopt | 元集合画像に隣キャラや小物の映り込みがあり、切り出しだけでは限界があるため | 新タイプ名ベースで `VISUAL_REGEN_BRIEF.md` を磨き済み |
| C-006 | 2026-05-05 | human / visual QA | 結果画面のキャラ立ち絵を大きく表示する | Adopt | キャラが結果画面の主役として見えた方がよいため | CSS修正済み。ブラウザ目視確認待ち |
| C-007 | 2026-05-05 | human / UX review | 結果画面をMBTI診断風に再構成する | Adopt | タイプ理解、キャラ、軸、特徴、共有導線を読みやすくするため | 実装済み。ブラウザ目視確認待ち |
| C-008 | 2026-05-05 | human / UX idea | 結果画面に相性/補完タイプを入れる | Adopt | 自己理解として、近い視点・補完視点・対照視点を見られると結果が深くなるため | 実装済み。ブラウザ目視確認待ち |
| C-009 | 2026-05-05 | human / content direction | 16タイプ名をRPG職業風の凝った名称に変更する | Adopt | キャラとMBTI風結果画面に合う記憶しやすい名前にするため | 実装済み |
| C-010 | 2026-05-05 | human / DevAide discussion | DevAide本体への学びを導入プロジェクト側に蓄積する | Adopt | 都度本体反映せず、区切りで棚卸しするため | `docs/devaide_feedback/` を作成済み |

## Adopt

## C-001 - 診断書ポートレート中央寄せ

Date: 2026-05-05
Source: human / visual QA
Status: Adopt

Proposal:
- 診断書画像の切り出しを修正し、キャラが中央に出るようにする。

Reason:
- 結果画面の第一印象に影響するため。

Impact:
- `src/styles.css`
- `assets/type-portraits/`
- 必要なら `src/App.tsx`

Reflect to:
- `VISUAL_FIX_BRIEF.md`
- QA / screenshot review

Next action:
- 元画像から16枚を再分割済み。PC/スマホで目視確認する。

## C-002 - DevAide運用文書追加

Date: 2026-05-05
Source: Codex
Status: Adopt

Proposal:
- `docs/DECISION_LOG.md`
- `docs/CHANGE_INTAKE.md`
- `docs/AI_START_ROUTER.md`
- `docs/PROJECT_START_PRECHECK.md`

Reason:
- 人間判断、変更案、開始役割をAIの記憶に依存せずプロジェクト内に残せるため。

Impact:
- AI運用文書。

Reflect to:
- `docs/AI_KIT_VERSION.md`
- `docs/AI_KIT_ADOPTION_SET.md`
- `AGENTS.md`
- `docs/handoffs/`

Next action:
- 次回以降、仕様変更案や運用変更案はここでAdopt/Park/Rejectに分ける。

## C-005 - 16タイプ別ポートレート作り直し

Date: 2026-05-05
Source: human / visual QA
Status: Adopt

Proposal:
- 集合画像からの切り出しではなく、16タイプそれぞれを独立した1枚画像として作り直す。

Reason:
- 元画像のグリッド内でキャラ位置が均等ではなく、隣キャラや小物が一部映り込んでいるため。
- CSS調整や単純な再分割だけでは、結果画面で自然な中央表示にできないため。

Impact:
- `assets/type-portraits/*.png`
- `src/styles.css`
- QA / screenshot review

Reflect to:
- `VISUAL_REGEN_BRIEF.md`
- `assets/type-portraits/README.md`
- `docs/GIT_UNMANAGED_HISTORY.md`

Next action:
- ビジュアル担当または画像生成担当に `VISUAL_REGEN_BRIEF.md` を渡し、全16枚を再作成する。

## C-006 - 結果画面のキャラ立ち絵を大きく表示する

Date: 2026-05-05
Source: human / visual QA
Status: Adopt

Proposal:
- 結果画面のタイプ別キャラ画像を、現在より大きく表示する。

Reason:
- 結果画面ではキャラが診断書の主役なので、今のサイズだと少し弱い。
- 16枚を作り直す場合も、大きく表示される前提で画像品質を合わせたい。

Impact:
- `src/styles.css`
- `VISUAL_REGEN_BRIEF.md`

Reflect to:
- `src/styles.css`
- `VISUAL_REGEN_BRIEF.md`

Next action:
- PC/スマホで結果カードのバランスを目視確認する。

## C-007 - 結果画面をMBTI診断風に再構成する

Date: 2026-05-05
Source: human / UX review
Status: Adopt

Proposal:
- 結果画面を、MBTI診断の結果ページのように、タイプ名、タイプコード、キャラ、要約、4軸傾向、強み/クセ、振り返り、共有導線が順に読める構成へ変える。

Reason:
- 以前の構成は診断書としての情報は揃っていたが、タイプの第一印象と読み進める順番が弱かったため。
- キャラを大きく見せる仕様と相性がよいため。

Impact:
- `src/App.tsx`
- `src/styles.css`

Reflect to:
- `src/App.tsx`
- `src/styles.css`
- `docs/GIT_UNMANAGED_HISTORY.md`

Next action:
- ブラウザでPC/スマホの結果画面を確認する。

## C-008 - 相性/補完タイプを追加する

Date: 2026-05-05
Source: human / UX idea
Status: Adopt

Proposal:
- 結果画面に「近いタイプ」「補完タイプ」「対照タイプ」を表示する。

Reason:
- MBTI診断のように、自分のタイプを他タイプとの関係で理解できると結果画面の満足度が上がるため。
- 投資助言ではなく、視点の補完として表現すればプロジェクト方針に合うため。

Impact:
- `src/diagnosisLogic.ts`
- `src/App.tsx`
- `src/styles.css`
- `src/__tests__/diagnosisLogic.test.ts`

Reflect to:
- `docs/GIT_UNMANAGED_HISTORY.md`

Next action:
- ブラウザで表示文言とカード量を確認する。

## C-009 - 16タイプ名をRPG職業風に変更する

Date: 2026-05-05
Source: human / content direction
Status: Adopt

Proposal:
- 16タイプ名を、投資観点とRPG職業感がある短い名称へ変更する。

Reason:
- 結果画面で「自分のタイプ」として覚えやすくするため。
- キャラクター画像とMBTI風の結果画面に合わせるため。

Impact:
- `src/diagnosisData.ts`
- 共有文面
- 結果画面

Reflect to:
- `src/diagnosisData.ts`
- `docs/DECISION_LOG.md`
- `docs/GIT_UNMANAGED_HISTORY.md`

Next action:
- ブラウザで16タイプ名の見え方を確認する。

## C-010 - DevAide本体への学びを蓄積する

Date: 2026-05-05
Source: human / DevAide discussion
Status: Adopt

Proposal:
- DevAide本体への改善候補を、導入プロジェクト側の `docs/devaide_feedback/` に蓄積する。

Reason:
- DevAide本体を都度変更すると、未検証の学びまで製品化してしまうため。
- 診断アプリの開発サイクルが一区切りした後に棚卸しした方がよいため。

Impact:
- `docs/devaide_feedback/`
- DevAide本体への今後の反映判断

Reflect to:
- `docs/devaide_feedback/2026-05-05_diagnosis_app_learnings.md`
- `docs/GIT_UNMANAGED_HISTORY.md`

Next action:
- 画像再生成、結果画面QA、handoff後にDevAide本体へ反映するか判断する。

## Park

## C-003 - DevAide正式採用への昇格

Date: 2026-05-05
Source: Codex
Status: Park
Review timing: ビジュアル修正、QA、handoffを1サイクル回した後

Proposal:
- DevAide採用ステータスを `trial` から `adopted` に上げる。

Reason:
- まだDecision Log / Change Intake / AI Start Routerの運用実績が足りないため。

Needed before decision:
- ビジュアル修正の統合。
- PC/スマホのスクリーンショットレビュー。
- 次回AIがhandoffから自然に再開できること。

## Reject

## C-004 - AI判断だけで診断仕様を拡張する

Date: 2026-05-05
Source: review
Status: Reject

Proposal:
- AI判断だけで診断軸、設問数、タイプ数、タイプコードを変更する。

Reason:
- 診断アプリの核であり、画像、ロジック、コンテンツ、QAすべてに影響するため。

Do not re-propose unless:
- 人間が仕様変更を明示した場合。

## Park の整理ルール

- Park が増えたら、`docs/operation_reviews/` を使って棚卸しする。
- 期限や再検討条件のない Park を増やさない。
- Park から Adopt へ移す場合は、`docs/DECISION_LOG.md` に採用判断を残す。
- Park から Reject へ移す場合は、理由を短く残す。
