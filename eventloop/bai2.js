 //B2:
// function capitalName(){
//     this.name = this.name.toUpperCase();
// }

// var person1 = {
// name: 'nam', birthDay: '1996-11-26'
// }
// var person2 = {
// name: 'hiep', birthDay: '1999-01-26'
// }
// capitalName.call(person1);
// console.log(person1.name);
// //đọc hiểu được lợi ích của call ,tương tự viết 1 hàm formatBirthDay theo định dạng DD - MM - YYYY áp dụng cho 2 person

function capitalName(){
    this.name = this.name.toUpperCase();
}

function formatBirthDay() {
        this.birthDay = new Date(this.birthDay);
        
        
        let day = this.birthDay.getDate();
        let month = this.birthDay.getMonth() + 1;
        let year = this.birthDay.getFullYear();
        if(month < 10) {
            month = "0" + month;
        }
        if(day < 10) { 
            day = "0" + day;
        }
        this.birthDay = day + "-" + month + "-" + year;
        
    }

var person1 = {
    name: 'nam',
    birthDay: '1996-11-09',
}

var person2 = {
    name: 'hiep',
    birthDay: '1999-07-26',
}


formatBirthDay.call(person2);
capitalName.call(person1);

console.log(person2.birthDay);
