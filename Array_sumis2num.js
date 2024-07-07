let a = [1, 3, 0, 6, 4, 30, -20, 2, 0, 8, 0, 5, 5, 0, 4, 0, 4];
let num = 10;

function sumis2Num() {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] + a[i + 1] == num) {
            arr.push([a[i],a[i+1]]);
        }
    }
    return arr;
}

console.log(sumis2Num());