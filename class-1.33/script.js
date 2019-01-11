/*
১.৩৩ - কনস্ট্রাক্টর ও ফ্যাক্টরী
*/

// name, age, gender

// factory
function CreateHuman(name,age,gender){
    return {
        name,
        age,
        gender
    }
}

var a = CreateHuman("anam",60,"M");
var b = CreateHuman("Hasin",100,"M");
console.log(a);
console.log(b);


// Constructor
function Human(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
}
var c = new Human("Rayhan",40,"M");
var d = new Human("Bishal",45,"M");
console.log(c);
console.log(d);