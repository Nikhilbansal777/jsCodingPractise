const str = 'Nikhil';

let str1 = str.split("");
let a = [];
for (let i = str1.length-1; i >= 0; i--) {
    a.push(str1[i]);
}
let b =a.join("")
console.log(b);