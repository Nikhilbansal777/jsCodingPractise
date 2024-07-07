let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
// console.log(counter);
// console.log(i); // i is accesible as its a functional scope with var__

const obj = {
  showThis: () => {
    // console.log(this);
  }
};
obj.showThis(); // window object

// console.log(3 ** 2); console.log(5 + "5" - 3);
// console.log(7 * undefined);
// console.log(3 + null); console.log("s" + null); console.log(12 / null); console.log(5 * null);
// console.log([1, 2] - [3, 4]);

// console.log('9' % 2);
// console.log('5' + 5 - 5);
// console.log('10' - '2');
// console.log('10' - 'a');
// console.log('10' / 0);
function hoistingTest() {
  // console.log(a); // What is the output?
  var a = 5;
}
hoistingTest();
function outer() {
  let x = 5;
  function inner() {
    console.log(x); // What is the output?
  }
  inner();
}
outer();

let num = 10;
{
  let num = 20;
  console.log(num); // What is the output?
}
console.log(num); 

// let localVar = 'outside';
// {
//   console.log(localVar); // What is the output?
//   let localVar = 'inside';
// }