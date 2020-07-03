var {test} = require("./api/demo");
console.log(test.length);
console.log(test.map((element) => {  return element * 2 }));