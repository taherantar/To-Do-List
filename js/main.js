
var form = document.querySelector("form"),
    input = document.getElementById("input-task"),
    memo = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const liNumber = document.querySelectorAll("ul li").length;

  if (liNumber < 5) {
    ToDo();
    input.value = "";
  } else {
    alert("Maximum number reached");
  }
});

function ToDo() {
  if (input.value == "") {
    alert("please write");
  } else {
    const value = input.value;
    const newList = document.createElement("li");
    newList.textContent = value;
    memo.append(newList);
   
  }
}

memo.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.closest("LI").remove();
  }
});