/*
১.৪৫ - প্রোজেক্ট ঘড়ি
*/

var target = document.querySelector(".result");


function setTime(){
    var d = new Date();

    target.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}

setInterval(setTime,1000);