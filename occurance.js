let a = [1, 2, 4, 5, 5, 6, 7, 3, 5, 54, 3, 24, 4, 1, 2, 34, 5, 5, 32, 1, 1, 32, 4, 5, 5, 54, 2];
let counts = {}
for (let i = 0; i < a.length; i++) {
    let element = a[i];
    if (counts[element] === undefined) {
        counts[element] = 1;
    } else {
        counts[element]++;
    }
}

console.log(counts);