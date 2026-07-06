let a = [0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0]
let low = 0;
let mid = 0;
let high = a.length -1

while(mid<=high){
    if(a[mid] == 0){
        let temp = a[low];
        a[low] = a[mid]
        a[mid] = temp
        low++
        mid++
    }else if(a[mid] ==1){
        mid++
    }else{
        let temp = a[mid]
        a[mid]= a[high]
        a[high] = temp
        high--
    }
}

console.log(a)