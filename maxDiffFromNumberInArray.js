let a = [1, 2, 3, 4, 5, 6];
let num = 43;

function diff(a) {
    let maxDiff = 0;
    let result;
    for (let i = 0; i < a.length; i++) {
        if (num - a[0] > maxDiff) {
            maxDiff = num - a[0];
            result= a[i]
        }
    }
    return result;
}

console.log(diff(a));