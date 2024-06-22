let a = [1, 2, 3, 4, 5, 6, 67, 7, 7, 8];

let num = 3;

function presence() {
    let found = false;
    a.forEach((item, index) => {
        if (item === num) {
            a.splice(index, 1);
            found = true;
        }
    });
    if (!found) {
        console.log("not found");
    }
}

presence();
console.log(a);