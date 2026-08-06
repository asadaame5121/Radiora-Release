---
title: 入出力とバックアップ
description: Markdown、OPML、完全JSONバックアップを目的に応じて使い分ける。
section: Guides
order: 5
updated: 2026-08-06
---

## Markdown

現在のOutlineを書き出します。用途に応じて、Radiora内部IDを保持する形式、表示名だけを残すportable形式、解決済み参照をWikiリンクにするObsidian形式を選べます。

## OPML

アウトラインの階層と本文を他のアウトライナーと交換するための形式です。Work、Revision、Branch、意味リンクなどのグラフ情報は完全には復元しません。

## 完全JSONバックアップ

全グラフ状態を復元可能な形で保存します。新しい形式には `format`、`schemaVersion`、`exportedAt`、`source`、`data` のenvelopeがあります。

```json
{
  "format": "radiora-backup",
  "schemaVersion": 6,
  "exportedAt": "2026-08-06T00:00:00.000Z",
  "data": {}
}
```

復元は現在の全状態を置き換えるため、先に現在のバックアップを書き出してください。入力全体の検証に失敗した場合、現在のデータは変更されません。

## 交換時の考え方

MarkdownとOPMLは外部ツールとの交換用、完全JSONはRadioraの状態を保全するための形式です。Markdownだけでグラフ情報を完全に表現しようとせず、目的に合う形式を選びます。
