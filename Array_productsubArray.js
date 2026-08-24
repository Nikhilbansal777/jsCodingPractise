// let a = [4, 1, 1, 1, 6];
// let num = 4;

// function productSubArray() {
//     for (let i = 0; i < a.length; i++){
//         let product = a[i];
//         for (let j = i + 1; j < a.length; j++){
//             product *= a[j];
//             console.log(product)
//             if (product == num) {
//                 return true;
//             } 
//         }
//     }
//     return false
// }

// console.log(productSubArray())


// 2 pointer

// let a = [4, 5, 2, 3, 4];
// let num = 8;
// let b = a.sort((x,y)=> x-y);
// let result = []
// console.log(b)
// let l =0;
// let r = a.length-1

// while(l<r){
//     let product = b[l]*b[r]
//     if(product == num){
//         result.push([b[l],b[r]])
//         l++
//         r--
//     }else if(product<num){
//         l++
//     }else{
//         r--
//     }
// }

// console.log(result)