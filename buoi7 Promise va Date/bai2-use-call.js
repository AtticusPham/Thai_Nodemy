function capitalName(){
    this.name = this.name.toUpperCase();
}




var person1 = {
name: 'nam', birthDay: '1996-11-26'
}
var person2 = {
name: 'hiep', birthDay: '1999-01-26'
}
// var test = "1996-1-26";
// test = test.replace(/-/g, ",");

// dob = new Date(test);
// month = dob.getMonth();
// console.log(month + 1);

// format day of Birth
function formatDayOfBirth(){
    this.birthDay = this.birthDay.replace(/-/g, ",");
    this.birthDay = new Date(this.birthDay);
    this.birthDay = (this.birthDay.getDate() + "-" + (this.birthDay.getMonth() + 1) + "-" + this.birthDay.getFullYear());
}

formatDayOfBirth.call(person1);
capitalName.call(person1);
console.log(person1);