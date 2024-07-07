let a = "qwertyudsafhvndjknvkasdnjvbadhsfhjkr bvjkasndvcjkn";

// output = [c,e,g,h,j]

let result = [];
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            if (!result.includes(a[i])) {
                result.push(a[i]);
            }
        }
    }
}
console.log(result);