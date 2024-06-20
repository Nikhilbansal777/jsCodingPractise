let str = "This_is_a_string";
// output - This is a string;

let string = str.split('_');

for (let i = 0; i < string.length; i++) {
    string[i] = string[i][0] + string[i].slice(1).toLowerCase();
}

let x = string.join(" ");

console.log(x);