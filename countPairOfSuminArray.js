// Input: arr[] = {1, 5, 7, -1}, K = 6
// output 2;

let a = [1,1,1,1];
// let k = 6;
let k =2
let count = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] == k) {
            count++
        }
    }
}

console.log(count);