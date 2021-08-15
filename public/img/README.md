## About

![img/gizmo-icon.jpg](img/gizmo-icon.jpg)

**hibara428** と申します。

インフラ・バックエンドエンジニアです。
インフラの設計・構築・運用、バックエンド開発を主な仕事にしています。フロントエンド、ネイティブアプリ開発も少々経験があります。

| Q | A |
| --- | --- |
| 好きなAWSサービスは？ | ECS、Lambda |
| 好きな言語は？ | Golang（勉強中） |
| 好きな運用管理ツールは？ | 探しています（しばらくはTerraform推しでした） |
| 最近の関心は？ | 認証・認可、ゼロトラスト、サーバレス |

## Skills

### インフラ

- AWS、Azure
- 物理（ラックマウントサーバ等)

### サーバ

- Linux（RedHat、Debian/Ubuntu）
- Docker、Apache、Nginx、Fluentd、...
- Lambda

### 運用

- CloudFormation、Ansible、Terraform
- Prometheus、Grafana、Cloud Watch
- ITIL、ISMS

### バックエンド

- PHP、Node.js、TypeScript、Python、Perl、Golang
- OpenAPI、Postman

### フロントエンド

- HTML5、JavaScript
- Android（Kotolin、Java）
- iOS（Swift、Objective-C）

### その他

- OAuth2、OpenID Connect
- Google Apps Script
- GitHub Enterprise

## Business experiences & Hobbies

### ホスティングサービスのインフラ運用

大手ユーザ企業システム部門にて、2年間ホスティングサービスのインフラ運用に従事。

#### 規模感

データセンタにある100台以上の物理サーバおよびVMWare基盤を10名前後のチームで運用。

#### 業務内容

- サーバ設計・構築（主にWeb、DB、FTP、踏み台サーバに従事）
- データセンタでの物理作業
- 監視・障害対応
- ISMS対応
- 利用者向け管理Webサイト（Perl）の構築

など。

### 新規基盤構築プロジェクト管理

新規ハイブリッドクラウド構築プロジェクトのプロジェクト管理補佐として、上流の工程管理に従事。プロジェクト管理、設計資料の検収、動作確認など。

### 開発・検証ハイブリッドクラウド基盤の構築・運用

VMWareベースの開発・検証サーバリプレースに伴い、Dockerベースの開発・検証基盤を構築し運用。社内セキュリティ指針によりすべてのクラウド移行はできないため、外部への公開を要する環境のみAWSへ移行しハイブリッドクラウド構成とした。

#### 規模感

##### オンプレミス

- ラックマウントサーバ3台
- 50コンテナ程度

##### AWS

- EC2 10台程度
- ECS 20コンテナ程度
- Lambda関数 30程度

#### 構築

構成を変更しつつも旧来の利用方法をある程度継続できるよう考慮して設計。

- サンプル公開基盤

営業部門が容易かつ安全に顧客専用サンプル公開環境を用意できるよう、WebUIからS3操作やCloudFormation実行することで顧客専用のサイトを構築できるPHPアプリケーションを実装。認証基盤はCognitoを利用。

#### 運用

- インフラのコード化

開発・検証基盤（アプリケーション実行環境）のコード化に注力。開発・検証環境だけでなく、アプリケーション実行環境の保守性を改善。

- 運用・監視

CloudFormation、Terraform、Ansibleを適宜選択して利用。Prometheus＋Grafanaによりコンテナ含むハイブリッドクラウド基盤を統合監視。一部Cloud Watch併用。AWSではSecurity Hub、Guard Duty等も導入。

### バックエンド配信APIの設計・実装

フロントエンドからのHTTPリクエストに対してコンテンツデータを配信するRESTful APIを設計・実装。APIは認証・認可の機能を持つ。

- 実装言語

いくつかのバージョンがあり、PHP、Lambda（Python）、TypeScriptにて実装。

- 新規設計と改善

新規API設計時には既存APIからの改善として、キャッシュ可能性（CDN利用性）の向上、認証・認可の標準技術化による保守性と安全性の向上、設定の分離による機能拡張性の向上に注力。

### フロントエンド、ネイティブアプリ開発

プロジェクト単位・タスク単位にてHTML5+JavaScriptやAndroid、iOSの開発に従事。

### 個人ゲーム制作

大学時代はサークルにてWindowsプログラミングによるアクションゲーム等を制作。

## 資格

| 取得年 | 資格名 |
| --- | --- |
| 2010 | 応用情報技術者 |
| 2014 | ITIL3 Foundation |
| 2015 | 情報セキュリティ管理士認定試験 |
| 2016 | EXIN OpenStack Foundation |
| 2019 | AWS Certified Solutions Architect - Associate (SAA) |
| 2021 | AWS Certified SysOps Administrator - Associate (SOA) |

## GIZMO trend

ギズモの知名度向上のため、今週の日本の`ギズモ`、`グレムリン`、`モグワイ`のトレンドを表示しています。

参照：[グレムリン \(映画\) \- Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%83%A0%E3%83%AA%E3%83%B3_(%E6%98%A0%E7%94%BB))

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"ギズモ","geo":"JP","time":"now 7-d"},{"keyword":"グレムリン","geo":"JP","time":"now 7-d"},{"keyword":"モグワイ","geo":"JP","time":"now 7-d"}],"category":0,"property":""}, {"exploreQuery":"date=now%207-d&geo=JP&q=%E3%82%AE%E3%82%BA%E3%83%A2,%E3%82%B0%E3%83%AC%E3%83%A0%E3%83%AA%E3%83%B3,%E3%83%A2%E3%82%B0%E3%83%AF%E3%82%A4","guestPath":"https://trends.google.co.jp:443/trends/embed/"}); </script>
