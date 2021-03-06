/*
১.৪০ - এ্যারের কিছু খুচরা ফাংশন
*/

// throw new Error("Hello world");

/* foreach function format
--------------------------------
array.forEach(element => {
    
});
--------------------------------
*/

var bajar = ["beef","alu","gorom mosola", "kola"];

// for (let i = 0; i < bajar.length; i++) {
//     console.log(bajar[i]);    
// }

var newArray = [];
bajar.forEach(item=>{
    newArray.push(item+" done");
})

console.log(newArray);

// non mutretion function
// another method 
var newArray2 = bajar.map(item=>{
    return item+" done";
})
console.log(newArray2);

// reverse উল্টিয়ে দেয়া
let newArray3 = bajar.reverse();
console.log(newArray3);


var myString = "The quick brown fox jump over the lazy dog.";
//sting function | split অর্থ বিভক্ত করা।
var dividedString = myString.split(" ");
var dividedString2 = myString.split("");

// এর মানে হচ্ছে প্রতিটা স্পেইস পেলে একটা একটা ভাগ করে ফেলা।
console.log(dividedString);
console.log("\n<br>");
// প্রতি লেটারকে ‍স্ট্রিং এ রূপান্তর করার জন্য
console.log(dividedString2);

// এটার নাম হচ্ছে গ্লু ==== ("")
var dividedStringArray = myString.split("");
var reversedStringArray = dividedStringArray.reverse();
// পুরাটাই উলটে যাবে এক এক টা লেটার ।
console.log(reversedStringArray);

// উল্টে গিয়ে যাওয়ার পর এখন জয়েন করা
var result = reversedStringArray.join("");
console.log(result);

var l = [10,1,22,210,101,30];
console.log(l.sort());
var sorted = l.sort((a,b)=>{
    return a-b;
})
// ছোট থেকে বড় ক্রমে সাজানো।
console.log(sorted);

var sorted2 = l.sort((a,b)=>{
    return b-a;
})
// বড় থেকে ছোট ক্রমে সাজানো।
console.log(sorted2);

var sorted3 = l.sort((a,b)=>{
    console.log(`A:${a} B:${b}`);
    console.log(`${b-a}`);
    return a-b;
})
console.log(sorted3);