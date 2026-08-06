---
title: 思索のモデル
description: Work、Occurrence、Branch、Revisionを分けて、考えの同一性と配置を保つ。
section: Concepts
order: 3
updated: 2026-08-06
---

Radioraでは、画面上の項目をそのまま一つの木のNodeとして扱いません。本文の同一性、アウトライン上の配置、稿の系統を分けて保存します。

## Work

思索や文章が「同じもの」であるという同一性です。本文を一つのWorkとして保つため、同じ思索を複数箇所へ配置しても複製されません。

## Occurrence

Workが特定のアウトラインへ現れる配置です。Occurrenceごとに階層、順序、折りたたみを持てます。

## Branch

同じWorkの中で進行中の稿を指す名前付きポインターです。`main`を基本に、「全面改稿」「短縮版」「公開版」などを並行して持てます。

## Revision

ある時点で成立した変更不能な本文の版です。Revisionは複数の親を持てるため、複数の稿を合わせた混成稿も表現できます。

## Working CopyとRecovery Snapshot

Working Copyは編集中の本文です。自動保存されますが、通常はRevisionを作りません。Recovery Snapshotは誤編集やクラッシュから戻るための細粒度履歴で、通常の系統樹には表示されません。

復元では履歴を巻き戻さず、現在状態を先に保存してから過去の内容を新しいWorking Copyへ適用します。

## 系統は木に限定しない

基礎構造は複数親を持てるDAGです。画面では必要に応じて木へ投影します。循環や孤児Occurrenceは `Knot` / `Stash` へ隔離して、系統計算を壊しません。
