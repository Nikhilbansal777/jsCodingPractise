let a = [1, 3, 5, 7, 9, 6];
let b = [1, 2, 3, 4, 5, 6];
let c = [2, 3, 5, 6, 7, 9, 1, 4];

let d = [];
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            d.push(a[i]);
        }
    }
}
console.log(d);
