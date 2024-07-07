let a = "abccdeefgghhijj";
// output = ['cc,dd,gg,hh, jj];

let result = [];
for (let i = 0; i < a.length; i++){
    if (a[i] === a[i-1] ) {
        result.push(a[i]+a[i-1])
    }
}
console.log(result);