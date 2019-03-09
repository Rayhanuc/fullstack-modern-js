/*
১.৪৪ - ম্যাথ প্রোজেক্ট, লুডু খেলার ছক্কা
*/

var result = document.querySelector(".result");
var action = document.querySelector(".action");

action.onclick = function(){
    var ludu = Math.ceil(Math.random()*6);
    result.innerHTML = ludu;
}