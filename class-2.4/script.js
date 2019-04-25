/*
জাভাস্ক্রিপ্টে রেগুলার এক্সপ্রেশন ব্যবহার
*/

var r = new RegExp('abc+','i');
var s = "abccccccccC";

var result = r.test(s);
console.log(result);

var r1 = new RegExp('^[a-z_][a-z0-9_]*','i');
var s1 = "c";

var result1 = r1.test(s1);
console.log(result1);


var r2 = /ab(c+)/i;
var t = 'abccc';

var result2 = t.match(r2);
console.log(result2);
var result3 = r.exec(t);
console.log(result3);



var n = "1983";
var changed = n.replace(/1/g,"১");
var changed = changed.replace(/2/g,"২");
var changed = changed.replace(/3/g,"৩");
var changed = changed.replace(/4/g,"৪");
var changed = changed.replace(/5/g,"৫");
var changed = changed.replace(/6/g,"৬");
var changed = changed.replace(/7/g,"৭");
var changed = changed.replace(/8/g,"৮");
var changed = changed.replace(/9/g,"৯");
var changed = changed.replace(/0/g,"০");
console.log(changed);