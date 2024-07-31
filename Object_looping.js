let a = {
    age: 32,
    age1: 24,
    age2: 3,
    age3: 13,
    age4: 31,
    age5: 23
};


for (let i in a) {
    // console.log(i); // it will return keys;
    // console.log(a[i]);
}

for (let key of Object.keys(a)) {
    // console.log(a[key]);
}

for (let value of Object.values(a)) {
    // console.log(value);
}

for (let [key, value] of Object.entries(a)) {
    // console.log(key,value);
}



let k = Object.keys(a)[0];
console.log(a[k]);

let arr = [];

for (let i in a) {
    if (a.hasOwnProperty(i)) {
        arr.push({key:i, value: a[i]})
    }
}


console.log(arr);
let temp;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - i - 1; j++){
        if (a[j].value > a[j + 1].value) {
            temp = a[j + 1]
            a[j + 1] = a[j];
            a[j] = temp
        }
    }
}

console.log(arr);