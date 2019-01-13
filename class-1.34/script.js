/*
১.৩৪ - ক্লাস
*/

function Animal(type,live){
    this.type=type;
    this.live=live;
}

class Human extends Animal {
    constructor(name) {
        super("mammal", true);
        this.name = name;
    }
}

var anam = nae Human("anam");

console.log(anam.type);
console.log(anam.name);