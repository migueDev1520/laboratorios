//3. Clone Merge
// Clone
interface Source {
  name: string;
  lastname: string;
  age: number;
}

const source: Source = {
  name: "Luis",
  lastname: "Martins",
  age: 37,
};

const clone = (source: Source) => {
  return { ...source };
};

console.log(clone(source));
console.log(source);

//Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (
  source: { name: string; surname: string; country: string },
  target: { name: string; age: number; married: boolean },
) => {
  return { ...target, ...source };
};

console.log(merge(a, b));
