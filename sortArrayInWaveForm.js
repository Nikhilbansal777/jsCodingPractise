let a =  [ 2, 3, 1, 4, 2 ]


for(let i=0;i<a.length;i+=2){
    if(i>0 && a[i]<a[i-1]){
        [a[i],a[i-1]] = [a[i-1], a[i]]
    }
    if(i<a.length-1 && a[i]<a[i+1]){
        [a[i], a[i+1]]=[a[i+1],a[i]]
    }
}

console.log(a)