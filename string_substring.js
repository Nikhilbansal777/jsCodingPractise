let s = "hi there welcome to javascript practice questions";
let str = "to";
// check if substring is present in string or not
// output - found 
let arr = s.split(" ");

function substring(arr) {
    let found = false;
    arr.map(item => {
        if (item === str) {
            found = true
        } 
    });
    if (!found) {
        console.log("not found")
    } else {
        console.log("found")
    }
}

substring(arr);
