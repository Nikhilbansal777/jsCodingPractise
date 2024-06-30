let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
// console.log(counter);
// console.log(i); // i is accesible as its a functional scope with var__

const obj = {
  showThis: () => {
      console.log(this);
  }
};
obj.showThis(); // window object

console.log(3 ** 2); console.log(5 + "5" - 3);
console.log(7 * undefined);
console.log(3 + null); console.log("s" + null); console.log(12 / null); console.log(5 * null);
console.log([1, 2] - [3, 4]);