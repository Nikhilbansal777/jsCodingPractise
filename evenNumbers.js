function even(array) {
    let a = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0) {
            a.push(array[i])
        }
    }
    console.log(a);
}
even([1,2,3,4,5,6,7,8,9,10])