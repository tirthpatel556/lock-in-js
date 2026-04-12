let noteInput = document.getElementById("noteInput");
let categoryInput = document.getElementById("categoryInput");
let addBtn = document.getElementById("addNote");
let notesContainer = document.getElementById("notesContainer");

let notes = [];

addBtn.addEventListener("click",
    ()=>{
        let text = noteInput.value;
        let category = categoryInput.value;
        if (text === "") {
            return;
        }
        let newNote = {
            text : text,
            category : category
        }
        notes.push(newNote);
        renderNotes();
        noteInput.value = "";
    }
);

function renderNotes(){
    noteInput.innerHTML = "";

    notes.forEach((note,index) =>{
        let div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML =`<strong>${note.text}</strong><br>
        <small>${note.category}</small>
        `;
        notesContainer.appendChild(div); 
    });
}