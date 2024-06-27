let obj = {
    age: 43,
    age1: 45,
    age2: 41,
    age3: 4,
    age4: 53,
};

let entries = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push({ key: key, value: obj[key] });
    }
}

for (let i = 0; i < entries.length - 1; i++) {
    for (let j = 0; j < entries.length - i - 1; j++) {
        if (entries[j].value > entries[j + 1].value) {
        // Swap
        let temp = entries[j];
        entries[j] = entries[j + 1];
        entries[j + 1] = temp;
    }
}
}
console.log(entries);