let a = [5, 0, 2, 3, 1]
let k = 5

let count =0;
let sum=0;

let freq = new Map();
freq.set(0,1);

for(let num of a){
    sum += num;

    let reminder = ((sum%k)+k)%k
    if(freq.has(reminder)){
        count += freq.get(reminder)
    }

    freq.set(reminder, (freq.get(reminder)||0 )+ 1)
}

console.log(count)