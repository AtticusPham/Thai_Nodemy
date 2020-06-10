//7.1 random 1-10
/*
let n1 = Math.ceil(Math.random() * 10);
console.log(n1);
*/
//random 1-100
/*
let n2 = Math.ceil(Math.random() * 100);
console.log(n2);
*/
//random 50-100
/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(50, 100));
*/
//7.2 lam tron so 7.434345
/*
let n = 7.434345;
console.log(Math.round(n));
console.log(Math.ceil(n));
console.log(Math.floor(n));
*/
// 7.3 lay 2 so thap phan
/*
let n = 7.434345;
console.log(n.toFixed(2));
*/
//7.4 
/*
let n1 = "8", n2 = "5";
let s = parseInt(n1) + parseInt(n2);
console.log(s);
*/
//7.5 
let n = Math.pow(2, 10);
console.log(n);