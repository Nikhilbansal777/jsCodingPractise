let s = "abbccacddddeeaa";
// output s = 1a2b3c4d2e1a
let result = "";
let count = 1;

for (let i = 1; i < s.length; i++){
    if (s[i] === s[i - 1]) {
        count++
    } else {
        result += count + s[i - 1];
        count=1
    }
}
result += count+s[s.length-1]
console.log(result);



const obj = {
    name: "Nikhil",
    a: function(){
        console.log(obj.name)
    },
    b: () => { 
        console.log(obj.name)
    }
}
console.log(obj.a())