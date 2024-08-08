const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi");
    }, 1000);
});

promise.then((res) => {
    console.log(res);
});