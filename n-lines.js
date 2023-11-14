import {createReadStream} from 'fs'

export async function printNumberOfLines(path) {
  try {
    let lines = 1
    const stream = createReadStream(path, {encoding: 'utf-8'})

    for await (const chunk of stream) {
      lines += (chunk.match(/\n/g) || []).length
    }

    console.log(lines)
  } catch (error) {
    console.error('Error:', error.message)
  }
}
