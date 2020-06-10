let greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
//5.0 dem ki tu
//console.log("string has " + greeting.length + " chars");
//5.1 find index of "nodemy"
/*
if(greeting.indexOf('nodemy') < 0) {
    console.log("index not found!!!");
}else {
    console.log("index of 'nodemy' = " + greeting.indexOf('nodemy'));
}*/
//5.2 find index of "Nodemy"
/*
if(greeting.indexOf('Nodemy') < 0) {
    console.log("index not found!!!");
}else {
    console.log("index of 'Nodemy' = " + greeting.indexOf('Nodemy'));
}
*/
// 5.3
/*
if(greeting.startsWith('Welcome')) {
    console.log("string start with 'welcome'");
}else {
    console.log("sub-string not found");
}
*/
//5.4 dung substring
/*
let newString = greeting.substring(greeting.indexOf('Academy'), (greeting.indexOf('Academy') + 7));
console.log(newString);
*/
//5.5 dung split de tach cac tu
//console.log(greeting.split(' '));
//5.6 trim
//console.log(greeting.trim());
//5.7 include
/*
if(greeting.includes('Nodemy')) {
    console.log("String includes 'Nodemy'");
} else {
    console.log("subString not found!!!");
}
*/
//5.8 replace
//console.log(greeting.replace(/Nodemy/g, 'NODEMY'));//Perform a global replacement
//5.9 toUpperCase
//console.log(greeting.toLocaleUpperCase());
//5.10 charAt
console.log(greeting.charAt(3));