let a = [1, [23, 34], [4, [42], 3, 3, [4, 5, 6, 7]], 4, [[4]]];
let result = []
function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i])
        } else {
            result.push(arr[i])
        }
    }
}
flattenArray(a)
console.log(result);