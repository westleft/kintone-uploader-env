# kintone-uploader-env

English | [繁體中文](https://github.com/westleft/kintone-uploader-env/blob/main/README-zh.md)

🚀 Development tool based on [@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader) that allows reading variables from `.env` during development.

## Installation

```
npm install -D kintone-uploader-env
```

## Usage

Create a `.env` file in the root directory of your project and fill in the following variables:

```
KINTONE_BASE_URL=
KINTONE_USERNAME=
KINTONE_PASSWORD=
APP_ID=
```

You can also add commands to your `package.json` for convenience:

```
// package.json 

"scripts": {
    "dev": "kintone-uploader-env",
```

Or execute directly:

```shell
npx kintone-uploader-env
```

## Options

```shell
Options
    -t Upload type, can specify customize or plugin, default is customize.
    -p Path to the plugin file, default is plugin.zip.
    -e Specify the path to the .env file, default is .env
    -m Specify the path to the mainfest.json file, default is mainfests/dev.json
    -app Specify the key to read the app ID from the .env file
```