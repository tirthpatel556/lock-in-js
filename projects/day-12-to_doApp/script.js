let taskInput=document.getElementById("taskInput");
let addButton=document.getElementById("add");
let taskList=document.getElementById("taskList");

// render task

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function renderTask() {
    taskList.innerHTML="";
    tasks.forEach(function(task,index){
        let li=document.createElement("li");
        li.innerText=task;
        let deletebtn=document.createElement("button");
        deletebtn.innerText="delete";
        deletebtn.addEventListener("click",
            function(){
                tasks.splice(index, 1);
                localStorage.setItem("tasks",JSON.stringify(tasks));
                renderTask();
            }
        )
        li.appendChild(deletebtn);
        taskList.appendChild(li);        
    });
}
renderTask();

// add task


addButton.addEventListener("click",
    function(){
        let task=taskInput.value.trim();
        if (task==="") {
            return;
        }else if(tasks.includes(task)){
            return;
        }
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        taskInput.value="";
        renderTask();
    }
)

//disable blank input

taskInput.addEventListener("input",
    function () {
        addButton.disabled=taskInput.value.trim()==="";
    }
)
addButton.disabled=true;