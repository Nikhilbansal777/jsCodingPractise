let a = [7, 76, 3, 8, 7, 83, 54, 8, 9];
let num = 13;

function linearSearch() {

    for (let i = 0; i < a.length; i++) {
        if (a[i] === num) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(linearSearch());