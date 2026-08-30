let intervals = [
    [0, 5],
    [3, 4],
    [1, 2],
    [5, 9],
    [5,7],
    [7,9]
];

intervals.sort((a, b) => a[1] - b[1]);

let count = 1;
let lastEnd = intervals[0][1];

for(let i=0;i<intervals.length;i++){
    let start = intervals[i][0];
    let end = intervals[i][1];

    if(start>=lastEnd){
        count++;
        lastEnd = end
    }
}


let min = intervals.length - count
console.log(min)