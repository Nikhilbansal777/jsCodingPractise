let arr = [2, 7, 11, 15];
let target = 13;

let i = 0;
let j = arr.length-1

function f(){

while(i<=j){
    
    let sum = arr[i]+arr[j]
    if( sum == target){
        return [arr[i],arr[j]]
    }
    
    if(sum<target){
    i++
        
    }else{
        
    j--
    }
}
}
console.log(f())