import {createReadStream} from 'fs'

export async function printNumberOfCharacters(path) {
  const stream = createReadStream(path, {encoding: 'utf-8'})

  let chars = 0
  for await (const chunk of stream) {
    chars += chunk.length
  }

  console.log(chars)
}
