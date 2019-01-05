/*
১.২৯ - ফাংশনের আবার প্রোপার্টি আছে
*/

// document.write("Example 1"+"</br>"+"<hr>" );
console.log("Example 1");
function a(b,c){
    console.log("This is function call.....");
    console.log(this);
    console.log(b);
    console.log(c);
}
a(3,4);

console.log("Example 2");
function d(e,f){
    console.log("This is function call 2.....");
    console.log(this);
    console.log(e);
    console.log(f);
}
var g = d.bind(7);
d(5,9);

// Call function
console.log("Example 3");
function h(i,j){
    console.log("This is function call 3.....");
    console.log(this);
    console.log(i);
    console.log(j);
}
h.call("Hello", 8, 15);

// apply function
console.log("Example 4");
function k(l,m){
    console.log("This is function call 4.....");
    console.log(this);
    console.log(l);
    console.log(m);
}
k.call("Hello", [11, 13]);