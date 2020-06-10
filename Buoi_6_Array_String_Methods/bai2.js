let arr = [1,1,5,2,7,6,9,2,6];
//sort tang dan
arr.sort(function(a, b){return a-b});
console.log(arr);
//sort giam dan
arr.sort(function(a, b){return b-a});
console.log(arr);