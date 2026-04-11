let tasksInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTask");
let emptyState = document.getElementById("emptyState");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

// data stores here in the array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

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
        saveData();
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
// filter task logic

    let filteredTasks = tasks;
    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if(currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }
    
    // add task in list
    
    filteredTasks.forEach((task,index) => {
        
        let realIndex = tasks.indexOf(task);
        let li = document.createElement("li");
        li.innerText = task.text;
        
        if (task.completed) {
            li.classList.add("completed");
        }
        
        li.addEventListener("click",
            ()=>{
                task.completed = !task.completed;
                saveData();
                renderTasks();
            }
        );
        
        // delete task
        
        let DeleteBtn = document.createElement("button");
        DeleteBtn.innerText = "Delete";
        
        DeleteBtn.addEventListener("click",
            (e)=>{
                e.stopPropagation();
                
                tasks.splice(realIndex, 1);
                saveData();
                renderTasks();
            }
        );
        taskList.appendChild(li);
        li.appendChild(DeleteBtn);
    });
    
    // total and completed count
    
    let total = tasks.length;
    let completed = tasks.filter(t => t.completed).length;
    taskCount.innerText = `Total: ${total} | Completed: ${completed}`;
}

// filter logic

let filters = document.querySelectorAll('input[name="filter"]');

filters.forEach(filter=>{
    filter.addEventListener("change",
        ()=>{
            currentFilter = filter.value;
            renderTasks();
        }
    );
});

//save data after refresh

function saveData(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

// initial call

renderTasks();