/*
৩.৫ - ডম প্রোজেক্ট ০১
*/

var inp = document.querySelector(".taskname");
var list = document.querySelector(".tasklist");
var tasklist = [];

// ["get up"."brush teeth"]
function render(elements) {
	list.innerHTML = "";
  elements.forEach(e => {
    let newEl = document.createElement("li");
    newEl.innerHTML = e;
    list.appendChild(newEl);
  });
}

inp.addEventListener("keyup", e => {
  if (e.which === 13 && inp.value !== "") {
    tasklist.push(inp.value);
    inp.value = "";
    render(tasklist);
  }
});
