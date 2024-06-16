let a = [4, 5, 2, 4, 5, 7, 9, 0, 4, 1, 4, 6, 8, 9, 12, 45, 2, 54, 46];
let temp;
for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length -i- 1; j++){
        if (a[j] > a[j+1]) {
            temp = a[j+1];
            a[j+1] = a[j];
            a[j] = temp;
        }
    }
}

console.log(a);