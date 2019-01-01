/*
১.২২ - ফাংশন পরিচিতি
*/

function average(num1,num2){
    let answer=(num1+num2)/2;
    return answer;
}

// let answer = average(10,6);
// console.log(answer+5);

console.log(average(4,6));
console.log(average(6,8));
let megaavg = average(average(6,8), average(4,6));


function hello(){
    console.log("Hello world");
}
hello();