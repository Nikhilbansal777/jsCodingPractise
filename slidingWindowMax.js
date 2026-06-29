let a = [1,3,-1, -3, 5, 3, 6, 7]

// output = [3,3,5,5,6,7]
k = 3
let r = []

// brute force approach

for(let i=0;i<=a.length-k;i++){
    let max = a[i];
    for(let j=i;j<i+k;j++){
        if(a[j]>max){
            max = a[j]
        }
    }
    r.push(max);
}

console.log(r)