# Simple Node.js [wc](<https://en.wikipedia.org/wiki/Wc_(Unix)>) Command

This is a simple Node.js program that serves as a basic version of the `wc` Linux command. The program provides information about the number of bytes, lines, words or characters in a given file.

## Usage

### Prerequisites

Make sure you have Node.js installed on your machine.

### Running the Program

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the program:

   ```bash
   node main.js [option] [file]
   ```

   - Replace `[option]` with one of the following:

     - `-c`: Number of bytes
     - `-l`: Number of lines
     - `-w`: Number of words
     - `-m`: Number of characters

   - Replace `[file]` with the path to the file you want to analyze.

## Example

```bash
node main.js -w something.txt
```

*Part of [Coding Challenges](https://codingchallenges.fyi/challenges/challenge-wc)*
