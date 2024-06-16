let arr = ["hi", "there", "welcome", "to", "javascript", "coding", "practice"];

let a = arr.map((str) => {
    let s = str.split("");
    let b = []
    for (let i = s.length - 1; i >= 0; i--){
        b.push(s[i])
    }
    str = b.join("")
    return str
});
console.log(a);