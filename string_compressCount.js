let a = 'aaabbccc';
// output  = a3b2c3 

let count = 1;
let r = '';
for(let i=1;i<=a.length; i++){
    if(a[i] == a[i-1]){
        count++
    }else{
        r = r+ a[i-1]+count;
        count = 1
    }

}
console.log(r)