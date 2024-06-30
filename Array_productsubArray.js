let a = [4, 1, 1, 1, 6];
let num = 4;

function productSubArray() {
    for (let i = 0; i < a.length; i++){
        let product = a[i];
        for (let j = i + 1; j < a.length; j++){
            product *= a[j];
            console.log(product)
            if (product == num) {
                return true;
            } 
        }
    }
    return false
}

console.log(productSubArray())