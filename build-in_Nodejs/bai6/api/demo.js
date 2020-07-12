var {test} = require("../sum");
console.log(test);
// in test bang 2 cach
// * cach 1
console.log(test.filter( (element) => {return element > 5;}));
// * cach 2
for (let element of test) {
    if (element > 5) {
        console.log(element);
    }
}
// push 7 vao test
test.push(7);
console.log(test);
// in phan tu test chia het cho 2
console.log(test.filter((element) => {return element % 2 === 0}));