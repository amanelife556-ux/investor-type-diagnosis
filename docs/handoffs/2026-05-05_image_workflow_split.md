# 2026-05-05 画像ワークフロー分離 Handoff

## 決定事項

- 画像作成担当は、高解像度の生成元画像を `assets/type-portraits-ai-working/` に保存する。
- 画像作成担当は `assets/type-portraits/` を直接上書きしない。
- Codexまたは人間が確認した後、Codexが必要に応じて変換し、`assets/type-portraits/` へ反映する。

## 背景

active の `assets/type-portraits/` はアプリが直接参照するため、生成途中の画像や未確認の高解像度画像を直接置くと結果画面や集合画像が崩れる可能性がある。
生成元、確認候補、active 反映先を分けることで、画像品質確認とアプリ反映を切り分ける。

## 関連ファイル

- `docs/DECISION_LOG.md` の D-008
- `VISUAL_REGEN_BRIEF.md`
- `VISUAL_FIX_BRIEF.md`
- `assets/type-portraits/README.md`
- `assets/type-portraits-ai-working/`
- `assets/type-portraits/`

## 次回作業時の注意

- 新規生成や再生成はまず `assets/type-portraits-ai-working/` に置く。
- active 反映前に16枚のファイル名、画角、余白、隣接小物の混入がないことを確認する。
- active 反映後は `assets/investor-archetypes.png` の再生成、結果画面のPC/スマホ確認、必要に応じて `npm test` と `npm run build` を行う。
