let str = "superman Batman dobberman spiderman Batman superman";

let s = str.split(" ");
let obj = {};
for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
        obj[s[i]]=1
    } else {
        obj[s[i]]++
    }
}
let maxCount = 0;
let word = "";
for (let [key] of Object.entries(obj)) {
    if (obj[key] > maxCount) {
        maxCount = obj[key];
        word = key
    }
}
console.log(obj);
console.log(maxCount, word);