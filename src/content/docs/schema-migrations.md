---
title: スキーマと移行
description: DBとJSONバックアップの形式を安全に進化させるための規則。
section: Reference
order: 6
updated: 2026-08-06
---

実DBと交換用JSONは別々のschema versionを持ちます。アプリのSemVer、SurrealDBのversion、storage schema version、backup schema versionを相互に代用しません。

## 移行の規則

- versionは0以上の単調増加整数とする
- 永続データの形または意味を変えるたび、影響するschema versionを増やす
- migrationは必ず `N -> N + 1` の一段ずつとする
- 自動downgradeは提供しない
- 失敗時はmigration前のバックアップから復元する

## Expand / Migrate / Contract

大きな置換は次の三段階に分けます。

1. **Expand** — 新構造を追加する
2. **Migrate** — 旧データを変換し、整合性を検証する
3. **Contract** — 十分な検証後に旧構造を削除する

## Importの安全性

JSON importは入力ファイルを直接書き換えません。旧versionはメモリ内または一時領域で一段ずつ現行形式へ変換し、全体検証に成功してからDBへ反映します。現在のアプリより新しいversionは部分的に読み込まず、明示的に拒否します。

検証では、参照整合性だけでなく、日本語、改行、Markdown、`radiora://` 内部参照を含むround-tripも確認します。
