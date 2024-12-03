let inputText = document.querySelector(".name");
let inputBtn = document.querySelector(".submit");
let tasks = document.querySelector(".tasks");
let taskContent

inputBtn.onclick = function() {

    if (inputText.value !== "") {
    let newTask = document.createElement("div");
    let deleteBtn = document.createElement("button");
    taskContent = document.createElement("span");

    deleteBtn.textContent = "Delete";
    taskContent.innerHTML = inputText.value;

    newTask.className = "new-task";
    taskContent.className = "task-content";

    newTask.appendChild(taskContent);
    newTask.appendChild(deleteBtn);
    tasks.appendChild(newTask);
    }
    inputText.value = "";
    saveData();
};

tasks.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveData();
    } else if((e.target.tagName === "SPAN")) {
        e.target.className = "dele";
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", tasks.innerHTML);
};

function showTasks() {
    tasks.innerHTML = localStorage.getItem("data");
};
showTasks();