let a = [15, -2, 2, -8, 1, 7, 10, 23];
let subArray = new Map();
let maxLen =0;
let sum=0

for(let i=0;i<a.length;i++){
    sum +=a[i]

    if(sum ==0){
        maxLen = i+1
    }

    if(subArray.has(sum)){
        maxLen = Math.max(maxLen, i-subArray.get(sum));
    }else{
        subArray.set(sum, i);
    }
}

console.log(maxLen, subArray)