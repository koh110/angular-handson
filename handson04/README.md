# 入力を受け付けてみる

## get started

```:js
npm install
npm start
```

1. 削除ボタンのハンドラを作る
1. ハンドラを削除ボタンにbindする
1. ハンドラの中身を作る

## テクニック

Angularのchangeイベントは日本語環境で使うと変換完了まで反応しないブラウザがある(IEとか)ので、keyupでvalueを受け取る方が確実
