/*
  Bài 1: cho array = [1,5,7,8,9,15,8]

  * in ra các số chẵn của mảng
  * in ra các số lẻ của mảng
  * in ra các số lớn hơn hoặc bằng 5 của mảng
  * Cộng tổng các số chia hết cho 5 của mảng
  * Tìm ra tích 3 số đầu của mảng array
  * Tính tổng 3 phần tử cuối của mảng
  * Tìm xem trong array có phần tử nào là số 5 không?
  * Đếm số phần tử = 8 trong mảng;

*/

const arr = [1,5,7,8,9,15,8];

// 1. in ra các số chẵn của mảng
console.log("So chan");
for(let value of arr) {
    if(value % 2 == 0) {
        console.log(value);
    }
}
// 2. in ra các số lẻ của mảng
console.log("So le:");
for(let value of arr) {
    if(value % 2 == 0) {
        continue;
    }
    console.log(value);
}
// 3. in ra các số lớn hơn hoặc bằng 5 của mảng
for(let value of arr) {
    if(value >= 5) {
        console.log(value);
    }  
}
// 4. Cộng tổng các số chia hết cho 5 của mảng
let sum = 0;
for(let value of arr) {
    if(value % 5 == 0) {
        sum += value;
    }
}
console.log("tong cac so chia het cho 5: " + sum);
// 5. Tìm ra tích 3 số đầu của mảng array
let t = 1;
for(let i = 0; i < 3; i++) {
    t *= arr[i];
}
console.log("tich 3 phan tu dau tien: " + t);
// 6. Tính tổng 3 phần tử cuối của mảng
let s = 0;
for(let i = arr.length - 4; i < arr.length; i++) {
    s += arr[i];
}
console.log("tong 3 phan tu cuoi: " + s);
// 7. Tìm xem trong array có phần tử nào là số 5 không?
for(let i in arr) {
    if(arr[i] == 5) {
        console.log("arr[" + i + "]" + " = "+ arr[i]);
    }
}
// 8. Đếm số phần tử = 8 trong mảng;
let counter = 0;
for(let value of arr) {
    if(value == 8) {
        counter++;
    }
}
console.log("co " + counter + " phan tu bang 8");
