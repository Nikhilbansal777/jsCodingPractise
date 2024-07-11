let str = "Impetus Technologies!";

let splittedStringArray = str.split(" ");
let resultArray = [];

for (let i = 0; i < splittedStringArray.length; i++) {
    let s = splittedStringArray[i];
    for (let j = s.length - 1; j >= 0; j--) {
        resultArray.push(s[j]);
    }
    splittedStringArray[i] = resultArray.join("");
    resultArray=[]
}

console.log(splittedStringArray);