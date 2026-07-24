let a =  [ 1,2, 3, 5]
let b = [1,2,3]
let result = 0
for(let i=0;i<a.length;i++){
    result ^= a[i]
}
for(let i=0;i<b.length;i++){
    result ^= b[i]
}

console.log(result)