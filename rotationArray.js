
// input : [1,2,3,4,5], number of rotation: 3
//  step 1: [5,1,2,3,4]
// step 2: [4,5,1,2,3]
// step 3: [3,4,5,1,2]

let n = 3;
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < 3; i++) {
    let b = a[a.length - 1];
    a.pop();
    a.unshift(b);
}
console.log(a);

// without inbuild unshift method
// let n = 3;
// let a = [1, 2, 3, 4, 5];

// for (let i = 0; i < n; i++) {
//     let b = a[a.length - 1];
//     a.pop();
//     a = [b].concat(a);
// }

// console.log(a);