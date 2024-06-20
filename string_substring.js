let s = "hi there welcome to javascript practice questions";
let str = "tbo";
let arr = s.split(" ");

function substring(arr) {
    arr.map(item => {
        if (item.includes(str)) {
            console.log('yes');
        } else {
            console.log("no");
        }
    });
}

substring(arr);
