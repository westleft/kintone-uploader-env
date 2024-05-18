import fs from 'fs'
import path from 'path'

// edit mainfest app id
export const editJsonFile = (data: {
  key: string
  value: string
  mainfest: string
}) => {
  const { key, value, mainfest } = data
  const targetPath = path.join(process.cwd(), mainfest)

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
