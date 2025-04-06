function compareTriplets(a, b) {
  let result = [];
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice = alice + 1;
    } else if (a[i] < b[i]) {
      bob = bob + 1;
    }
  }
  result.push(alice);
  result.push(bob);
  return result;
}

console.log(compareTriplets([4, 2, 3], [3, 4, 1]));
