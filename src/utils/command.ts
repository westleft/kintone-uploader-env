import type { envType } from '../types/index'
import { editJsonFile } from './editJson.js'
import type { OptionValues } from 'commander'

const getKintoneInfo = (appIdKey: string = ''): envType | undefined => {
  let APP_ID
  const { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD } = process.env
  if (!KINTONE_BASE_URL || !KINTONE_USERNAME || !KINTONE_PASSWORD) {
    console.error('Please check .env file is fillout')
    return undefined
  }

  if (appIdKey) {
    APP_ID = process.env[appIdKey]
  } else {
    APP_ID = process.env['APP_ID']
  }

  return { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD, APP_ID }
}

export const getCommand = (options: OptionValues) => {
  const { type, pluginFilePath, mainfest, appIdKey } = options
  const kintoneInfo = getKintoneInfo(appIdKey)
  if (!kintoneInfo) {
    return
  }
  const { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD, APP_ID } = kintoneInfo

  if (APP_ID) {
    editJsonFile({
      mainfest,
      key: 'app',
      value: APP_ID
    })
  }

  if (type === 'plugin') {
    console.log('plugin uploading...')
    return `npx kintone-plugin-uploader --base-url ${KINTONE_BASE_URL} --username ${KINTONE_USERNAME} --password ${KINTONE_PASSWORD} ${pluginFilePath}`
  }

  return `npx kintone-customize-uploader --base-url ${KINTONE_BASE_URL} --username ${KINTONE_USERNAME} --password ${KINTONE_PASSWORD} ${mainfest}`
}
