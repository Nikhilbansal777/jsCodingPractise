var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

for (let key in student) {
    if (key == 'rollno') delete student[key];
}
console.log(student);