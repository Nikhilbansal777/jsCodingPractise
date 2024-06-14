let arr = [1, 2, 4, 5, 6, 3, 10, 1, 14, 0.00, 1, "4", "15"];
let num = arr[0];
arr.forEach(item => {
    if (item > num) {
        num = item
    }
});
console.log(num);