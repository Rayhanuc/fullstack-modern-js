/*
১.৪৩ - জাভাস্ক্রিপ্টের দিনরাত্রি (ডেট টাইম ও টাইমার)
*/
console.log("Date function");
var d = new Date('2018-10-17 10:55 AM');
console.log(d);
console.log(d.toDateString());
console.log(d.toTimeString());

console.log("Date string function");
var d2 = new Date();
console.log(d2.toDateString());

console.log("Time function");
var d3 = new Date();
console.log(d3.toTimeString());

console.log("এর মানে হচ্ছে January 01, 1970 12:00 am থেকে এখন পর্যন্ত যত সেকেন্ড পার হয়েছে। এবং এটা মিলি সেকেন্ডে। ");
console.log(Date.now());

console.log("এখানে টাইম স্ট্যাম্পের একদম শুরুর সময়টা দেখাবে।");
var date = new Date(0)
console.log(date.toDateString());

var da = new Date();
var v = da.getHours();
console.log(v);

var v2 = da.getMinutes();
console.log(v2);
var v3 = da.getSeconds();
console.log(v3);
var v4 = da.getYear();
console.log(v4);

var v5 = da.getFullYear();
console.log(v5);

console.log("JavaScript month গননা করার সময় প্রথম মাসটাকে 0 হিসেবে গননা করার কারণে এক কম আসে।");
var v6 = da.getMonth();
console.log(v6);

var da2 = new Date();
da2.setDate(3);
console.log(da2.toDateString());
console.log(da2.toTimeString());

var da3 = new Date('Tue, 12 Feb 2019 04:55:57 GMT');
da3.setHours(10);
console.log(da3.toUTCString());

var t = setTimeout(()=>{console.log("hello world")},5000);
clearTimeout(t);

var ti = setInterval(()=>{console.log("hello world2")},5000);
clearInterval(ti);

