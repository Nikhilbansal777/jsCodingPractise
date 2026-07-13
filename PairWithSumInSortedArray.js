let arr = [1, 2, 4, 6, 8, 10]
let target = 14

let l = 0;
let r = arr.length-1
function f(){
    while(l<r){
        let sum =arr[l]+arr[r]
        if(sum == target){
            return [arr[l], arr[r]]
        } 
        else if (sum<target){
            l++;
        }else {
            r++;
        }
    }
}

console.log(f())

