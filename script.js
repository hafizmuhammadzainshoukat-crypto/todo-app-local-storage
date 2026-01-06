let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;
    span.onclick = () => editTask(index);

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  if (taskInput.value === "") return;

  tasks.push(taskInput.value);
  taskInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  let newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask;
    renderTasks();
  }
}

renderTasks();
