#!/bin/bash
mkdir src/day$1

if [ $? -ne 0 ] ; then
  echo "Day already exists!"
  exit
fi

echo "export const day$1 = () => {
  return $1;
};" >> src/day$1/day$1.ts

echo "import { day$1 } from './day$1';
import { logAnswer } from '../utils/logging';

test('Provided test cases', () => {
  expect(day$1()).toBe($1);
});

test('Returns an answer', () => {
  logAnswer(day$1());
  expect(typeof day$1()).toBe('number');
  expect(day$1()).toBeGreaterThan(0);
});" >> src/day$1/day$1.test.ts

echo "import { parseInput } from '../utils/input';

const input = '';

export const data = parseInput(input);" >> src/day$1/day$1.data.ts
exit
