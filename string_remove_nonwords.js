let s = "Th%#@#$%@#$is is ni@%kh%#$il%#$#$%";

let a = []
for (let i = 0; i < s.length; i++){
    // console.log(s[i]);
    
    if ((s[i].charCodeAt() >= 65 && s[i].charCodeAt() < 90) || (s[i].charCodeAt() >= 97 && s[i].charCodeAt() < 122)|| s[i] === " ") {
        a.push(s[i])
    }
}

let b = a.join("")
console.log(b);