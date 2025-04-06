let a = [1, 2, 3, 4, 5];
let result = [];
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  for (let j = 0; j < a.length; j++) {
    result.push([item, a[j]]);
  }
}

console.log(result);
