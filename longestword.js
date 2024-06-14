let string = "Hi there welcome to js world to learn and un learn thing";

let strArr = string.split(" ");
console.log(strArr);

let length = strArr[0].length;
var items = "";
strArr.forEach(item => {
    if (item.length > length) {
        length = item.length
        items = item
    }
});
console.log(length, items);