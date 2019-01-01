/*
১.২১ - var, let, const এবং জাভাস্ক্রিপ্টে স্কোপ
*/

// Scope 
var a = "This is a var";
let b = "This is a let";
console.log(a);
console.log(b);
const c = "This is a const";
// Blog scoping as like as One sided Glass reflection.
// আপনি বাইরের ডিক্লেয়ার করা ভেরিয়েবল ব্লগের ভিতরে পাবেন। ব্লগের ভিতরে ডিক্লেয়ার করা ভেরিয়েবল বাইরের পাওয়া যাবে না। এটাকে ব্লগ স্কোপিং বলা হয়। Let and const ব্লগ স্কোপিং ব্যবহার করে। var দিয়ে ডিক্লেয়ার করা ভেরিয়েবল উভয় যায়গার পাওয়া যাবে মানে ব্লগের ভিতরে ও বােইরে। আপনি একাদক বার var and let এর মান পরিবর্তন করতে পারবেন। কিন্তু 
{
    var d = "This is d";
    console.log(d);
    let e = "This is e in";
    {
        console.log(e);
    }
    console.log(e);
}
let e = "This is e out";
console.log(d);
console.log(e);
a = "This is change a";
b = "This is change b";
console.log(a);
console.log(b);