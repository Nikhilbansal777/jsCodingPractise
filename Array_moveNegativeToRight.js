let a = [1,2,-4,-2,2,4,6,-5,-9];

let j=0;

for(let i=0;i<a.length;i++) {
    if(a[i]<=0){
        if(i!==j){
        let temp = a[i];
        a[i] = a[j]
        a[j] = temp;
    }
    j++;
}
}

console.log(a);

