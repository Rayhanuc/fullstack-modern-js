/*
১.১৪ - শর্ট সার্কিট ইভ্যালুয়েশন
*/

var a = true;

if (a) {
    console.log("Hello world 1");
}

// সর্ট সারকিট evaluation 
var b = 6;
b && console.log("Hello There 2");

var c = 6;

c && console.log("Hello world 3") && console.log("Ok");

var d = false;
//example
if(d) {
    // সর্ট সারকিট  ইবেলুয়েশন
}
d && console.log("And syntax");
// এখানে ফলাফল হিসেবে কিছু দেখাবেনা কারণ এখানে ফলচ দেয়া আছে।

var e = false;
//example
if(e) {
    // Something
}
e || console.log("And syntax");

var f = true;
//example
if(f) {
    // Something
}
f || console.log("And syntax");

var g = false;
g && console.log("Korim") && console.log("Rohim");

var h;
h || (h = 5);
console.log(h);

var i = 10;
i || (i = 5);
console.log(i);