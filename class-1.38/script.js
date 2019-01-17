/*
১.৩৮ - ফর...ইন লুপ
*/

var manush = {
    name:"Rayhan",
    age:100,
    gender:"M",
    city:"Dhaka",
    hometown:"Chittagong"
}
console.log("Property name গুলা হচ্ছে।");
// for in loop
for(let item in manush) {
    console.log(item);
}

console.log(" ");
console.log("Value গুলা হচ্ছে।");
for(let item in manush) {
    console.log(manush[item]);
}
console.log(" ");
console.log("Result");
for(let item in manush) {
    console.log(`my ${item} is ${manush[item]}`);
}