const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}