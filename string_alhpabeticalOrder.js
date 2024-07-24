let a = ['nikhil', 'vanshaj', 'prajwal', 'ayush', 'aman', 'kushal', 'harsh', 'aaryan'];
let temp;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j+1] = temp
        }
    }
}
console.log(a)