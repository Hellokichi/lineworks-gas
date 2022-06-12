# LINE WORKS API 2.0 for Google Apps Script
## スクリプトID
`1ynJaeeBqek3MLXQ5RzkDzsexXph4WfckvavxuvtDMfcIZ7tcqgj68r7P`

## 使い方
### configの準備
```javascript
const config = {
  SCOPE: 'bot,bot.read,user.read', // スコープカンマ区切り
  CLIENT_ID: 'CLIENT_ID',
  CLIENT_SECRET: 'CLIENT_SECRET',
  SERVICE_ACCOUNT: 'SERVICE_ACCOUNT',
  PRIVATE_KEY: `
-----BEGIN PRIVATE KEY-----
xxxxx
xxxxx
xxxxx
-----END PRIVATE KEY-----
`
}
```

### clientの生成
```javascript
const client = Lineworks.credential(config);
```

### API Call
1. [LINE WORKS Developers API 2.0 Documetents](https://developers.worksmobile.com/jp/reference/introduction?lang=ja) からコールしたいAPIを探す。
2. HTTP メソッドとパスを確認する。
3. 以下のように対応する`client`のメソッドの引数にパスやRequest Bodyを渡す。
- GET：`client.get_(Path, [Query Parameters])`
- POST：`client.post_(Path, [Request Body])`
- PUT：`client.put_(Path, [Request Body])`
- PATCH：`client.patch_(Path, [Request Body])`
- DELETE：`client.delete_(Path)`

> **_NOTE:_** アンダースコアは予約語と被らないようにするための配慮。


## Request Examples
### ユーザーリストの取得
```javascript
const users = client.get_('/users');
```

### メッセージの送信 - トークルーム指定
```javascript
const botId = 11111;
const channelId = 22222;
const content = {
  content: {
    type: 'text',
    text: 'Hello'
  }
}
client.post_(`/bots/${botId}/channels/${channelId}/messages`, content);
```

## 注意
LINE WORKS公式のライブラリではありません。
使用上起きた問題についての責任は負いません。
最新情報は公式サイトをご確認ください。
https://developers.worksmobile.com/jp/?lang=ja
