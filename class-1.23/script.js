/*
১.২৩ - arguments কীওয়ার্ড
*/

function average(){
    let answer = (arguments[0], arguments[1])/2;    // it's a special variable ---- arguments
    console.log(arguments[2]);
    return answer;
}
console.log(average(34,67,536));