var arr = [1, 2, 3, 1, 3, 5, 6, 7, 8, 1];

var arr1 = [];


arr.forEach((arr) => {
    if (!arr1.includes(arr)) {
        arr1.push(arr);
    }
});

console.log(arr1);