/*
১.১৮ - ব্রেক ও কন্টিনিউ
*/
// while loop example
console.log("No.1");
var found = 0;
var target = 21;
var iterator = 2;
while(!found) {
    let answer = target%iterator;
    //console.log(answer);
    if (!answer) {
        found = iterator;
    }
    iterator++;
}
console.log(found);

// for loop example
console.log("No.2");
var target2 = 21;
var found2 = 0;
for (let i = 2; !found2; i++) {
    break;
    let result2 = target2%i;
    if(!result2) {
        found2 = i;
    }
}
console.log(found2);


// Two keyword statement
// 1. Continue;
// 2. break;

// break keyword example
console.log("No.3");
var target3 = 21;
var found3 = 0;
for (let j = 2; j<=target3/2; j++) {
    let result3 = target3%j;
    if(!result3) {
        found3 = j;
        break;
    }
}
console.log(found3);

// break keyword example
console.log("No.4");
var target4 = 21;
var target5 = 90;
var found4 = 0;
for (let k = 2; k<target4/2; k++) {
    let result4 = target4%k;
    if(result4) {
        continue;
    }
    let result5 = target5%k;
    if(!result5) {
        found4 = k;
        break;
    }
}
console.log(found4);

// console.log("No.4");
// var target3 = 21;
// var found3 = 0;
// for (let j = 2; !found3; j++) {
//     continue;
//     let result3 = target3%j;
//     if(!result3) {
//         found3 = j;
//     }
// }
// console.log(found3);
// console.log("No.4");
// var target3 = 21;
// var found3 = 0;
// for (let j = 2; !found3; j++) {
//     continue;
//     let result3 = target3%j;
//     if(!result3) {
//         found3 = j;
//     }
// }
// console.log(found3);