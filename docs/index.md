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

| 期間    | 技術 |
| ------ | --- |
| 5年以上 | PHP(Laravel,CakePHP) |
| 1-2年  | Node.js(Express) / TypeScript / Kotlin / Python / Perl / Lambda(主に Node.js) |
| 少々   | Golang / Swift / Objective-C / Google App Script |

### Infrastructure

| 期間    | 技術 |
| ------ | --- |
| 5年以上 | AWS(設計,構築,運用) |
| 3-4年  | 物理サーバ運用保守(IBM,Dell 等) / DC 運用(配線,運用管理等) |
| 少々   | Azure(運用) / GCP(設計,構築) |

### Server

| 期間    | 技術 |
| ------ | --- |
| 5年以上 | Linux(RedHat 系,Debian 系) / Docker(サーバ運用含む) / Apache / Nginx |
| 1-2年  | Fluentd / Traefik / Harbor / GitHub Enterprise |

### Operations

| 期間    | 技術 |
| ------ | --- |
| 5年以上 | Terraform / Prometheus / Grafana |
| 1-2年  | Ansible / Mackerel / NewRelic |

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

### 配信 API の設計・実装

ブラウザ、スマートフォンアプリからのリクエストにデータを配信するバックエンド Restful API の設計および実装。

#### 期間

- 5 年

#### 規模感

- PHP5/PHP7/Lambda(Python)/TypeScript 実装あり

#### 備考

機能追加中心の作業だが、新規 API 設計・実装も経験。既存インタフェースに対して以下の改善に注力。

- キャッシュ可能性(CDN 利用性)の向上
- 認証・認可の標準技術化(OAuth2)による保守性と安全性の向上
- 設定の分離による機能拡張性の向上

### Web アプリ開発

#### 期間

- 1 年

#### 規模感

- Laravel 実装
- RDB、Bootstrap 利用

### ハイブリッドクラウド開発・検証基盤運用

オンプレミス＋ AWS のハイブリッドクラウド構成を運用。開発・検証の必要に応じてサーバを追加構築。

#### 期間

- 5 年

#### 規模感

- オンプレミス
  - ラックマウントサーバ 3 台
  - （計 50 コンテナ）
- AWS
  - EC2 10 台
  - Fargate 20 コンテナ
  - Lambda 30 関数

#### 備考

開発・検証基盤のコード化に注力。基盤だけでなくアプリ実行環境の保守性を改善。運用管理は CloudFormation、Terraform、Ansible を適宜選択。

### 開発基盤のクラウド＋コンテナ移行

仮想化基盤を使っていた開発基盤をコンテナ化、AWS 化。

#### 期間

- 1 年

#### 規模感

- ラックマウントサーバ 1 台
- （仮想サーバ 5 台）

#### 備考

保守性を高めるため、1 サーバに機能集約されていたりするものを機能整理し、コンテナ化。

### ホスティングサービスのインフラ運用

大手ユーザ企業システム部門にて、ホスティングサービスのインフラ運用に従事。

#### 期間

- 2 年

#### 規模感

- データセンタ上の 100 台以上の物理サーバ、および VMWare 基盤
- 10 名前後のチーム

#### 備考

- サーバ設計・構築(主に Web、DB、FTP、踏み台サーバに従事)
- データセンタでの物理作業(ラックマウント、配線、工事対応等)
- 監視・障害対応
- ISMS 対応
- 利用者向け管理 Web サイト(Perl)の構築

### ハイブリッドクラウド基盤構築 PJ 管理

ハイブリッドクラウド基盤構築 PJ 管理補佐。サーバ関連の要件定義、スケジュール管理、成果物の検収など。

#### 期間

- 1 年

### ブラウザ・ネイティブアプリ開発

プロジェクト単位・タスク単位での HTML5/Android/iOS の開発。

#### 期間

- 1 年
