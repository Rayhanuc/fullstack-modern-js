/*
১.৩১ - অবজেক্ট পরিচিতি ও অবজেক্ট লিটারাল
*/

// document.write("Example 1"+"</br>"+"<hr>" );

var a = {
    b:59,
    c:"hello world",
    d:function() {
        console.log("This is d");
    }
}
console.log(a.b);
console.log(a.c);
a.d();
// literal
var e = {
    b:59,
    c:"hello world",
}
var f = {
    b:59,
    c:"hello world",
}
console.log(e==f);

var g = {
    a:17,
    b:"Bangladesh",
}
g.c = "hi!";
delete g.a;
console.log(g);
