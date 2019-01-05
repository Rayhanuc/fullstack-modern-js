/*
১.২৮ - ক্লোজার ও পিওর ফাংশন
*/

// document.write("Example 1"+"</br>"+"<hr>" );
console.log("Example 1");

// Closer
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

// Pure function
// document.write("Example 1"+"</br>"+"<hr>" );
console.log("Example 2");
function a(b,c) {
    let f = d+e;
    e = 15;
    d= 11;
    return f;
}
let d = 9;
let e = 2;
console.log(a(d,e));
console.log(d);
console.log(e);