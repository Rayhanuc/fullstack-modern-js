/*
১.১৬ - নট অপারেটর
*/

// !true = false
// !false = true
console.log("1");
if (true) {
    console.log("Consectetur ad temporibus");
} else {
    console.log("Not Consectetur ad temporibus.");
}
console.log("2");
if (!true) {
    console.log("Consectetur ad temporibus");
} else {
    console.log("Not Consectetur ad temporibus.");
}
console.log("3");
if (!true && true) {
    console.log("hello world");
}else {
    console.log("Not so hello world");
}

console.log("4");

if (!true || true) {
    console.log("hello world");
}else {
    console.log("Not so hello world");
}

console.log("5");
if (!(true || true)) {
    console.log("Something")
}else {
    console.log("Nothing");
}

console.log("6");
if (!true || !true) {
    console.log("Something 2")
}else {
    console.log("Nothing 2");
}

console.log("7");
if(!true ) {
    console.log("It is true");
}else {
    console.log("It is false");
}

console.log("8");
var a = "Chowdhury";
if(a=="") {
    console.log("a was not provided.");
}else {
    console.log(`Rayhan Uddin ${a}`);
}

console.log("9");
var b = undefined;
if(b=="") {
    console.log("b was not provided.");
}else {
    console.log(`Rayhan Uddin ${b}`);
}

console.log("10");
var c = undefined;
if(Boolean(c)==false) {
    console.log("c was not provided.");
}else {
    console.log(`Rayhan Uddin ${c}`);
}

console.log("11");
var d = undefined || "";
if(!d) {
    console.log("d was not provided.");
}else {
    console.log(`Rayhan Uddin ${d}`);
}

console.log("12");
console.log("Some Unary operator example");
console.log(!false);
console.log(!true);
console.log(!"");
console.log(!0);
console.log(!1);
console.log(!!1);