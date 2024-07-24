// Input: arr=[1,2,3,4], r=2

// Output: 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4


let a = [1, 2, 3, 4, 5];
let result = [];
for (let i = 0; i < a.length; i++) {
    let item = a[i];
    let remainArray = a.slice(i+1, a.length);
    if (remainArray.length != 0) {     
        for (let j = 0; j < remainArray.length; j++) {
            result.push([item,remainArray[j]])
        }
    }
}
console.log(result);