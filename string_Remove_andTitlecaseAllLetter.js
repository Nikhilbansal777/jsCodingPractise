let str = "This_is_a_string";
// output - This Is A String;

let string = str.split('_');
let str1 = [];
for (let i = 0; i < string.length; i++) {
    let str = string[i].toLowerCase();
    console.log(str.slice(1));
    str1.push(str.charAt(0).toUpperCase() + str.slice(1));
}

let x = str1.join(" ");

console.log(x);