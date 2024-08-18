import fs from 'fs'
import path from 'path'

/**
 * 編輯 JSON 檔案中的指定 key, value。
 * 
 * @param {Object} data - 編輯 JSON 檔案所需的資料。
 * @param {string} data.key - 要修改的鍵名。
 * @param {string} data.value - 要設定的新值。
 * @param {string} data.fileName - 要編輯的 JSON 檔案名稱。
 */
export const editJsonFile = (data: {
  key: string
  value: string
  fileName: string
}) => {
  const { key, value, fileName } = data
  const targetPath = path.join(process.cwd(), fileName)

  fs.readFile(targetPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err)
      return
    }

    const jsonObject = JSON.parse(data)
    jsonObject[key] = value
    const updatedJsonString = JSON.stringify(jsonObject, null, 2)

    fs.writeFile(targetPath, updatedJsonString, (err) => {
      if (err) {
        console.error('Failed to write file:', err)
        return
      }
    })
  })
}
