let a = [1, 3, 0, 6, 30, 2, 0, 3, 0, 5, 5, 0, 4, 0, 4];

// let b = a.filter((item) => item != 0);
// let c = a.filter((item) => item == 0);
// let d = b.concat(c);
// console.log(d);

let result = [];
let count = 0;
for (let i = 0; i < a.length; i++)    a[i] === 0 ? count++ : result.push(a[i]);
for (let i = 0; i < count; i++) result.push(0);
console.log(result);