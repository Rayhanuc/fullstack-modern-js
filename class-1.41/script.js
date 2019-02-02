/*
১.৪১ - আ্যারের আরো কিছু তুলনামুলক গুরুত্বপুর্ন ও কমপ্লেক্স ফাংশন
*/

// two array marge in one array
// two array concat
var array1 = [1,2,3];
var array2 = [4,5,6];

var thirdArray = array1.concat(array2);
console.log(thirdArray);
var myArray = [0,1,2,3,4,5,6];
var newArray = myArray.slice(2,6);
console.log(newArray);

var myArray2 = [2,4,6,8];
var evenNumber = function(num){
    var varSesh = num%2;
    if(varSesh == 0) return true;
    return false;
}
console.log(evenNumber(7));
console.log("Is every number is even?");
console.log("2,4,6,8");
// আমরা এবার চেক করব আমাদের সকল নাম্বার যোগ সংখ্যা কিনা?
console.log(myArray2.every(evenNumber));

// আমরা এবার চেক করব আমাদের এখানে একটা নাম্বার বিযোড় সংখ্যা আছে কিনা?
console.log("Is there have any odd number?");
var myArray3 = [2,4,5,8];
console.log(" 2,4,5,8 ");
var oddNumber = function(num2) {
    var vagSesh2 = num2%2;
    if(vagSesh2 === 0) return true;
    return false;
}
console.log(myArray3.some(oddNumber));

/* every হচ্ছে সবগুলোর জন্য সত্য true
আর some মানে হচ্ছে যে কোন একটা মিল আছে তার জন্য সত্য মানে true return করবে। */

// শুধু মাত্র এই এরের ভিতর যে বিযোড় সংখ্যা আছে তা দিয়ে আমরা একটা এরে তৈরী করব। তা হলে

var myArray4 = [2,4,6,8,5,3,7];
var oddNumber2 = function(num3) {
    var vagSesh3 = num3%2;
    if( vagSesh3 === 0 ) return false;
    return true;
}
var oddArray = myArray4.filter(oddNumber2);
console.log(oddArray);

// আমরা এখন জানব, এরের মাঝখান থেকে কিভাবে একটা এলিমেন্ট ডিলিট করতে হয়।

var myArray5 = [2,4,6,8,5,3,7];
// যদি একটা এরের ভিতরে এসপ্লাইস/splice চালানো হয় তখন অরিজিনাল এরেটাই মডিফাই বা পরিবর্তন হয়ে যায়
myArray5.splice(1,2, "alu","mula", "komola");
/* myArray5.splice(এরের কত নাম্বার থেকে শুরু হবে যেমন:- 0,1,2,3 /,কয়টা ডিলিট কববে 0 ও হতে পারে, "","","" string এর মাধমে যত ইচ্ছা আইটেম যুক্ত করতে পারবে।); 

দুইটাই করা যায় এরে থেকে আইটেম ডিলিট ও করা যায়, আইটেম যুক্ত ও করা যায়।
*/
console.log(myArray5);


/* এখন আমরা কথা বলব রিডিউস/reduce() ফাংশন নিয়ে। তখনই এটি ব্যবহার করা উচিৎ যখন আপনি সবগুলি এলিমেন্ট নিয়ে কিছু একটা করতে চান। 
যেমন:-
সবগুলির যোগফল/গুণফল বের করতে চান। পর্যায় ক্রমে যেমন যোগ হবে তেমন গুণ ও হবে। যেমন:- 2*4*6 এই রকম।
*/

var myArray6 = [2,4,6,8,5,3,7];
/* প্রথ্যেকটা আইটেমের যোগফল বের করার নিয়ম। এখানে a,b দুইটা আরগুমেন্ট। এখানে 0 টা হচ্ছে starting number */
var newVal = myArray6.reduce((a,b)=>{
    console.log(a,b);
    return a+b;
},0);

console.log(newVal);