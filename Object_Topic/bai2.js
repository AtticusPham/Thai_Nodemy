let car = {
    hangXe: "BMW",
    gia: 300000,
    xuatXu: "Duc",
    color: "Den", // a) them thuoc tinh mau
};
car.gia = 250000;// b) thay doi gia
// c) In ra man hinh
console.log(car.hangXe + " " + car.color + " xuat xu o " + car.xuatXu + " co gia " + car.gia + "USD");
