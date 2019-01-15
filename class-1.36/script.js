/*
১.৩৬ - অবজেক্টের কনটেক্সট এ this
*/

var dog = {
    name: "Kallu",
    bark: function() {
        console.log(`woof! ${this.name}`)
    }
}
var x = dog.bark;
dog.bark();
x.call(dog);