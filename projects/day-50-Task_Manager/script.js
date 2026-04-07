let tasksInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTask");
let emptyState = document.getElementById("emptyState");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

// data stores here in the array

let tasks = [];

// add button logic

addButton.addEventListener("click",
    ()=>{
        let taskText = tasksInput.value;
        if (taskText==="") {              //it prevents empty state
            return;
        }
        let newTask = {
            text : taskText,
            completed : false
        };

        tasks.push(newTask);
        renderTasks();
        tasksInput.value="";
    }
);

// for getting input with enter key press
tasksInput.addEventListener("keypress",
    (e)=>{
        if (e.key === "Enter") {
            addButton.click();
        }
    }
);

// Render task function

function renderTasks() {
    taskList.innerHTML="";
    if (tasks.length===0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
    tasks.forEach((task,index) => {
        let li = document.createElement("li");
        li.innerText = task.text;
        taskList.appendChild(li);
    });
}