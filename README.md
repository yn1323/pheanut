# Pheanut

## 概要
国産2Dゲームライブラリ [Phina.js](https://phinajs.com/)を少しだけ使いやすくするツールライブラリ

### 機能
- フォルダ構成を作成
- hot reload
- linter
- assets/scenes用ファイルの自動生成
- 状態管理の追加

## 必要な環境
- Node.js
- npm(最新のNode.jsがあれば不要)


## はじめかた(最初に1回だけ実行)

1. 新規フォルダを作成
   ```bash
   mkdir pheanut
   ```
1. 作成したフォルダに移動
   ```bash
   cd pheanut
   ```
1. npmの初期化
   ```bash
   npm init
   ```
1. Pheanutの追加
   ```bash
   npm install --save-dev pheanut
   ```
1. Pheanutの中身を展開
  ```bash
  node ./node_modules/pheanut/bin
  ```

## 便利コマンド
```bash
# assets/scenesのファイルを作成
# assets追加、scene追加時に必ず実行すること
npm run auto
```

```bash
# hot reload
npm run dev
```

```bash
# ビルド(作品完成時に実行)
npm run build
```

```bash
# lint
npm run lint
```

## 課題
- asset/scenesの自動ファイル作成がhot reload時には行われない


## Author
ynatani

## License
MIT
