var form = document.querySelector("form"),
    input = document.getElementById("input-task"),
    memo = document.querySelector("ul"),
    counterSpan = document.getElementById("counterSpan");

counter();
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const liNumber = document.querySelectorAll("ul li");

    if (liNumber.length < 5) {
        ToDo();
        finishTask();
        deleteTask();
        counter();
        input.value = "";
    } else {
        alert("Maximum number reached");
    }
});

function finishTask() {
    var liChildren = document.querySelectorAll("li");

    for (let index = 0; index < liChildren.length; index++) {
        const element = liChildren[index];
        element.onclick = function () {
            this.classList.toggle("finished");
        };
    }
}

function deleteTask() {
    var deleteIcons = document.getElementsByTagName("i");

    for (let index = 0; index < deleteIcons.length; index++) {
        const element = deleteIcons[index];
        element.onclick = function () {
            this.parentElement.remove();
            counter();
        };
    }
}

function counter() {
    var liChildren = document.querySelectorAll("li");

    counterSpan.innerHTML = liChildren.length;
}
function ToDo() {
    if (input.value == "") {
        alert("please write");
    } else {
        const value = input.value;
        // const newList = document.createElement("li");
        // newList.textContent = value;
        // memo.append(newList);
        memo.innerHTML += `<li><span>${value}</span> <i class="fa-solid fa-trash" style="color: #ff0000;" title="delete this task"></i></li>`;
    }
    input.focus();
}

memo.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.closest("LI").remove();
    }
});
