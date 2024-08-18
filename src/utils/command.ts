import type { envType } from '../types/index'
import { editJsonFile } from './editJson.js'
import type { OptionValues } from 'commander'

/**
 * 從 env 中取得 kintone 環境變數。
 * 如果缺少必要的環境變數則返回 undefined。
 * 
 * @param {string} [appIdKey=''] - 用於從環境變數中獲取應用程式 ID 的鍵。如果未提供，則默認為 'APP_ID'。
 * @returns {envType | undefined} - 包含 Kintone 基礎 URL、用戶名、密碼和應用程式 ID 的物件。，
 */
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

/**
 * 根據提供的 type（外掛或客製化），返回相對應的指令。
 * 
 * @param {OptionValues} options - 使用者輸入的參數。
 */
export const getCommand = (options: OptionValues) => {
  const { type, pluginFilePath, mainfest, appIdKey } = options
  const kintoneInfo = getKintoneInfo(appIdKey)
  if (!kintoneInfo) {
    return
  }
  const { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD, APP_ID } = kintoneInfo

  if (APP_ID) {
    editJsonFile({
      fileName: mainfest,
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
