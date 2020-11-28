export const calculateFuelForModule = (mass: number) => {
  return Math.floor(mass / 3) - 2;
};

export const day1 = (input: number[]) => {
  const fuel = input.map((e) => calculateFuelForModule(e));
  return fuel.reduce((a, b) => a + b, 0);
};
