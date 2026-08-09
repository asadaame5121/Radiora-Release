---
title: リリースノート
description: Radioraの公開ビルドと変更点。
section: Reference
order: 13
updated: 2026-08-09
---

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
