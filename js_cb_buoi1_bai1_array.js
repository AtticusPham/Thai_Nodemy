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

// in ra các số chẵn của mảng
console.log("So chan");
for(let value of arr) {
    if(value % 2 == 0) {
        console.log(value);
    }
}
