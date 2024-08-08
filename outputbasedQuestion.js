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
    // console.log(x); // What is the output?
  }
  inner();
}
outer();

let num = 10;
{
  let num = 20;
  // console.log(num); // What is the output?
}
// console.log(num);

let localVar = 'outside';
{
  // console.log(localVar); // What is the output? = cannot use var before initialisation
  let localVar = 'inside';
}

let o = 10;
function s() {
  // console.log(o); // cannot use var before initialisation
  let o = 1000;
}
// console.log(o);
s();

var oo = 10;
function s() {
  // console.log(oo); // cannot use var before initialisation
  var oo = 1000;
}
// console.log(o);
s();

// console.log(x);  //Cannot access 'x' before initialization
// const x = 10;

var xx = 10;
function test1() {
  var xx = 20;
  if (true) {
    var xx = 30;
  }
  console.log(xx);
}
console.log(xx, 'xx')
test1();

// var x = 10;
// function test() {
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//   }
//   console.log(x);
// }
// console.log(x)
// test();
// console.log(x)

// let x = 10;
// function test() {
//     let x = 20;
//     if (true) {
//         let x = 30;
//     }
//     console.log(x);
// }
// test(); // 20

// var x = 1;
// function outer() {
//     var x = 2;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer(); // 2,2

// let x = 1;
// function outer() {
//     let x = 2;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer(); //2,2

// const x = 1;
// if (true) {
//     const x = 2;
// }
// console.log(x); //1

// var x = 1;
// function outer() {
//     x = 2;
//     function inner() {
//         var x = 3;
//     }
//     inner();
//     console.log(x); // 2, 2
// }
// outer();

// let x = 1;
// function test() {
//     x = 2;
// }
// test();
// console.log(x); //2

// let x = 1;
// function test() {
//     if (true) {
//         let x = 2;
//     }
//     console.log(x); //1
// }
// test();

// let x = 1;
// function test() {
//     x = 2; // cannot use x before initialisation
//     let x = 3;
// }
// test();

function test() {
  var x = 1;
  if (true) {
      var x = 2;
  }
  // console.log(x); //2
}
// test();

// function foo(...args) {
//   console.log(args);
// }
// foo(1, 2, 3);

const arr = [1, 2, 3];
function bar(a, b, c) {
    console.log(a, b, c);
}
bar(...arr);

const numbers = [1, 2, 3];
const moreNumbers = [4, 5, ...numbers];
// console.log(moreNumbers);

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");