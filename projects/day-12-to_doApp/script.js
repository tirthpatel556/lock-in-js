let taskInput=document.getElementById("taskInput");
let addButton=document.getElementById("add");
let taskList=document.getElementById("taskList");

// render task

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function renderTask() {
    taskList.innerHTML="";
    tasks.forEach(function(task){
        let li=document.createElement("li");
        li.innerText=task;
        taskList.appendChild(li);        
    });
}
renderTask();

// add task


addButton.addEventListener("click",
    function(){
        let task= taskInput.value;
        if (task==="") {
            return;
        }
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        taskInput.value="";
        renderTask();
    }
)