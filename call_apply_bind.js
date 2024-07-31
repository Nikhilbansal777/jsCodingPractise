// call

let a = {
    fname: "Nikhil",
    lname: "Bansal"
};

function b(...skills) {
    return this.fname + " " +this.lname + " Knows " + skills;
}; 



console.log(b.call(a, 'gdsa'));
console.log(b.apply(a, [' js ', ' ts ', ' angular ', ' react'])); // only array in second param