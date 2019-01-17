/*
১.৩৭ - এ্যারে পরিচিতি, জাভাস্ক্রিপ্ট অবজেক্ট একসেস করার মজার উপায়
*/

var bajar = ["alu", "potol","mula", "vendi"];
console.log("পূর্ণ এরে কনসুল লগ করার পর।");
console.log(bajar);
console.log("প্রতিটা এরের আইটেমকে নাম্বার দিয়ে কল করার পর।");
console.log(bajar[0]);
console.log(bajar[1]);
console.log(bajar[2]);
console.log(bajar[3]);
console.log(bajar[4]);

// indexOf function

console.log(bajar.indexOf("mula"));
//if don't have any object like this.
console.log("এরের ভিতর কোন আইটেম নেই এই রকম আইটেম দিয়ে কল করার পর।");
console.log(bajar.indexOf("jam"));
console.log("এরের ভিতর কয়টা আইটেম আছে তা জানতে।");
console.log(bajar.length);

console.log(" ");
/*
i= 0 মানে হচ্ছে আমি 0 থেকে শুরু করতে চাচ্ছি।
bajar.length বাজারের লেন্ত এর সমান হলে কিন্তু আমরা একটা undefined পাব।
index শেষ হওয়ার সময় length থেকে ১ কমে। এ জন্য শুধু < ব্যবহার করা হয়েছে।
i++ মানে হচ্ছে দ্বিতীয় বার গননার সময় থেকে ১ করে বাড়ানো।
i যেহেতু increment তাহলে আমরা bajar এর সাথে আমরা i ব্যবহার করতে পারি।
কারণ index টা একাটা নাম্বার।

ফর লোপ
for (let i = 0; index < array.length; index++) {
    const element = array[index];
}


*/
console.log("ফর লোপ চালানুর পর।")
console.log("For loop result:");
for(let i=0; i<bajar.length;i++){
    console.log(bajar[i]);
}

/*
array() এর item add or remove
*/

// array() এর শেষে একটা আইটেম যুক্ত/push করা।
bajar.push("PuiShak");
console.log("এরের শেষে একটা আইটেম যুক্ত করার পর।");
console.log(bajar);

var a = ["mas", "mangsho", "dud", "dim"];
console.log("পূর্ণ এরে কনসুল লগ করার পর।");
console.log(a);
a.pop();
console.log("এরের থেকে pop এর মাধ্যমে বাদ দেয়ার পর।");
console.log(a);

// array() থেকে একটা আইটেম আগে রিটার্ন করা তার পর array() থেকে বাদ/pop() দিয়েছে।
var b = ["shirt", "pant", "godi", "gangi"];
console.log("পূর্ণ এরে কনসুল লগ করার পর।");
console.log(b);
var li = b.pop();
console.log("এরের শেষে যে আইটেমটা বাদ দিয়েছে ওটা রিটার্ন করেছে");
console.log(li);
console.log("এরের শেষ থেকে একটা আইটেম রিটার্ন করার পর বাদ দিয়েছে।");
console.log(b);


// array() এর প্রথমে কোন কিছু যুক্ত/unshift() করা।
console.log(" ");

var c = ["katha", "kolom", "pencil"];
console.log("পূর্ণ এরে কনসুল লগ করার পর।");
console.log(c);
c.unshift("sharpener");
console.log("এরের এর প্রথমে কোন কিছু যুক্ত করার পরে।");
console.log(c);


// array() এর শুরুর থেকে কোন কিছু বাদ/shift() দেয়া।
console.log(" ");
var d = ["katha", "kolom", "pencil"];
console.log("পূর্ণ এরে কনসুল লগ করার পর।");
console.log(d);
d.shift();
console.log("এরের শুরুর থেকে কোন কিছু বাদ/delete দেয়ার পরে।");
console.log(d);

console.log(" ");
//object
console.log("Object কে এরের মত করে কল করা।")
var manush = {
    name: "Rayhan",
    age: 100,
    talk(){
        console.log("Hello world");
    }
}
manush["name"];
console.log(manush["name"]);
console.log(manush["age"]);
manush["talk"]();