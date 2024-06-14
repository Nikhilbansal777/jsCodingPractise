// input : [0,1,0,3,12]
// output: [1,3,12,0,0]

var arr = [0, 1, 0, 3, 12];
let arr1 = [];

var count = 0
arr.forEach((item) => {
    if (item !== 0) {
        arr1.push(item)
    }
    if (item == 0) {
        count++;
    }
});


for (let i = 0; i < count; i++){
    arr1.push(0)
}
console.log(arr1);
