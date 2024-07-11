let a = [1, 3, 4, 5, 6, 7];

function area(r) {
    return Math.PI * r * r;
}


function circumference(r) {
    return 2 * Math.PI * r;
}

function calculateArea(a, area) {
    let output = [];
    for (let i = 0; i < a.length; i++) {
        output.push(area(a[i]));
    }
    console.log(output);
}

calculateArea(a, area);
calculateArea(a, circumference);