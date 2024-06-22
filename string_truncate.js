let s = "The quick brown fox jumps over the lazy dog";

let a = s.split(" ");
let b = []

for (let i = 0; i < a.length; i++){
    if (i < 4) {
        b.push(a[i])
    }
}
let c = b.join(" ")
console.log(c);