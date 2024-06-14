let a = [1, 3, 5];
let b = [2, 4, 6];

let c = [];

// output = [1,2,3,4,5,6]

for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
}

for (let i = 0; i < b.length; i++) {
    c.push(b[i]);
}

let temp;
for (let i = 0; i < c.length; i++) {
    for (let j = i + 1; j < c.length; j++) {
        if (c[i] > c[j]) {
            temp = c[j];
            c[j] = c[i];
            c[i] = temp
        }
    }
}

console.log(c);