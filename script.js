let tasks = [];
let dark = false;

function render() {
  let list = document.getElementById('taskList');
  list.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    let div = document.createElement('div');

    if (task.done == true) {
      div.className = 'task done';
    } else {
      div.className = 'task';
    }

    div.innerHTML =
      '<span>' + task.text + '</span>' +
      '<div>' +
      '<button class="complete" onclick="toggleTask(' + i + ')">✓</button>' +
      '<button class="delete" onclick="deleteTask(' + i + ')">✕</button>' +
      '</div>';

    list.appendChild(div);
  }
}

function addTask() {
  let input = document.getElementById('taskInput');
  let text = input.value;

  if (text == '') {
    return;
  }

  tasks.push({ text: text, done: false });
  input.value = '';
  render();
}

function toggleTask(index) {
  if (tasks[index].done == true) {
    tasks[index].done = false;
  } else {
    tasks[index].done = true;
  }

  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function clearTasks() {
  tasks = [];
  render();
}

function toggleTheme() {
  if (dark == false) {
    document.body.classList.add('dark');
    dark = true;
  } else {
    document.body.classList.remove('dark');
    dark = false;
  }
}

render();
