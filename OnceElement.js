let a = [1, 3, 4, 4, 5, 5, 6];

let count = {};

for (let i = 0; i < a.length; i++) {
    if (count[a[i]] == undefined) {
        count[a[i]] = 1
    } else {
        count [a[i]]++
    }
}

console.log(count);
let keys = Object.keys(count);
let firstKey = keys[0];
console.log(firstKey);