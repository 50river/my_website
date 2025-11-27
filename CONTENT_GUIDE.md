# コンテンツ更新マニュアル (Jekyll版)

## セットアップ
- 事前にRuby/Bundlerが必要です。
- 依存インストール: `bundle install`
- ローカル確認: `bundle exec jekyll serve` (http://localhost:4000)
  - 自動リロードしたい場合は `bundle exec jekyll serve --livereload`

## 全体構成
- トップページ: `index.html`（セクションの文言やレイアウト調整はここ）
- レイアウト: `_layouts/` 配下
  - `default.html`…共通ヘッダー/フッター
  - `work.html`…Works詳細
  - `media.html`…Media詳細
  - `service.html`…Services詳細
- コレクション (MDで管理)
  - Works: `_works/*.md`（表示上限: トップ6件）
  - Media: `_media/*.md`（トップ5件、一覧は `/media/`）
  - Services: `_services/*.md`（一覧は `/services/`）
- データ: `_data/portfolio.yml`（プロフィールや経歴など）

## 追加・更新のしかた
### Worksを追加
1) `_works/slug.md` を作成  
```yaml
---
title: "タイトル"
category: business # business / community / dev など
image: "https://...jpg"
tags: ["React", "SaaS"]
order: 5          # 数字が小さいほど上に表示
---
本文をMarkdownで記述。1〜2段落程度推奨。
```
- トップ表示は6件まで。全件は `/works/` で自動生成。

### Mediaを追加
1) `_media/slug.md` を作成  
```yaml
---
title: "見出し"
media: "媒体名"
date: 2024-10-12   # 日付で降順ソート
cover: "https://...jpg"
tags: ["Interview"]
---
本文をMarkdownで記述。概要を1段落入れると一覧の抜粋に使われます。
```
- トップ表示は最新5件。全件は `/media/`。

### Servicesを追加
1) `_services/slug.md` を作成  
```yaml
---
title: "サービス名"
icon: code         # Lucideアイコン名
order: 3           # 並び順
cover: "https://...jpg"
---
サービス概要をMarkdownで記述。問い合わせ導線は自動で表示されます。
```
- 全件は `/services/`。トップにも全件リンクあり。

### プロフィール/経歴を更新
- `_data/portfolio.yml` の `profile` 配下を更新。
- About詳細ページは `about/index.html`。文言変更はここで可能。

### ナビゲーション・アンカー
- メニューは `default.html` にあり、`#home/#about/#works/#services/#media/#contact` を使っています。トップ以外から戻る場合も相対URLでトップに戻ります。

### 画像の扱い
- 外部URL利用可。ローカルに置く場合は `assets/` に保存し、相対パスで参照。
- 大きすぎる画像は表示が重くなるので、Web向けに圧縮したURLを推奨。

## 開発のヒント
- TailwindはCDN読み込み。クラス変更のみでデザイン調整可。
- ビルド確認: `bundle exec jekyll build`（CI想定の静的ビルド）
- トップの文字量が多い場合は `line-clamp` クラスを使って省略できます。

## よくある質問
- 「ホームに戻れない」→ ナビのURLは `{{ '/' | relative_url }}#home` 形式。崩れた場合は `default.html` を確認。
- 「一覧に出てこない」→ Front Matterの `order` と `date` を確認。トップの表示上限（Works:6件、Media:5件）がある点に注意。
