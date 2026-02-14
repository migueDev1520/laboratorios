// 2. Concat
// Concatenación entre dos Arrays
const concact = (a: number[], b: number[]) => {
  return [...a, ...b];
};

const araryA = [1, 2, 3, 4, 43, 3];
const araryB = [1, 223, 334, 4, 43, 3];

console.log(concact(araryA, araryB));

// Concatenación de multiples Arrays
const concactMultiple = (...multiplesArrays: number[][]): number[] => {
  return multiplesArrays.flat();
};

const araryA1 = [1, 2, 3, 4, 43, 3];
const araryB2 = [1, 223, 334, 4, 43, 3];
const araryC3 = [2, 23, 34, 45, 48, 39];

console.log(concactMultiple(araryA1, araryB2, araryC3));
