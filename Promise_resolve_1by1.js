// input Hello1 0 Hello2 10000 Hello1 4000
// output Hello1 Hello2 Hello3

//solution1
const a = async (msg, time) => {
    const promise = new Promise((res, rej) => setTimeout(() => res(msg), time));
    const result = await promise;
    console.log(result);
};

const executeSequentially = async () => {
    await a("Hello1", 0);
    await a("Hello2", 10000);
    await a("Hello3", 4000);
};

executeSequentially();

//solution2
const promises = [
    new Promise((res, rej)=> setTimeout(()=> res("Hello1"), 0)),
    new Promise((res, rej)=> setTimeout(()=> res("Hello2"), 10000)),
    new Promise((res, rej)=> setTimeout(()=> res("Hello3"), 4000)),
    ];
    
const b =async () =>{
    for(promise of promises){
        const result  =await promise;
        console.log(result)
    }
}

b();
