/*
১.২০ - কন্ডিশন প্রোজেক্ট
*/


var msg = document.querySelector('#message');
var btn = document.querySelector('#interact');
var result = document.querySelector('#answer');

btn.addEventListener('click', function(){
    let c = msg.value.toLowerCase();
    let reply = "";
    if (c.match('hello')) {
        reply = "hello there!";
    }
    else if(c.match('sing for me')) {
        reply = "Ami banglai gan gai, ami banglar gan gai. ami amar ami ka shiro din ai banglai koja pai";
    }
    else if(c.match('tomar nam ki')) {
        reply = "Amar nam Kuddus Bot";
    }
    else if(c.match('amar nam')) {
        reply = "Rayhan Uddin Chowdhury";
    }
    else {
        reply = "Boji nai";
    }
    result.innerHTML = reply;

    var kotha = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(kotha);
});