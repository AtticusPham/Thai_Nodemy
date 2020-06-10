let arr = [1, 5, 7, 8, 9, 15, 10, 5, 8];

//       print even numbers
/*
console.log("So chan");
for(let value of arr) {
    if(value % 2 == 0) {
        console.log(value);
    }
}
*/

//        print odd numbers
/*
console.log("So le:");
for(let value of arr) {
    if(value % 2 == 0) {
        continue;
    }
    console.log(value);
}
*/

 // print >= 5 of arr[]
/*
for(let value of arr) {
    if(value >= 5) {
        console.log(value);
    }  
}
*/
//Cong tong cac so chia het cho 5
/*
let sum = 0;
for(let value of arr) {
    if(value % 5 == 0) {
        sum += value;
    }
}
console.log("tong cac so chia het cho 5: " + sum);
*/
//tim ra tich 3 so dau tien cua mang
/*
let t = 1;
for(let i = 0; i < 3; i++) {
    t *= arr[i];
}
console.log("tich 3 phan tu dau tien: " + t);
*/
//Tong 3 phan tu cuoi cung cua mang
/*
let s = 0;
for(let i = arr.length - 4; i < arr.length; i++) {
    s += arr[i];
}
console.log("tong 3 phan tu cuoi: " + s);
*/
// Tim phan tu bang 5
/*
for(let i in arr) {
    if(arr[i] == 5) {
        console.log("arr[" + i + "]" + " = "+ arr[i]);
    }
}
*/
// Dem so phan tu bang 8
/*
let counter = 0;
for(let value of arr) {
    if(value == 8) {
        counter++;
    }
}
console.log("co " + counter + " phan tu bang 8");
*/