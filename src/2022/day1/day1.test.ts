import { logAnswer } from '../../utils/logging';
import {calculateCaloriesForElf, calculateTopCalsElf, day1, day1Part1, day1Part2, findTop3Elves} from "./day1";
import { data } from './day1.data';

test('Provided test cases', () => {
    expect(calculateTopCalsElf(calculateCaloriesForElf(`1000
2000
3000
`))).toBe(6000);
    expect(calculateTopCalsElf(calculateCaloriesForElf(`4000
`))).toBe(4000);
    expect(calculateTopCalsElf(calculateCaloriesForElf(`5000
6000
`))).toBe(11000);
    expect(calculateTopCalsElf(calculateCaloriesForElf(`7000
8000
9000
`))).toBe(24000);
    expect(calculateTopCalsElf(calculateCaloriesForElf(`10000
`))).toBe(10000);
});

test('All test cases', () => {
   expect(calculateTopCalsElf(calculateCaloriesForElf(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`))).toBe(24000);

});

test('Returns an answer part 1', () => {
    logAnswer(day1Part1());
    expect(typeof day1()).toBe('number');
    expect(day1()).toBeGreaterThan(0);
});


test('Top 3 Elves test cases should pass', () => {
    let actual = findTop3Elves(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`);
    expect(actual.length).toBe(3);
    expect(actual).toContain(10000);
    expect(actual).toContain(11000);
    expect(actual).toContain(24000);
    expect(10000 + 11000 + 24000).toEqual(45000);
});

test('Returns and answer part 2', () => {
    logAnswer(day1Part2());
    expect(typeof day1Part2()).toBe('number');
    expect(day1Part2()).toBeGreaterThan(0);
});
