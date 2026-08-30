let intervals = [
    [1, 3],
    [2, 4],
    [3, 5],
    [6, 8]
];

let count = 1;
let lastEnd = intervals[0][1];

for(let i=0;i<intervals.length;i++){
    let start = intervals[i][0];
    let end = intervals[i][1]

    if(start>=lastEnd){
        count++;
        lastEnd = end;
    }
}

console.log(count)