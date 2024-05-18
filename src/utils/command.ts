import type { envType } from '../types/index'
import { editJsonFile } from './editJson.js'

const getKintoneInfo = (): envType | undefined => {
  const { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD, APP_ID } = process.env
  if (!KINTONE_BASE_URL || !KINTONE_USERNAME || !KINTONE_PASSWORD) {
    console.error('Please check .env file is fillout')
    return undefined
  }

  return { KINTONE_BASE_URL, KINTONE_USERNAME, KINTONE_PASSWORD, APP_ID }
}

export const getCommand = (mainfest: string) => {
  const kintoneInfo = getKintoneInfo()
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

  return `npx kintone-customize-uploader --base-url ${KINTONE_BASE_URL} --username ${KINTONE_USERNAME} --password ${KINTONE_PASSWORD} ${mainfest}`
}
