let x = 1;

let y = 2;

let res1 = String(x) + String(y);

console.log(res1); // "12"

console.log(typeof res1); // "string"

let res2 = Boolean(y) + String(y);

console.log(res2); // "true2"

console.log(typeof res2); // "string"

let res3 = Boolean(x);
console.log(res3);

console.log(typeof res3); // " boolean "

let res4 = parseFloat(Boolean(x));
console.log(res4);

console.log(typeof res4); // "number"
