//6.1 doi dinh dang
let phucBirthday = "26-11-1992";
let cuongBirthday= "27-11-1994";

function dateFormat(s) {
    let temp = s.split('-');
    return temp[2] + '-' + temp[1] + '-' + temp[0];
}
//console.log(dateFormat(phucBirthday));
//6.2 quy doi ca 2 ve object date
phucBirthday = new Date(dateFormat(phucBirthday));
cuongBirthday = new Date(dateFormat(cuongBirthday));
//console.log(phucBirthday);
//6.3so sanh tuoi
/*
if(phucBirthday < cuongBirthday) {
    console.log("Phuc lon tuoi hon");
} else if (phucBirthday > cuongBirthday) {
    console.log("Cuong lon tuoi hon");
} else {
    console.log("Tuoi bang nhau");
}
*/
//6.4 
let d = phucBirthday.getDay(phucBirthday.setDate(phucBirthday.getDate() + 100));

switch (d) {
    case 0:
      console.log('Chủ nhật');
      break;
    case 1:
      console.log('Thứ 2');
      break;
    case 2:
      console.log('Thứ 3');
      break;
    case 3:
      console.log('Thứ 4');
      break;
    case 4:
      console.log('Thứ 5');
      break;
    case 5:
      console.log('Thứ 6');
      break;
    case 6:
      console.log('Thứ 7');
      break;
    default:
      console.log("không xác định.");
}