let a = [12,-4,53,-3,2,33,2,5];

// c = 100
// m = 100
// let maxSum = 0;
// let currentSum = 0;
// for(let i=0;i<a.length;i++) {
//     currentSum = currentSum + a[i];
//     if(currentSum>maxSum){
//         maxSum = currentSum;
//     }
//     if(currentSum <0){
//         currentSum = a[i]
//     }
// }


// console.log(maxSum)

// solution 1  - Brute Force Approach

let maxSum = a[0]
for(let i =0;i< a.length; i++){
    let currentSum = 0;
    for(let j=i;j<a.length; j++){
        currentSum = currentSum + a[j];

        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
}

console.log(maxSum)