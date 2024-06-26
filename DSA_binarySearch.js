let a = [1, 2, 4, 5, 6, 8, 9, 10, 43, 3];
let ele = 3
const b = a.sort(function (a, b){
    return a - b;
});

function binarySearch() {
    let start = 0;
    let end = b.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (b[mid] === ele) {
            return true;
        } else if(ele > b[mid]){
            start = mid + 1;
        } else {
            end = mid-1
        }
    
    }
    return false
}

if (binarySearch()) {
    console.log('found');
} else {
    console.log("not found");
}