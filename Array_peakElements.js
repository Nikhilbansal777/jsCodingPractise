let a = [20, 25, 24, 51, 52, 45, 70, 5];

function peakElement() {
    let b = []
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[i-1] && a[i] > a[i + 1]) {
           b.push(a[i])
        } 
        
    }
    if (b.length == 0) {
        return "no peak element"
    }
    return b
}

console.log(peakElement());