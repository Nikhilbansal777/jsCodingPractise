function ana(str1, str2) {
    return sorting(str1.split("")).join("") === sorting(str2.split("")).join("");
}

function sorting(ss) {
    let temp;
    for (let i = 0; i < ss.length; i++) {
        for (let j = 0; j < ss.length - i - 1; j++) {
            if (ss[j] > ss[j + 1]) {
                temp = ss[j + 1];
                ss[j + 1] = ss[j];
                ss[j] = temp;
            }
        }
    }
    return ss;
}

console.log(ana("listen", "silent"));