var a = Boolean("");
console.log(a);
//result: false;

var b = Boolean("that");
console.log(b);
//result: true

var c = Boolean(0);
console.log(c);
//result: false

var d = Boolean(578469);
console.log(d);
//result: true

var e = Boolean(null);
console.log(e);
//result: false

var f = Boolean(NaN);    // NaN = Not a number
console.log(f);
//result: false

var g = Boolean(undefined);
console.log(g);
//result: false

var h = Boolean(false);
console.log(h);
//result: false

var i = Boolean({});
console.log(i);
//result: true

var j = Boolean([]);
console.log(j);
//result: true