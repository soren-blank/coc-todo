const inputBox = document.getElementById("input-text");
const taskList = document.getElementById("tasks");

// const addTaskButton = document.getElementsByTagName("button");

function addTask(){
    if (inputBox.value == ""){
        alert("Please enter a task");
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        taskList.appendChild(task);

        let span = document.createElement("span");
        span.id = "delete";
        task.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

taskList.addEventListener("click", function(event){
    if (event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if (event.target.tagName == "SPAN"){
        let task = event.target.parentNode;
        task.remove();
        saveData();
    };
}),false;


function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function loadData(){
    taskList.innerHTML = localStorage.getItem("data");
}

loadData();