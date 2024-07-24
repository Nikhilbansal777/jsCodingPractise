let s = "nikhil";

let result = []
for (let i = 0; i < s.length; i++) {
    let item = s[i]
    for (let j = i + 1; j < s.length; j++) {
        result.push([item,s[j]]);
    }
}

console.log(result);