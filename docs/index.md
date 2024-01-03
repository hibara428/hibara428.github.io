## About

![img/gizmo-icon.jpg](img/gizmo-icon.jpg)

**hibara428** \<hibara428@gmail.com\>

インフラ・バックエンドエンジニア

- AWS を中心としたインフラ設計・構築・運用
- PHP を中心としたバックエンド開発
- (システムアーキテクト方面へ広げてゆきたい)

## Sites

[GitHub](https://github.com/hibara428) / [Zenn](https://zenn.dev/hibara428)

## Favorites

アーキテクチャ論 / DevOps / サーバレス / ホラー / SF(Sci-Fi) / ロック・ミュージック

#### Favorite Technical Books

- [実践 UML 第 2 版 ―パターンによる統一プロセスガイド](https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5UML%E2%80%95%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%B1%E4%B8%80%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%82%AC%E3%82%A4%E3%83%89-%E3%82%AF%E3%83%AC%E3%83%BC%E3%82%B0-%E3%83%A9%E3%83%BC%E3%83%9E%E3%83%B3/dp/4894713861/ref=sr_1_3?adgrpid=52281422574&gclid=Cj0KCQiAhc-sBhCEARIsAOVwHuRH7mBjfYC5nkajzNlpWe_wDynbD7TBcqDoPD4uTvO4D-NpBHZWNOQaAq1PEALw_wcB&hvadid=679055276120&hvdev=c&hvlocphy=1009435&hvnetw=g&hvqmt=e&hvrand=16561785684544326894&hvtargid=kwd-334580688393&hydadcr=16035_13711624&jp-ad-ap=0&keywords=%E5%AE%9F%E8%B7%B5uml&qid=1704238186&sr=8-3)
- [入門監視](https://www.oreilly.co.jp/books/9784873118642/)
- [ソフトウェアアーキテクチャの基礎 ―エンジニアリングに基づく体系的アプローチ](https://www.oreilly.co.jp//books/9784873119823/)

## Skills

### Development

| 期間     | 技術                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| 5 年以上 | PHP(Laravel,CakePHP)                                                          |
| 1-2 年   | Node.js(Express) / TypeScript / Kotlin / Python / Perl / Lambda(主に Node.js) |
| 少々     | Golang / Swift / Objective-C / Google App Script                              |

### Infrastructure

| 期間     | 技術                                                       |
| -------- | ---------------------------------------------------------- |
| 5 年以上 | AWS(設計,構築,運用)                                        |
| 3-4 年   | 物理サーバ運用保守(IBM,Dell 等) / DC 運用(配線,運用管理等) |
| 少々     | Azure(運用) / GCP(設計,構築)                               |

### Server

| 期間     | 技術                                                                 |
| -------- | -------------------------------------------------------------------- |
| 5 年以上 | Linux(RedHat 系,Debian 系) / Docker(サーバ運用含む) / Apache / Nginx |
| 1-2 年   | Fluentd / Traefik / Harbor / GitHub Enterprise                       |

### Operations

| 期間     | 技術                             |
| -------- | -------------------------------- |
| 5 年以上 | Terraform / Prometheus / Grafana |
| 1-2 年   | Ansible / Mackerel / NewRelic    |

## Certifications

- 修士(情報工学)
- AWS Certificate Solution Architect - Associate (2019/02〜)
- AWS Certificate SysOps Administrator - Associate (2021/02〜)
- IPA 応用情報処理技術者 (2011/10)
- ITIL V3 - Foundation (2013/10)
- LPIC-1 (2014/07)
- 情報セキュリティ管理士認定試験 (2015)
- EXIN OpenStack Foundation (2016)
- 日商簿記 3 級 (2021/09)

## Business Experiences

### Web アプリ開発

Laravel ベース Web アプリケーションの設計・実装、および技術的負債解消のリード。

| 項目 | 値           |
| ---- | ------------ |
| 期間 | 2 年〜現在   |
| 実装 | PHP(Laravel) |
| 規模 | 開発 5 名強  |

#### 補足

技術的負債の解消として、以下のような取り組みを推進。

- 設計思想の適用や静的解析の導入等によるコード保守性の向上
- スクラム開発ベースの開発フロー改善による開発生産性の向上
- オブザーバビリティ向上によるパフォーマンス改善運用の導入

### データ配信 API 開発

ブラウザ/スマートフォンアプリへデータを配信するバックエンド RESTful API の設計・実装。

| 項目 | 値                        |
| ---- | ------------------------- |
| 期間 | 5 年                      |
| 実装 | PHP / Lambda / TypeScript |
| 規模 | 開発 1 名                 |

#### 補足

以下の改善に注力。

- キャッシュ可能性の向上(CDN の活用)
- 認証・認可の標準技術化(OAuth2)による保守性と安全性の向上
- 設定の分離による機能拡張性の向上

### ハイブリッドクラウド開発・検証基盤の運用

オンプレミス＋ AWS のハイブリッドクラウド構成の開発・検証基盤の設計・構築・運用。

| 項目 | 値                                                                               |
| ---- | -------------------------------------------------------------------------------- |
| 期間 | 5 年                                                                             |
| 構成 | ラックマウント 3 台 / EC2 10 台 / Fargate 20 コンテナ / Lambda 30 ファンクション |
| 規模 | 運用 10 名弱                                                                     |

#### 補足

以下の改善に注力。

- 仮想化基盤の AWS+コンテナ移行、集約サーバの分離
- IaC 化の推進(CFn,Terraform,Ansible の活用)
- アプリ実行環境のソフトウェアバージョン更新などの保守性改善

### ホスティングサービスのインフラ基盤運用

ホスティングサービスのための DC 上にある物理サーバ、仮想基盤インフラの保守運用。

| 項目 | 値                                                 |
| ---- | -------------------------------------------------- |
| 期間 | 2 年                                               |
| 構成 | DC 上の 100 台以上の物理サーバ、および VMWare 基盤 |
| 規模 | 運用 10 名弱                                       |

#### 補足

以下のような運用に従事。

- サーバ設計・構築(主に Web、DB、FTP、踏み台サーバ)
- DC での物理作業(ラックマウント、配線、工事対応等)
- 監視・障害対応
- ISMS 対応
- 利用者向け管理 Web サイト(Perl)の構築

### ハイブリッドクラウド基盤構築プロジェクト管理

ハイブリッドクラウド基盤構築管理補佐として、サーバ関連の要件定義、スケジュール管理、成果物の検収など。

| 項目 | 値   |
| ---- | ---- |
| 期間 | 1 年 |

### ブラウザ・ネイティブアプリ開発

プロジェクト単位・タスク単位でのブラウザ・ネイティブアプリ開発。

- HTML5
- Android(Kotlin)
- iOS(Objective-C/Swift)
