import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

export function getFilePath(fileName) {
  const mainPath = fileURLToPath(import.meta.url)
  const dirPath = dirname(mainPath)
  return join(dirPath, fileName)
}
