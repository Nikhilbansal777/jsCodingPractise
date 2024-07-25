const secondLargestNumber = (data) => {
    first = data[0];
    second = data[0];

    for (let i = 0; i < data.length; i++) {
        if (data[i] > first) {
            second = first;
            first = data[i];
        } else if (data[i] > second) {
            second = data[i];
        }
    }
    console.log(second);
};

secondLargestNumber([2, 90, 10, 28, 24]);