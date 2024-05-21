# kintone-uploader-env

[English](https://github.com/westleft/kintone-uploader-env) | 繁體中文

🚀 基於基於 [@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader) 的開發工具，在開發階段可以讀取 `.env` 的變數並使用。

## 安裝

```shell
npm install -D kintone-uploader-env
```

## 使用

在專案根目錄建立 `.env` 檔案並填入以下變數：

```shell
KINTONE_BASE_URL=
KINTONE_USERNAME=
KINTONE_PASSWORD=
APP_ID=
```

也可以在 `package.json` 中新增指令以方便使用：

```
// package.json 

"scripts": {
    "dev": "kintone-uploader-env",
```

或者直接執行：

```
npx kintone-uploader-env
```

## 參數

```shell
Options
    -e 指定 .env 的檔案路徑，預設為 .env
    -m 指定 mainfest.json 的檔案路徑，預設為 mainfests/dev.json
```