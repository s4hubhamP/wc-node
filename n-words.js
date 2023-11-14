import {createReadStream} from 'fs'

export async function printNumberOfWords(path) {
  try {
    let words = 0
    const stream = createReadStream(path, {encoding: 'utf-8'})

    for await (let chunk of stream) {
      let isWord = false

      for (let i = 0; i < chunk.length; i++) {
        const char = chunk[i]
        // https://developer.mozilla.org/en-US/docs/Glossary/CRLF
        if (['\n', '\r', ' '].includes(char)) {
          if (isWord) {
            words++
            isWord = false
          }
        } else {
          isWord = true
        }
      }

      if (isWord) words++
    }

    console.log(words)
  } catch (error) {
    console.error('Error:', error.message)
  }
}
