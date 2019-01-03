/*
১.২৭ - এ্যারো ফাংশন
*/

// Arrow =>,Lambda function

var x = function (a) {return a +1}
console.log("Example 1");
console.log(x(4));
console.log(x(8));
console.log(x(6));


// Arrow function
var y = b =>  b + 2;
console.log("Example 2");
console.log(x(9));
console.log(x(11));
console.log(x(15));


var m = (c,d) => {
    console.log(c);
    console.log(d);
    return c+d;

}
console.log("Example 3");
console.log(m(5,6));
console.log(m(16,4));
console.log(m(12,17));
console.log(m(11,15));