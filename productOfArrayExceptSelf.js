let a = [ 1,2,3,4]
let p =0
let result = []
for(let i=0;i<a.length;i++){
    let product = 1;
    for(let j=0;j<a.length;j++){
        if(i != j) {
        product = product * a[j]
    }
}
    result.push(product)
}

console.log(result)

// 2 pointer 
let left = 0;
let right = a.length-1

let result1 = new Array(a.length).fill(1);
let leftProduct = 1;
let rightProduct = 1;

while(left < a.length){
    result1[left] *= leftProduct;
    leftProduct *= a[left]

    result1[right] *= rightProduct;
    rightProduct *= a[right]
    left++;
    right--
}

console.log(result1)