export function whatsMyType<T>(arg: T): T {
  return arg;
}

const ImNumber = whatsMyType(10);
const ImString = whatsMyType<string>("Hola Mundo");
const ImArray = whatsMyType([1, 2, 3, 4, 5]);

console.log(ImNumber.toFixed());
console.log(ImString.toUpperCase());
console.log(ImArray.length);
