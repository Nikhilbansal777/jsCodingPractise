let a = [1, 5, 10, 20, 40, 80];
let b = [6, 7, 20, 80, 100];
let c = [3, 4, 15, 20, 30, 70, 80, 120];

let k = [];
let d = [];
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            k.push(a[i]);
        }
    }
}


for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < c.length; j++) {
        if (k[i] == c[j]) {
            d.push(k[i]);
        }
    }
}
console.log(d);