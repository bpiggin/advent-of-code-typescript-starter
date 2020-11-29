# Advent of Code Typescript Starter 🎄

Basic template project for lightning fast and bug free Advent of Code puzzle solving!

https://adventofcode.com/2020

Happy Advent!

## Install

1. `git clone git@github.com:bpiggin/advent-of-code-typescript-starter.git`
2. `cd advent-of-code-typescript-starter && yarn install`

## Features

💅 **Prettier:** Auto formatting!

🃏 **Jest:** Instant test feedback!

⚙️ **Auto Generated Boilerplate:** Script to create new folder with test code and functions for each day!

✍️ **Input Parser:** Parse problem inputs easily!

🐛 **Debug Config:** Breakpoint through your code with no compile step!

## Why?

Writing input parsing and project structure boilerplate every day is annoying. Having instant test feedback is really useful.

![](misc/example.gif)

## Instant test feedback

Run `yarn test` which will start jest in watch mode. Run in vscode terminal for instant feedback. By default it will run for files that have changed in git. Commit previous days so their tests don't run anymore.

## New day boilerplate

You will need to run `chmod +x newDay.sh && chmod +x partTwo.sh` so you can run the scripts.
Then run `yarn day {day}` e.g. `yarn day 2` will create a `day2` folder with `day2.ts`, `day2.test.ts` and `day2.data.ts` files with boilerplate code.

`yarn part2 {day}` will generate `day1.part2.ts` and `day1.part2.test.ts` files.

## Debugging

The `Debug Jest Tests` debug config will run your jest tests and let you breakpoint through them.

## Convenience methods

`log()` will log to stdout but without the annoying line numbers from jest. If you want line numbers use `console.log()`.

`parseInput` function will also try to parse the puzzle input for you but beware! I have no idea what formats the inputs will be in this year...

`logAnswer` will print your problem answer from the jest tests with `----` to make it super visible.
