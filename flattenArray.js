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