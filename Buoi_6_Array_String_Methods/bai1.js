let arr = [1,5,7,8,9,15];
// 1.1 print even
/* 
function printEven(n) {
    if(n % 2 == 0){
        console.log(n);
    }
}
*/
// 1.2 print odd
/*
function printOdd(n) {
    if(n % 2 != 0){
        console.log(n);
    }
}
*/
// 1.3 print >= 5
/*
function printGreaterThan5(n) {
    if(n >= 5){
        console.log(n);
    }
}
*/
// 1.4 print chia het cho 5
/*
function printChiaHetCho5(n) {
    if(n % 5 == 0){
        console.log(n);
    }
}
*/
//arr.map(printChiaHetCho5);

// 1.5 tim cac so lon hon 5 va tang 1 don vi
/*
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 5){
        arr[i]++;
    }
}
console.log(arr);
*/
// 1.6 dung slice de copy mang tu phan tu so 3 den cuoi
/*
let newArray = arr.slice(2, arr.length);
console.log(newArray);
*/
// 1.7 splice
/*
let newArray = arr;
newArray.splice(0, 1);
console.log(newArray);
*/
// 1.8 push
/*
arr.push(10);
console.log(arr);
*/
//*
for(let i = 0; i < arr.length; i++){
    arr[i]*=2;
}
console.log(arr);
