// input = "10+3"
//output 13

// input = "10*3"
//output 30

const calculate = (value) => {

    let operators = ['*', "-", "+", "/"];
    let operator = "";
    for (let i = 0; i < operators.length; i++) {
        if (value.includes(operators[i])) {
            operator += operators[i];
        }
    }
    let splittedVal = value.split(operator);

    if (operator === "+") {
        return plus(splittedVal);
    }
    if (operator === "*") {
        return minus(splittedVal);
    }
    if (operator === "-") {
        return minus(splittedVal);
    }
    if (operator === "/") {
        return divide(splittedVal);
    }

};

const plus = (arr) => {
    return arr[0] + arr[1];
};
const minus = (arr) => {
    return arr[0] - arr[1];
};
const multi = (arr) => {
    return arr[0] * arr[1];
};
const divide = (arr) => {
    return arr[0] / arr[1];
};

console.log(calculate("10+3"));