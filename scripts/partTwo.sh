#!/bin/bash
echo "export const day$1part2 = () => {
  return $1;
};" >> src/day$1/day$1.part2.ts

echo "import { day$1part2 } from './day$1.part2';
import { logAnswer } from '../utils/logging';

test('Provided test cases', () => {
  expect(day$1part2()).toBe($1);
});

test('Returns an answer', () => {
  logAnswer(day$1part2());
  expect(typeof day$1part2()).toBe('number');
  expect(day$1part2()).toBeGreaterThan(0);
});" >> src/day$1/day$1.part2.test.ts
