import { input} from "./day1.data";


export function calculateCaloriesForElf(cals: string): number[] {

    return splitElves(cals)
        .map(elf => splitSnacks(elf))
        .map((snacks) => {
           return sumSnacks(snacks);
        });
}

export function calculateTopCalsElf(elfs: number[]): number {
   return  elfs.reduce((previousElf, currentElf) => {
        if (previousElf > currentElf) {
            return previousElf;
        }
        return currentElf;
    }, 0);
}

function sumSnacks(snacks: number[]) {
    return snacks.reduce((previous, current) => {
        return previous + current;
    }, 0);
}

function splitElves(rawInput: string): string[] {
    return rawInput.split('\n\n');
}

function splitSnacks(snacks: string): number[] {
    return snacks.split('\n')
        .map((snack) => Number(snack));
}


export function day1Part1() {
    return calculateTopCalsElf(calculateCaloriesForElf(input))

}

export function findTop3Elves(rawInput: string) {
    let numbers = calculateCaloriesForElf(rawInput);
    return numbers
        .sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a  > b) {
                return 1;
            }
            return 0;
        }).reverse().slice(0,3);
}

export function day1Part2() {
    return sumSnacks(findTop3Elves(input));
}
