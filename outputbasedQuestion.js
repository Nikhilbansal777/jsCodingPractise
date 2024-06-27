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

