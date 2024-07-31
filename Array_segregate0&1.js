let a = [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
// output [0,0,0,0,0,0,0,1,1,1,1,1,1]
function segregate(a) {
    let start = a[0];
    let end = a.length - 1;
    let temp;
    while (start < end) {
        if (a[start] === 0) {
            start++;
        } else if (a[end] == 1) {
            end--
        } else {
            temp = a[end];
            a[end] = a[start];
            a[start] = temp
        }
    }
    console.log(a)
}

segregate(a);