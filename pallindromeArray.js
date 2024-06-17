let a = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let b = [3, 2, 1];

function pallindrome(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
        return true;
    }
}

console.log(pallindrome(a));
console.log(pallindrome(b));
