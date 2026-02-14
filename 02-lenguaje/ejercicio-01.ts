// 1. Array Operations
// Head
const head = ([firstElement]: number[]) => {
  return firstElement;
};

const nums: number[] = [12, 23, 34, 54];
console.log(head(nums));
console.log(nums);

//Tail
const tail = ([, ...rest]) => {
  return rest;
};

const tails = [1, 2, 3, 4, 5];
console.log(tail(tails));
console.log(tails);

//Init
const init = (elements: string[]) => {
  return elements.slice(0, -1);
};

const fruits = ["Manzana", "Pera", "Platano", "Fresa"];
console.log(init(fruits));
console.log(fruits);
