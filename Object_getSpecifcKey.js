let a = [
    { name: "nikhil", age: 25, role: "SSE" },
    { name: "prajwal", age: 23, role: "SE" },
    { name: "Vanshaj", age: 23, role: "SE" },
    { name: "Aman", age: 23, role: "SE" },
    { name: "Ayush", age: 23, role: "SE" },
    { name: "Harsh", age: 23, role: "SE" },
];

let filteredArray = a.filter((item) => item.role == "SE");
let filteredArray2 = a.map((item) => ({ 'age': item.age }));
console.log(filteredArray2);