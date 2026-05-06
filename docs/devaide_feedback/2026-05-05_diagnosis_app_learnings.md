# DevAide Feedback: 投資家タイプ診断からの学び

作成日: 2026-05-05
作成者: Codex
対象プロジェクト: 投資家タイプ診断
DevAide採用版: v0.9.1-dev-aide-concept
ステータス: 本体未反映 / 反映候補

## 目的

このメモは、投資家タイプ診断アプリ開発中に得たDevAide本体への改善候補を保存するためのものです。

DevAide本体を都度変更するのではなく、このプロジェクト内に学びを蓄積し、開発サイクルの区切りで本体へ反映するか判断します。

## 反映タイミングの方針

DevAide本体へは、作業中に思いついた都度ではなく、次の区切りで反映判断を行います。

```text
画像再生成
結果画面確認
PC/スマホQA
handoff更新
```

上記が一通り終わったら、DevAide本体側で以下を行います。

1. このメモを読む。
2. 反映候補をDevAide本体の `CHANGE_INTAKE` または `DECISION_LOG` に移す。
3. Adopt / Park / Reject を決める。
4. Adopt したものだけテンプレートやREADMEへ反映する。
5. `CHANGELOG.md` と `docs/versions/` に残す。

## 反映候補一覧

| ID | 学び | 状態 | 反映先候補 |
|---|---|---|---|
| F-001 | ビジュアル作業はCSS修正、切り出し、再生成を分けて扱うべき | Candidate | `VISUAL_FIX_TEMPLATE.md`, 新規Visual Regeneration template |
| F-002 | 生成画像を使うUIでは、画像仕様と画面表示仕様を同じ指示書に書くべき | Candidate | `VISUAL_FIX_TEMPLATE.md`, `ASSET_QA_CHECKLIST.md` |
| F-003 | キャラ画像再生成では、名前、役割、世界観、使用サイズをセットで渡すとよい | Candidate | 新規Character Asset Brief template |
| F-004 | 結果画面のような重要UIは、実装前に情報設計レビューを入れるべき | Candidate | `AI_START_ROUTER_TEMPLATE.md`, 新規Result UX Review template |
| F-005 | Change Intakeは思いつきを止めるだけでなく、良い案を一時保管する場所として有効 | Candidate | `CHANGE_INTAKE_TEMPLATE.md` |
| F-006 | Decision Logは「やること」より「変えてはいけないこと」を残すのに効く | Candidate | `DECISION_LOG_TEMPLATE.md` |
| F-007 | DevAide本体へ学びを都度反映せず、導入プロジェクト側にFeedbackメモを置く運用が必要 | Candidate | 新規Feedback Loop template |
| F-008 | 並行ビジュアル制作は正本指示書・基準画像・working/active分離がないと品質劣化しやすい | Candidate | 新規Parallel Visual Asset template, `ASSET_QA_CHECKLIST.md` |
| F-009 | 初期レビューではエントリポイント・source of truth・README整合性を確認すべき | Candidate | 新規Project Structure Consistency Check, `PROJECT_START_PRECHECK_TEMPLATE.md`, `REVIEW_TO_TASKS_TEMPLATE.md` |
| F-010 | 環境不足時は正式テストの代替スモークテストを明記して使うとよい | Candidate | `ENVIRONMENT_FALLBACKS.md`, `SESSION_HANDOFF_TEMPLATE.md` |
| F-011 | 公開前には共有URL・OGP・免責・SNS導線をまとめて確認する必要がある | Candidate | 新規Launch Readiness template, `PROJECT_START_PRECHECK_TEMPLATE.md` |
| F-012 | 作業場所変更時は関係者向け固定文書を即時更新しないと別コピー作業が起きやすい | Candidate | `WORKING_LOCATION_TEMPLATE.md`, `AGENTS_TEMPLATE.md`, `SESSION_HANDOFF_TEMPLATE.md` |

## F-001 - ビジュアル作業の段階分け

学び:
- ビジュアル不具合は、CSSだけで直せるもの、画像切り出しが必要なもの、画像自体を作り直すべきものに分かれる。

今回の例:
- 最初は結果画面の `object-fit` / 表示枠調整で対応した。
- 次に元集合画像を16分割し直した。
- 最終的に、元画像のキャラ配置と小物映り込みが原因で、16枚を個別生成する方針になった。

DevAide本体への反映案:
- `VISUAL_FIX_TEMPLATE.md` に、以下の判断ステップを追加する。

```text
1. CSS調整で直せるか
2. 既存画像の再切り出しで直せるか
3. 画像自体の再生成が必要か
```

## F-002 - 画像仕様と表示仕様を同じ指示書に書く

学び:
- 画像担当に渡す指示には、画像ファイル単体の仕様だけでなく、画面上でどのサイズで表示されるかも必要。

今回の例:
- 結果画面でキャラを大きく表示する仕様に変えた。
- それに合わせて `VISUAL_REGEN_BRIEF.md` に「デスクトップでは約360 x 240px、スマホでは最大320px幅で表示」と追記した。

DevAide本体への反映案:
- `ASSET_QA_CHECKLIST.md` に「実表示サイズ」を確認項目として追加する。
- Visual系テンプレートに `Result display size` 欄を追加する。

## F-003 - キャラ再生成は名前/役割/世界観/使用サイズをセットで渡す

学び:
- キャラ画像を作り直す時は、単に「このタイプの画像を作る」では弱い。
- 新しいタイプ名、タイプの役割、必要な小物、避けたい表現、画面での使用サイズをセットで渡すと、生成結果が安定しやすい。

今回の例:
- タイプ名をRPG職業風に変更した後、画像指示も新タイプ名に合わせて磨いた。

DevAide本体への反映案:
- 新規テンプレート候補:

```text
docs/CHARACTER_ASSET_BRIEF_TEMPLATE.md
```

含める項目:
- Type code
- Display name
- Role / concept
- Props
- Color mood
- Safe area
- Actual display size
- Style to preserve
- Avoid list

## F-004 - 重要UIは情報設計レビューを先に入れる

学び:
- 結果画面のようにユーザー体験の中心になる画面は、CSS調整より前に情報設計の見直しが有効。

今回の例:
- 結果画面をMBTI診断風に再構成した。
- タイプ名、コード、キャラ、一言、要約、4軸傾向、強み/クセ、相性、共有導線の順番にした。

DevAide本体への反映案:
- `AI_START_ROUTER_TEMPLATE.md` に「重要UIの情報設計レビュー」開始役割を追加する。
- `SCREENSHOT_REVIEW_CHECKLIST.md` に「情報の読み順」を追加する。

## F-005 - Change Intakeは良い案の保管にも効く

学び:
- Change Intakeは「スコープを広げないための制動装置」だけではない。
- 良い思いつきを一度置き、Adopt/Park/Rejectで整理することで、実装順を乱さずに済む。

今回の例:
- 相性/補完タイプ追加。
- タイプ名変更。
- 結果画面再構成。
- 16枚画像再生成。

DevAide本体への反映案:
- `CHANGE_INTAKE_TEMPLATE.md` に「良い案を安全に保管する場所」という説明を強める。
- `Park` だけでなく、`Adopt but later` の扱いを検討する。

## F-006 - Decision Logは「変えてはいけないこと」に効く

学び:
- Decision Logは、採用済み判断の記録だけでなく、後続AIが勝手に変えてはいけないことを明確にするのに有効。

今回の例:
- 16タイプ/4軸/20問は勝手に変えない。
- `src/main.tsx` に画面ロジックを戻さない。
- 画像作り直しに合わせてタイプコードを変えない。

DevAide本体への反映案:
- `DECISION_LOG_TEMPLATE.md` の `Do not change` 欄をより重要な項目として説明する。
- `AGENTS_TEMPLATE.md` に「作業前にDecision LogのDo not changeを確認する」を追加する。

## F-007 - 導入プロジェクト側のFeedbackメモ

学び:
- DevAide本体へ都度反映すると、未検証の学びまで製品化してしまう。
- まず導入プロジェクト側にFeedbackメモを置き、開発サイクルの区切りでDevAide本体へ反映判断する方がよい。

今回の例:
- このファイルを `docs/devaide_feedback/` に作成した。

DevAide本体への反映案:
- 新規テンプレート候補:

```text
docs/DEVAIDE_FEEDBACK_TEMPLATE.md
```

含める項目:
- 導入プロジェクト名
- DevAide採用版
- 学び一覧
- 反映候補
- 反映タイミング
- Adopt / Park / Reject 判断欄

## F-008 - 並行ビジュアル制作の品質管理

学び:
- 画像や投稿カードを複数担当で並行制作すると、速度は出るが品質がばらつきやすい。
- 特に、基準画像、正本指示書、貼り込み禁止、同じ顔の着せ替え禁止、画像内テキスト完全一致が明文化されていないと、完成感が落ちる。

今回の例:
- 投稿カードを4グループに分けて並行制作しようとした。
- しかし、基準カードと比べて密度や完成感が落ちる、既存画像を貼っただけに見える、顔が似るなどの問題が出た。
- その後、画像担当が `SHARE_CARD_PARALLEL_WORK_BRIEF.md` に品質回復ルールをまとめた。

DevAide本体への反映案:
- 新規テンプレート候補:

```text
docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md
```

- `ASSET_QA_CHECKLIST.md` に、並行制作ビジュアルアセットの確認項目を追加する。
- 詳細案は以下へ分離:

```text
docs/devaide_feedback/2026-05-06_parallel_visual_asset_proposal.md
```

## F-009 - プロジェクト構成整合性チェック

学び:
- 初期レビューでは、実装品質だけでなく「実行される入口」と「編集される実装本体」が一致しているかを最初に確認するべき。
- エントリポイント、source of truth、README、tsconfig対象、必須importの欠落がズレると、複数担当が違う場所を直し始める。

今回の例:
- `src/main.tsx` と `src/App.tsx` にApp実装が二重化していた。
- `main.tsx` が実行入口なのに、`App.tsx` も別実装として残っていた。
- `styles.css` import があるのにファイルがない状態があり、Vite起動前に壊れるリスクがあった。
- READMEがどのファイルをUIの正本とするか曖昧だった。

DevAide本体への反映案:
- 新規チェックリスト候補:

```text
docs/PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
```

含める項目:
- 実行entrypointはどこか。
- UI/アプリ本体のsource of truthはどこか。
- entrypointは本体をimportするだけになっているか。
- importされる必須ファイルは存在するか。
- READMEの構成説明と実装が一致しているか。
- tsconfigに含まれる旧実装/未使用実装が混ざっていないか。
- 複数担当が触るファイル境界が明確か。

## F-010 - 環境不足時の代替スモークテスト

学び:
- npmや依存環境が整っていない時でも、完全停止せずに代替スモークテストを用意すると開発を前に進められる。
- ただし代替テストは正式テストの代替ではなく、何を確認し、何が未確認かをhandoffに残す必要がある。

今回の例:
- npm導入前に、Node単体スモークテストで20問/4軸/16タイプ/asset import/entrypointを確認した。
- npm導入後に `npm test` と `npm run build` で正式確認へ移行した。

DevAide本体への反映案:
- `ENVIRONMENT_FALLBACKS.md` に、正式テストが使えない場合の代替スモークテスト記録欄を追加する。
- `SESSION_HANDOFF_TEMPLATE.md` に、`正式テスト未実行 / 代替確認済み / 後で必要な正式確認` の欄を追加する。

## F-011 - 公開前チェックとSNS導線

学び:
- 公開前には、ビルドやスマホ表示だけでなく、URL共有時の見え方、OGP、SNS投稿文、画像保存、免責文まで一括で確認する必要がある。
- ローカルURLのままX共有URLに入ると、公開後の拡散導線が壊れる。

今回の例:
- X共有ボタンは最初 `window.location.href` を使っていたため、ローカルでは `127.0.0.1` が入りうる。
- 公開後は固定の公開URLや環境変数に差し替える必要がある。
- 金融テーマのため、投資助言ではなく自己理解/学習目的であることを明確にする必要がある。

DevAide本体への反映案:
- 新規テンプレート候補:

```text
docs/LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
```

含める項目:
- 公開URL
- build output
- スマホ表示
- OGP title/description/image
- SNS共有本文
- 共有URLが本番URLになっているか
- 画像保存/添付導線
- 免責文
- analytics/計測の有無
- 公開方法（Vercel/Netlify/Cloudflare等）

## F-012 - 作業場所変更時の固定文書更新

学び:
- 作業場所が変わると、他AIや後続セッションが古いコピーを編集するリスクが高い。
- 作業場所変更は、単なるメッセージではなく固定文書として残す必要がある。

今回の例:
- 作業場所を `/Volumes/My Passport for Mac/development` に移した。
- その後 `WORKING_LOCATION.md` と `AGENTS.md` に正式作業場所を記録した。
- Git未管理だったため、`docs/GIT_UNMANAGED_HISTORY.md` も併用した。

DevAide本体への反映案:
- `WORKING_LOCATION_TEMPLATE.md` に「移転時チェック」を追加する。
- `AGENTS_TEMPLATE.md` に「正式作業場所を最初に確認する」を追加する。
- `SESSION_HANDOFF_TEMPLATE.md` に「現在の正式作業場所 / 古い場所 / 編集禁止場所」を追加する。

## 現時点の推奨

今すぐDevAide本体を変更しない。

まずは以下を完了する。

1. 16タイプ別画像の再生成。
2. 結果画面のPC/スマホ確認。
3. 相性/補完タイプ表示の確認。
4. handoff更新。

その後、このメモをDevAide本体側へ渡し、反映候補を棚卸しする。
