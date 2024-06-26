let a = [7, 76, 3, 8, 7, 83, 54, 8, 9];


function insertionSort() {
    for (let i = 1; i < a.length; i++){
        let numberToInsert = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > numberToInsert) {
            a[j+1] = a[j]
            j=j-1
        }
        a[j+1] = numberToInsert
    }
}
insertionSort();

console.log(a);