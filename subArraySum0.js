let a = [4, 2, -3, 1, 6];
// output true;

function subArraySum0() {
    for (let i = 0; i < a.length; i++){
        let sum = a[i];
        if (sum === 0) return true
        for (let j = i + 1; j < a.length; j++){
            sum += a[j]
            if (sum == 0) return true
        }
    }
    return false
}

console.log(subArraySum0());