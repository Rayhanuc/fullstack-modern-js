/*
১.৪২ - জাভাস্ক্রিপ্টের দুনিয়ার সায়েন্টিফিক ক্যালকুলেটর (Math অবজেক্ট)
*/

console.log( Math.PI );

/* এখানে প্রথম সংখ্যাটা হচ্ছে সংখ্যা এবং দ্বিতীয় সংখ্যা টা হচ্ছে এর পাওয়ার (যেমন: 4 টুদি পাওয়ার টু এইরকম)
Math.pow(4,2); */

console.log("বৃত্তের ব্যাস বের করা।");
function circleArea(r) {
    return Math.PI*Math.pow(r,2);
}
console.log(circleArea(4));

console.log("বৃত্তের পরিধি বের হবে।");
function circle(r) {
    return 2*Math.PI*r;
}

console.log(circle(4));

console.log("সবচাইতে বড় সংখ্যা কোনটি?");
let maxNum = Math.max(3,5,6,7,2,3);
console.log(maxNum);

console.log("সবচাইতে ছোট সংখ্যা কোনটি?");
let minNum = Math.min(3,5,6,7,2,3);
console.log(minNum);

console.log("এরের ভিতর থেকে বড় সংখ্যাটা বের করা।");
let myArray = [5,3,2,7,9,8,1];
console.log(Math.max.apply(null, myArray));

console.log("সংখ্যাটা নিচে গিয়ে ঠেকার জন্য। floor function");
let myNum = 8.44;
console.log(Math.floor(myNum));

console.log("সংখ্যাটা উপরে গিয়ে ঠেকার জন্য। ceil function");
let myNum2 = 8.44;
console.log(Math.ceil(myNum2));

console.log("সংখ্যাটা যদি .50 এর উপরে থাকে তহলে সিলিং/ceil কববে আর যদি .50 এর নিচে থাকে তাহলে ফ্লোর/floor করবে।");
let myNum3 = 12.51;
console.log(Math.round(myNum3));

console.log("এবসুলোট");
let myNum4 = -6.4;
console.log(Math.abs(myNum4));

console.log("Sin");
let myNum5 = -6.4;
console.log(Math.sin(myNum5));

/* unexpected error in this function
let myNum5 = -8.3;
console.log(Math.abs‍(myNum5)); */


console.log("Cos");
let myNum6 = -6.4;
console.log(Math.cos(myNum6));

console.log("Tan");
let myNum7 = -6.4;
console.log(Math.tan(myNum7));


console.log("Random function");
// Math.random() এর মানে হচ্ছে 0 থেকে 1 এর ভিতর কোন একটা সংখ্যা নেবে।
console.log(Math.random());
// এর মানে হচ্ছে 0.54545645 এই রকম একটা সংখ্যার সাথে * 10 
var myRandom = Math.random()*10;

console.log(myRandom);

/* এটাকে একটা রাউন্ড নাম্বার করতে হলে।
যদি 5 থেকে 15 এর মধ্যে যে কোন রেন্ডম নাম্বার আনতে চাই তাহলে আমাদেরকে
Math.random() এর আগে 5 যোগ করতে হবে। */
var myRandom2 = 5+Math.random()*15;
console.log(Math.round(myRandom2));
