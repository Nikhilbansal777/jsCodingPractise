let str = "aAbBcCdDeeEFe";
let str1=[]
for (let i = 0; i < str.length; i++) {
    console.log(str[i].charCodeAt());
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() < 122) {
        str1.push(str[i].toUpperCase());
    } else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt()<97) {
        str1.push(str[i].toLowerCase());
    }
}

let b = str1.join("")

console.log(b);
