let reg = /Hanish/g;

console.log(reg.source);

let s = "This is great Hanish Jindal, Hanish";

let result = reg.exec(s);
console.log(result);
result = reg.exec(s);
console.log(result);
