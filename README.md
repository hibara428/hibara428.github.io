## About

![img/gizmo-icon.jpg](img/gizmo-icon.jpg)

**hibara428** と申します。

インフラ・バックエンドエンジニアです。
インフラの設計・構築・運用、バックエンド開発を主な仕事にしています。ネイティブアプリ開発も少々経験があります。

| Q | A |
| --- | --- |
| 好きなAWSサービスは？ | ECS、Lambda |
| 好きな言語は？ | Golang（勉強中） |
| 好きな運用管理ツールは？ | 探しています（しばらくはTerraform推しでした） |
| 最近の関心は？ | 認証・認可、ゼロトラスト、サーバレス |

## Skills

### インフラ

- AWS、Azure
- 物理(ラックマウントサーバ等)

### サーバ

- Linux、Bash
- Docker、Apache、Nginx、Fluentd、Traefik、MySQL...
- GitHub Enterprise

### 運用管理

- CloudFormation、Ansible、Terraform
- Prometheus、Grafana、CloudWatch
- ITIL、ISMS

### バックエンド

- PHP、Node.js、TypeScript、Python、Perl、Golang
- Docker、Lambda
- OpenAPI

### フロントエンド

- Android(Kotolin/Java)、iOS(Swift/Objective-C)

### その他

- OAuth2、OpenID Connect
- Google Apps Script

### 資格

- 応用情報技術者 (2010/10)
- ITIL3 Foundation (2014)
- 情報セキュリティ管理士認定試験 (2015)
- OpenStack ファンダメンタルズ (2016)
- AWS Certified Solutions Architect - Associate (SAA) (2019/02)
- AWS Certified SysOps Administrator - Associate (SOA) (2021/02)

## Business experiences & Hobbies

### ホスティングサービスのインフラ運用

大手ユーザ企業システム部門にて、100台以上のサーバを10名前後のチームで運用。サーバ設計・構築、データセンタでの物理作業、監視・障害対応、ISMS対応など。携わったサーバはWebサーバ、DBサーバ、FTPサーバ、踏み台サーバ等。ユーザ向けの管理Webサイト(Perl)の構築。

### 開発・検証基盤の構築・運用

VMWareベースの開発・検証サーバリプレースに伴い、Dockerベースの開発・検証基盤を構築し運用。ラックマウントサーバ3台、コンテナ数は運用関連含めて50プロセス以上。社内セキュリティ指針のためすべてのクラウド移行はできなかったため、外部への公開を要する環境のみAWSへと移行しハイブリッド構成とした。開発基盤のコード化に取り組み、開発・検証環境だけでなくアプリケーション実行環境の保守性を改善。新規の構成に変更しつつも旧来の利用方法をある程度継続できるよう考慮して設計。また営業部門が操作する箇所は、内部的にAWS APIを叩くことで、S3操作やCloudFormation実行することで環境構築できるPHPアプリケーションを実装。運用管理はCloudFormation、Terraform、Ansibleを適宜利用。Prometheus＋Grafanaによりコンテナを含むハイブリッド環境を監視。

### バックエンド配信APIの設計・実装

フロントエンドからのHTTPリクエストに対してコンテンツデータを配信するRESTful APIを設計・実装。APIは関連して認証・認可の機能を持つ。いくつかのバージョンがあり、PHP、Lambda(Python)、TypeScriptにて実装。旧APIの改善に取り組んだ際は、キャッシュ可能性の向上、認証・認可の標準技術化による保守性と安全性の向上、設定の分離による機能拡張性の向上に注力。

### フロントエンド、ネイティブアプリ開発

プロジェクト単位・タスク単位にてHTML5+JavaScriptやAndroid、iOSの開発に従事。

### 個人ゲーム制作

大学時代はサークルにてWindowsプログラミングによるアクションゲーム等を制作。アルバイトにてCakePHPを用いてWebサイト制作。

## GIZMO trend

ギズモの知名度向上のため、今週の日本の`ギズモ`、`グレムリン`、`モグワイ`のトレンドを表示しています。

参照：[グレムリン \(映画\) \- Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%83%A0%E3%83%AA%E3%83%B3_(%E6%98%A0%E7%94%BB))

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES"、 {"comparisonItem":[{"keyword":"ギズモ"、"geo":"JP"、"time":"now 7-d"}、{"keyword":"グレムリン"、"geo":"JP"、"time":"now 7-d"}、{"keyword":"モグワイ"、"geo":"JP"、"time":"now 7-d"}]、"category":0、"property":""}、 {"exploreQuery":"date=now%207-d&geo=JP&q=%E3%82%AE%E3%82%BA%E3%83%A2、%E3%82%B0%E3%83%AC%E3%83%A0%E3%83%AA%E3%83%B3、%E3%83%A2%E3%82%B0%E3%83%AF%E3%82%A4"、"guestPath":"https://trends.google.co.jp:443/trends/embed/"}); </script>