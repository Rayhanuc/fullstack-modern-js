/*
১.৩০ - হায়ার অর্ডার ফাংশন ও ফাংশন প্রোজেক্ট
*/

// document.write("Example 1"+"</br>"+"<hr>" );

function generate(type) {
    if (type === "plus") {
       return (a,b) => a+b;
    }
    else if (type === "minus") {
        return (a,b) => a-b;
    }
    else if (type === "multiply") {
        return (a,b) => a*b;
    }
    else if (type === "divided") {
        return (a,b) => a/b;
    }
}

var c = generate ('plus');
console.log(c(4,6));

var d = generate ('minus');
console.log(d(8,3));

var e = generate ('multiply');
console.log(e(12,5));

var f = generate ('divided');
console.log(f(50,5));