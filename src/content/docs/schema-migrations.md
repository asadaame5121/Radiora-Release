---
title: スキーマと移行
description: DBとJSONバックアップの形式を安全に進化させるための規則。
section: Reference
order: 11
updated: 2026-09-23
---

v0.5.2タグ後の未リリース変更を含む現行checkoutでは、通常のデスクトップ保存先はSQLiteで、そのschema versionは2、完全JSONバックアップのコード上のschema versionは8です。これらは別々に進むため、アプリのSemVer、SQLite schema version、backup schema versionを相互に代用しません。旧SurrealDB schemaは過去データの移行元としてだけ扱います。

**検証状態:** 2026-09-23の `deno task test` は742件成功、12件失敗でした。`json_backup_test.ts`・`json_store_test.ts`にcurrent exportをversion `7`とする期待値や、version `8`をfuture扱いするケースが残っています。`deno task verify` もBiome lintで停止したため、version `8`は現行コードの出力値ですが、検証済みのbackup形式ではありません。

## 移行の規則

- versionは0以上の単調増加整数とする
- 永続データの形または意味を変えるたび、影響するschema versionだけを増やす
- migrationは必ず `N -> N + 1` の一段ずつとする
- 自動downgradeは提供しない
- 失敗時はmigration前のバックアップから復元する

## Expand / Migrate / Contract

大きな置換は次の三段階に分けます。

1. **Expand** — 新構造を追加する
2. **Migrate** — 旧データを変換し、整合性を検証する
3. **Contract** — 十分な検証後に旧構造を削除する

## Importの安全性

完全JSONバックアップの復元は入力ファイルを直接書き換えません。旧versionはメモリ内で一段ずつ現行形式へ変換し、全体検証に成功してからDBへ反映します。現在のアプリより新しいversionは部分的に読み込まず、明示的に拒否します。旧SurrealDBデータからの移行は通常の起動時ではなく、独立した `deno task storage:migrate:legacy` で行います。

移行の検証では、参照整合性に加え、日本語、改行、Markdown、`radiora://` 内部参照を含むround-tripを確認します。
