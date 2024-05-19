# kintone-uploader-env

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
    -e Specify the path to the .env file, default is .env
    -m Specify the path to the mainfest.json file, default is mainfests/dev.json
```