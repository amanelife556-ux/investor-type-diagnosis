# 2026-05-06 グループB投稿カード不足分補完 Handoff

## 対象

- 指示書: `SHARE_CARD_PARALLEL_WORK_BRIEF.md`
- グループB: `STPI`, `STPG`, `STAI`, `STAG`
- 作業場所: `/Volumes/My Passport for Mac/development/investor-type-diagnosis`

## 実施内容

- グループBの保存形式を指示書に照らして確認。
- 既存の本体カード `assets/share-cards-ai-working/{TYPE_CODE}.png` は4枚とも `1200 x 675` で存在。
- 既存のプレビュー `assets/share-cards-ai-working/{TYPE_CODE}-preview-390w.png` は4枚とも `390 x 219` で存在。
- 不足していた `assets/share-cards-ai-working/{TYPE_CODE}-hybrid-source.png` を4枚作成。

## 作成ファイル

- `assets/share-cards-ai-working/STPI-hybrid-source.png`
- `assets/share-cards-ai-working/STPG-hybrid-source.png`
- `assets/share-cards-ai-working/STAI-hybrid-source.png`
- `assets/share-cards-ai-working/STAG-hybrid-source.png`

## 補足

- `STPI` は既存の `STPI-source.png` が `1672 x 941` で存在したため、それを `STPI-hybrid-source.png` として複製。
- `STPG`, `STAI`, `STAG` は真の高解像度生成元が見つからなかったため、既存の `1200 x 675` 納品候補を `*-hybrid-source.png` として複製。
- `assets/share-cards/` は直接変更していない。

## 確認結果

- `npm test`: 48 tests passed
- `npm run build`: 成功

## 未確認

- `STPG`, `STAI`, `STAG` の真の高解像度生成元は未発見。
- 目視品質は既存カードの品質に依存する。今回の作業は不足保存形式の補完。
