const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const empty = document.getElementById("emptyText");

function checkEmpty() {
  if (list.children.length == 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }
}

function addTask() {
  let value = input.value;

  if (value == "") {
    alert("Wpisz zadanie");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.innerText = " " + value;

  let button = document.createElement("button");
  button.innerText = "Usuń";

  checkbox.onclick = function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  };

  button.onclick = function () {
    list.removeChild(li);
    checkEmpty();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  list.appendChild(li);

  input.value = "";
  checkEmpty();
}

function pressEnter(event) {
  if (event.key == "Enter") {
    addTask();
  }
}

checkEmpty();
