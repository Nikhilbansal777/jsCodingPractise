// let a = [4, 2, -3, 1, 6];
// output true;

// function subArraySum0() {
//     for (let i = 0; i < a.length; i++){
//         let sum = a[i];
//         if (sum === 0) return true
//         for (let j = i + 1; j < a.length; j++){
//             sum += a[j]
//             if (sum == 0) return true
//         }
//     }
//     return false
// }

// console.log(subArraySum0());

let a = [-5,-3, 1,2,4, 6,];
// output true find pair whose sum is 1
let l = 0;
let r = a.length-1;
let result = []
while(l<r){
    let sum = a[l]+a[r]
    if( sum == 1){
        result.push([a[l], a[r]])
        l++
        r--
    }
    if (sum<1) {
        l++
    }else{
        r--
    }
}


console.log(result)
