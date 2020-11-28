export const logAnswer = (answer: any) => {
  process.stdout.write(`\n\n-----------------
Answer: ${answer}
-----------------\n\n`);
};

export const log = (...args: any[]) => {
  process.stdout.write(`${args.join(', ')}\n\n`);
};
