let a = [1, 3, 5, 7, 9, 0, 76.0];
let b = [2, 3, 5, 76, 8, 9];

let arr = a.filter((item) => !b.includes(item));
console.log(arr);