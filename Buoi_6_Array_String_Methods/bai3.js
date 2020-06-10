let persons = [{
        name: "Trung",
        class: "Nodemy01",
        dateJoin: "05-02-2020",
        age: 20
        }, {
        name: "Phong",
        class: "Nodemy01",
        dateJoin: "06-01-2020",
        age: 19
        }, {
        name: "Nam",
        class: "Nodemy02",
        dateJoin: "25-01-2020",
        age: 20
        }];
//3.1 sap xep mang theo tuoi tang dan
function compare_age(a, b){
    // a should come before b in the sorted order
    if(a.age < b.age){
        return -1;
    // a should come after b in the sorted order
    }else if(a.age > b.age){
            return 1;
    // and and b are the same
    }else{
        return 0;
    }
}

// sap xep theo ngay tham gia
function compare_dateJoin(a, b){
    // a should come before b in the sorted order
    if(a.dateJoin > b.dateJoin){
        return -1;
    // a should come after b in the sorted order
    }else if(a.dateJoin < b.dateJoin){
            return 1;
    // and and b are the same
    }else{
        return 0;
    }
}

//console.log(persons.sort(compare_dateJoin));
//filter de tim ra cac hoc vien tham gia truoc thang 2

function print_dateJoin_before_feb(a) {
    let temp = a.dateJoin[3] + a.dateJoin[4];
    if(temp < 2) {
        console.log(a);
    }
}
//console.log(persons.filter(print_dateJoin_before_feb));
function upperCaseName(a) {
    
    return {name: a.name.toUpperCase(),
            class: a.class,
            dateJoin: a.dateJoin,
            age: a.age,
    };
}
let newPersons = persons.map(upperCaseName);
console.log(newPersons);

