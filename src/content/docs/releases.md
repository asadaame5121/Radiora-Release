---
title: リリースノート
description: Radioraの公開ビルドと変更点。
section: Reference
order: 13
updated: 2026-09-23
---

## 0.5.2 — 2026-09-08

### Added

- Optionから有向・双方向のカスタム関係型を追加できるようにしました。意味関係の編集、Treeのフィルターと世代表示、完全バックアップで利用できます。

### Fixed

- Outlineのdrag/drop中に移動元を安定して保持し、保存中の選択・フォーカス復元、取消、画面離脱を修正。
- Lightテーマでフォーカス中のOutline本文が前景色に追従するよう修正。

## 0.5.1 — 2026-08-29

### Changed

- ナビゲーションを整理し、Optionとヘルプをアイコンに集約。ゴミ箱操作をOption内へ移動。
- インスペクターと上部バーの重複操作を整理し、サイドバーの開閉状態を一貫して扱えるように改善。
- 版系統にアウトラインへ戻る導線を追加し、長文編集や意味関係編集の画面構成を見直し。

## 0.5.0 — 2026-08-28

### Changed

- 通常のデスクトップ保存先をSQLiteへ移行し、SurrealDB CLIと専用サイドカーを通常ランタイム・配布バンドルから除外。
- 既存のSurrealDBデータを移行する独立CLI `deno task storage:migrate:legacy` を追加。移行前に元データのバックアップを作成し、未移行データが残る状態では通常起動を止めます。

## 0.4.3 — 2026-08-25

### Added

- アウトライン上で異なる項目を親子に配置すると、同じWork間に有効な明示リンクがない場合に、保存を伴わない暗黙の `FROM` として系統へ反映。
- Lineageで項目を選択したとき、アウトライン上の祖先・子孫と `FROM` でつながる範囲を強調表示。

### Changed

- 暗黙の `FROM` は意味関係編集画面で区別して表示し、有効な明示リンクがある組み合わせでは自動導出しないようにした。

## 0.4.2 — 2026-08-18

### Added

- Linux (x86_64)向けのDesktop bundle生成と起動をサポート。SurrealDB CLIも配布物へ同梱。
- Linux版で起動時のautoUpdate試験、更新のstageとrollbackの構造化ログを追加。

### Changed

- アプリケーションとバックアップ／migration metadataのバージョンを0.4.2へ更新。

## 0.4.0 — 2026-08-09

### Added

- 前回正常に読み込めたアウトラインと選択位置を先行表示する、起動スナップショットを追加。
- 起動失敗時の再試行、Windows上のSurrealDBプロセス復旧、起動準備状態の表示を改善。
- 起動、RPC、静的ファイル、SurrealDBのイベントと処理時間を記録する、JSONL形式の構造化診断ログを追加。
- アプリ内HelpにGitHub Releasesの最新版確認を追加。更新がある場合は安全なリリースページへのリンクを表示。
- Helpを開く `Ctrl+Shift+/` を追加し、アプリ内Helpとドキュメントでキーバインド定義を共有。

### Changed

- アプリケーションとバックアップ／migration metadataのバージョンを0.4.0へ更新。
- 画面、状態管理、SurrealDB接続、repository、migration、backup、validationの責務境界を整理し、起動とデータ処理の保守性を改善。

## 0.3.0 — 2026-08-06

### Added

- ツリービューに2Dカメラ、Chronology／Lineage投影、衝突ベースLOD、クラスタ検査を追加。
- 全体系統のフィルター、永続化された表示条件、切り出し／表示中／フィルターのサイドバータブを追加。

### Fixed

- ツリーレイアウトのラベル衝突、ズーム時の座標変換、空間ハッシュ境界付近のクラスタ判定を修正。
- 選択Work変更時の系統再取得と、非同期レスポンスの世代管理を追加。

## 0.2.0 — 2026-08-05

- WorkとOccurrenceを分離し、同一本文を複数の独立した配置から扱うデータモデルを追加。
- Branch、Revision、Recovery Snapshot、版比較、系統表示を追加。
- Quick Capture、Today、栞、作業再開位置、閲覧履歴、コマンドパレット、内部参照を追加。
- Markdown、OPML、完全JSON backup／restore、旧backup migrationを追加。

[GitHub Releasesで全リリースを見る →](https://github.com/asadaame5121/Radiora/releases)
