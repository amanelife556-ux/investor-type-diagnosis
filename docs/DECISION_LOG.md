# Decision Log: 投資家タイプ診断

作成日: 2026-05-05
管理者: ユーザー

## 目的

- 採用した判断を仕様や運用方針として残す。
- なぜその判断をしたかを後続AIへ伝える。
- AIが後から方針を踏み外さないようにする。
- 人間のプロダクト判断を保存する。
- 完全自動ではなく、人間が判断した開発であることを明確にする。

## 記録対象

記録するもの:

- プロダクト方針に影響する判断。
- 仕様境界を変える判断。
- AIに任せる範囲/任せない範囲の判断。
- 実行プロファイルや役割分担の変更。
- 採用したレビュー指摘。
- Reject したが再提案されやすい判断。

記録しなくてよいもの:

- 誤字修正。
- 小さな実装都合。
- 一時的な作業メモ。
- Git commit を見れば十分な細かい差分。

## 判断一覧

| ID | Date | Decision | Source | Impact | Review needed |
|---|---|---|---|---|---|
| D-001 | 2026-05-05 | 作業場所を外部ボリューム側に固定 | human | 全AI/全作業 | no |
| D-002 | 2026-05-05 | DevAideを `Team / multi-ai-full` としてtrial採用 | human / Codex | AI運用文書 | yes |
| D-003 | 2026-05-05 | 16タイプ/4軸/20問/タイプコードは人間確認なしに変更しない | human / project review | 診断仕様 | no |
| D-004 | 2026-05-05 | 画面本体は `src/App.tsx`、起動は `src/main.tsx` に集約 | review | フロントエンド構造 | no |
| D-005 | 2026-05-05 | 結果画面ポートレートは16枚を独立画像として作り直す方針 | human / visual QA | 画像アセット | yes |
| D-006 | 2026-05-05 | 結果画面はMBTI風のタイプ理解ページへ再構成 | human / UX review | 結果画面UI | yes |
| D-007 | 2026-05-05 | 16タイプ名をRPG職業風の名称へ変更 | human / content direction | コンテンツ | yes |
| D-008 | 2026-05-05 | 画像作成担当は高解像度元画像を `assets/type-portraits-ai-working/` に置き、`assets/type-portraits/` はCodex確認後に反映する | human | 画像運用 | no |

## D-001 - 正式作業場所の固定

Date: 2026-05-05
Decision maker: 人間
Source: discussion
Status: adopted

Decision:
- 今後の正式作業場所は `/Volumes/My Passport for Mac/development/investor-type-diagnosis` とする。
- 旧パス `/Users/kikuchihiroki/Documents/New project/investor-type-diagnosis` は参照用とし、基本的に編集しない。

Reason:
- 複数AI/複数担当が別ディレクトリで作業してしまう混乱を防ぐため。

Impact:
- すべての編集、テスト、ビルド、handoff更新。

Affected files/docs:
- `WORKING_LOCATION.md`
- `AGENTS.md`
- `docs/handoffs/2026-05-05_current_state.md`

Follow-up tasks:
- Git管理開始時に、この作業場所で初期化またはリモート設定を行う。

Do not change:
- 人間確認なしに旧パスへ作業場所を戻さない。

Review needed:
- no

## D-002 - DevAide Team / multi-ai-full のtrial採用

Date: 2026-05-05
Decision maker: 人間
Source: discussion / implementation
Status: adopted

Decision:
- DevAide `v0.9.1-dev-aide-concept` を、このプロジェクトでは `trial` として採用する。
- 採用セットは `Team / multi-ai-full` とする。

Reason:
- このプロジェクトは複数AI、ビジュアル、ロジック、コンテンツ、QA、画像アセット、スクリーンショット確認を含むため。
- DevAideの新しい思想である「人間がAI開発チームを率いる」形が、現在の進め方に合っているため。

Impact:
- `docs/AI_KIT_VERSION.md`
- `docs/AI_KIT_ADOPTION_SET.md`
- `docs/AI_START_ROUTER.md`
- `docs/CHANGE_INTAKE.md`
- `docs/DECISION_LOG.md`

Affected files/docs:
- `docs/AI_KIT_VERSION.md`
- `docs/AI_KIT_ADOPTION_SET.md`
- `docs/AI_KIT_ADOPTION_CHECKLIST.md`
- `AGENTS.md`

Follow-up tasks:
- ビジュアル修正、QA、handoff、Decision Log運用を1サイクル回した後、`adopted` に上げるか判断する。

Do not change:
- DevAide本体の最新版を、プロジェクト側へ自動適用しない。

Review needed:
- yes
- 次回運用レビューでtrial継続かadopted昇格か確認する。

## D-003 - 診断仕様の固定

Date: 2026-05-05
Decision maker: 人間
Source: project review
Status: adopted

Decision:
- 16タイプ、4軸、20問、タイプコードは、人間確認なしに変更しない。

Reason:
- 診断アプリの核であり、ロジック/コンテンツ/QA/画像アセットすべてに影響するため。

Impact:
- 診断ロジック、診断データ、タイプ別画像、テスト。

Affected files/docs:
- `src/diagnosisData.ts`
- `src/diagnosisLogic.ts`
- `src/types.ts`
- `assets/type-portraits/`
- `docs/PROJECT_PRINCIPLES.md`

Follow-up tasks:
- 仕様変更が必要になった場合は、先に `docs/CHANGE_INTAKE.md` へ記録する。

Do not change:
- 人間確認なしに軸、設問数、タイプ数、タイプコードを変えない。

Review needed:
- no

## D-004 - React入口と画面本体の責務分離

Date: 2026-05-05
Decision maker: Codex / review
Source: review finding
Status: adopted

Decision:
- `src/main.tsx` はReact起動専用にする。
- 画面本体は `src/App.tsx` に集約する。

Reason:
- 複数のApp実装があると、ビジュアル、コンテンツ、QA担当がどちらを見ればよいか混乱するため。

Impact:
- フロントエンド実装、レビュー、ビジュアル修正。

Affected files/docs:
- `src/main.tsx`
- `src/App.tsx`
- `README.md`
- `AGENTS.md`

Follow-up tasks:
- 新しい画面変更は `src/App.tsx` を中心に行う。

Do not change:
- `src/main.tsx` に画面ロジックを戻さない。

Review needed:
- no

## D-005 - 結果画面ポートレートを独立画像として作り直す

Date: 2026-05-05
Decision maker: 人間
Source: visual QA / discussion
Status: adopted

Decision:
- 結果画面用の16タイプ別ポートレートは、集合画像からの単純切り出しではなく、1タイプ1画像として作り直す方針にする。

Reason:
- 元の集合画像ではキャラクター配置が均等ではない。
- 一部セルに上下左右の別キャラや小物が映り込んでいる。
- CSSや自動クロップだけで自然な中央寄せにするには限界がある。

Impact:
- `assets/type-portraits/*.png`
- `VISUAL_REGEN_BRIEF.md`
- 結果画面の見た目QA

Affected files/docs:
- `VISUAL_REGEN_BRIEF.md`
- `docs/CHANGE_INTAKE.md`
- `assets/type-portraits/README.md`

Follow-up tasks:
- 全16枚を独立画像として再生成する。
- 現在の画像反映フローは D-008 に従う。
- PC/スマホの結果画面で全タイプを確認する。

Do not change:
- 画像作り直しに合わせて、診断コードやタイプ定義を変更しない。

Review needed:
- yes
- ビジュアル担当とQA担当による確認が必要。

## D-006 - 結果画面をタイプ理解ページへ再構成

Date: 2026-05-05
Decision maker: 人間
Source: UX review / discussion
Status: adopted

Decision:
- 結果画面は、MBTI診断の結果ページを参考に、タイプコード、タイプ名、キャラ、要約、4軸傾向、強み、注意点、振り返り、共有導線を順に読める構成にする。

Reason:
- 診断結果を受け取った瞬間に、自分のタイプ像を理解しやすくするため。
- キャラを大きく表示する仕様と合わせて、結果画面の主役を明確にするため。

Impact:
- `src/App.tsx`
- `src/styles.css`
- 結果画面のPC/スマホQA

Affected files/docs:
- `src/App.tsx`
- `src/styles.css`
- `docs/CHANGE_INTAKE.md`

Follow-up tasks:
- ブラウザで結果画面を確認する。
- 16枚の新規ポートレート生成後に再度バランスを見る。

Do not change:
- 結果画面再構成に合わせて、診断ロジックやタイプ定義を変更しない。

Review needed:
- yes
- PC/スマホで文字量、キャラサイズ、スコアカードの見え方を確認する。

## D-007 - 16タイプ名をRPG職業風に変更

Date: 2026-05-05
Decision maker: 人間
Source: content direction / discussion
Status: adopted

Decision:
- 16タイプ名を、投資観点とRPG職業感がある短い名称へ変更する。

Adopted names:
- `SLPI`: 配当の守護者
- `SLPG`: 複利の庭師
- `SLAI`: 利回りの職人
- `SLAG`: 良株の庭師
- `STPI`: 守りの操縦士
- `STPG`: 規律の相場剣士
- `STAI`: 市場の観測者
- `STAG`: 機会の狩人
- `RLPI`: 配分の航海士
- `RLPG`: 世界複利の旅人
- `RLAI`: 利回りの錬金術師
- `RLAG`: 未来航路の探求者
- `RTPI`: 資金回転の軽業師
- `RTPG`: 波乗りの機工士
- `RTAI`: 材料読みの軍師
- `RTAG`: 成長波の切り込み役

Reason:
- 結果画面で記憶に残る名前にするため。
- キャラ画像、RPG職業感、MBTI風結果ページと世界観を合わせるため。

Impact:
- `src/diagnosisData.ts`
- 結果画面
- 共有文面

Affected files/docs:
- `src/diagnosisData.ts`
- `docs/CHANGE_INTAKE.md`

Follow-up tasks:
- ブラウザで表示幅や改行を確認する。
- 新規ポートレート生成時のキャラ設定に反映する。

Do not change:
- タイプコード、診断軸、設問数は変更しない。

Review needed:
- yes
- コンテンツ担当/人間が最終の言葉の強さを確認する。

## D-008 - 画像作成担当と反映担当の分離

Date: 2026-05-05
Decision maker: 人間
Source: discussion
Status: adopted

Decision:
- 画像作成担当は、高解像度の生成元画像を `assets/type-portraits-ai-working/` に保存する。
- 画像作成担当は `assets/type-portraits/` を直接上書きしない。
- Codexまたは人間が確認した後、Codexが仕様サイズへの変換や `assets/type-portraits/` への反映を行う。

Reason:
- 生成元画像、仕様サイズ版、アプリ本番参照画像の責務を分け、意図しない本番反映を防ぐため。

Impact:
- 画像生成作業。
- ポートレート反映フロー。
- `VISUAL_REGEN_BRIEF.md`
- `assets/type-portraits/README.md`

Affected files/docs:
- `AGENTS.md`
- `README.md`
- `VISUAL_REGEN_BRIEF.md`
- `VISUAL_FIX_BRIEF.md`
- `assets/type-portraits/README.md`
- `docs/DECISION_LOG.md`

Follow-up tasks:
- 既存の高解像度元画像は `assets/type-portraits-ai-working/` に残す。
- 反映時はCodexが確認後に `assets/type-portraits/` へ反映する。

Do not change:
- 画像作成担当が `assets/type-portraits/` を直接上書きしない。

Review needed:
- no

## 更新ルール

- 判断が古くなった場合、削除せず `superseded` または `deprecated` にする。
- 新しい判断で上書きする場合、古い判断IDを参照する。
- `docs/PROJECT_PRINCIPLES.md` に反映すべき判断は、反映先を明記する。
- `docs/handoffs/` にも次回AIが読むべき重要判断を短く残す。
