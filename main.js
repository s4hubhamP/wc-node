import {getFilePath} from './util.js'
import {printNumberOfBytes} from './n-bytes.js'
import {printNumberOfLines} from './n-lines.js'
import {printNumberOfWords} from './n-words.js'
import {printNumberOfCharacters} from './n-chars.js'

const option = process.argv[2]
const fileName = process.argv[3]

const filePath = getFilePath(fileName)

switch (option.toLowerCase()) {
  case '-c': {
    printNumberOfBytes(filePath)
    break
  }

  case '-l': {
    printNumberOfLines(filePath)
    break
  }

  case '-w': {
    printNumberOfWords(filePath)
    break
  }

  case '-m': {
    printNumberOfCharacters(filePath)
    break
  }

  default: {
    console.log(`Unsupported Option ${option}`)
    console.log(`Available options are:\n
  1. -c Number of bytes
  2. -l Number of lines
  3. -w Number of words
  4. -m Number of characters
  `)
    break
  }
}
