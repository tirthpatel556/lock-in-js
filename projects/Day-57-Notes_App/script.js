let noteInput = document.getElementById("noteInput");
let categoryInput = document.getElementById("categoryInput");
let addBtn = document.getElementById("addNote");
let notesContainer = document.getElementById("notesContainer");
let searchInput = document.getElementById("searchInput");

let notes = [];
let editIndex = null;

// add note logic

addBtn.addEventListener("click", () => {

    let text = noteInput.value;
    let category = categoryInput.value;
    if (text === "") return;    //prevents blank input

    // to add note

    if (editIndex === null) {

        notes.push({
            text: text,
            category: category,
        });
    } else {

    //   to edit note

        notes[editIndex]= {
            text :text,
            category : category
        };
        editIndex = null;
        addBtn.innerText = "Add Note";
    };
    renderNotes();
    noteInput.value = "";
});

// render notes logic

function renderNotes() {
  notesContainer.innerHTML = "";
  
  let searchText = searchInput.value.toLowerCase();

  notes.forEach((note, index) => {
    if (note.text.toLowerCase().includes(searchText)) {
        
        let div = document.createElement("div");
        div.classList.add("note");
        let text = document.createElement("p");
        text.innerHTML = `
        <p>${note.text}</p>
        <small>${note.category}</small>
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
        `;
    }
    
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    
    editBtn.addEventListener("click",
        ()=>{
            noteInput.value = note.text;
            categoryInput.value = note.category;

            editIndex = index;
            addBtn.innerText = "Update Note";
            console.log("editIndex:" +editIndex);
        }
    );
    div.appendChild(text);
    div.appendChild(editBtn);
    notesContainer.appendChild(div);
});
}

// delete note logic

function deleteNote(index) {
    notes.splice(index,1);
    localStorage.setItem("notes",JSON.stringify("notes"));
    renderNotes();
}

// search note logic

searchInput.addEventListener("input",
    ()=>{
        renderNotes();
    }
);