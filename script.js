const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value;

  if(taskText === "") {
    alert("Please enter task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}