let noteInput = document.getElementById("noteInput");
let categoryInput = document.getElementById("categoryInput");
let addBtn = document.getElementById("addNote");
let notesContainer = document.getElementById("notesContainer");
let searchInput = document.getElementById("searchInput");

let notes = [];
let editId = null;

// add note logic

addBtn.addEventListener("click", () => {

    let text = noteInput.value;
    let category = categoryInput.value;
    if (text === "") return;    //prevents blank input
    
    // to add note
    
    if (editId === null) {

        notes.push({
            id: Date.now(),
            text: text,
            category: category
        });
    } else {
        
    //   to edit note

    notes = notes.map(note =>{
        if (note.id === editId) {
            return {
                ...note,
                text : text,
                category : category
            };
        }
        return note;
    });
    editId = null;
    addBtn.innerText = "Add Note";
};
renderNotes();
noteInput.value = "";
});

// render notes logic

function renderNotes() {
    
    let found = false;
    notes.forEach((note)=>{
        if (note.text.toLowerCase().includes(searchText)) {
            found = true;
            if (notes.length === 0) {
                notesContainer.innerHTML = "<p>No notes yet!</p>";
                return;
            }
            notesContainer.innerHTML = "";
            
            let searchText = searchInput.value.toLowerCase();
            let selectedCategory = categoryInput.value;
            
            let filteredNotes = notes.filter(note=>{
              let matchesSearch = note.text.toLowerCase().includes(searchText);
              let matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
            
              return matchesSearch && matchesCategory;
            });
            
            if (filteredNotes.length === 0) {
            notesContainer.innerHTML = "<p>No notes found</p>";
            return;
            }
            
            filteredNotes.forEach((note, index) => {
            if (note.text.toLowerCase().includes(searchText)) {
                
                let div = document.createElement("div");
                div.classList.add("note");
                let text = document.createElement("p");
                text.innerText = note.text;
                let category = document.createElement("p");
                category.innerText = note.category;
            
                let editBtn = document.createElement("button");
                editBtn.innerText = "Edit";
                
                editBtn.addEventListener("click",
                    ()=>{
                        noteInput.value = note.text;
                        categoryInput.value = note.category;
            
                        editId = note.id;
                        addBtn.innerText = "Update Note";
                    }
                );
                
                // delete button
                
                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
            
                deleteBtn.addEventListener("click",
                    ()=>{
                        notes = notes.filter(n => n.id !== note.id);
                        localStorage.setItem("notes",JSON.stringify("notes"));
                        renderNotes();
                    }
                );
                // to save
                localStorage.setItem("notes",JSON.stringify(notes));
                div.appendChild(text);
                div.appendChild(category);
                div.appendChild(editBtn);
                div.appendChild(deleteBtn);
                notesContainer.appendChild(div);

        }
    });

}
if(!found){
    notesContainer.innerHTML = "<p>no matching notes found </p>";
}

});
}

// search note logic

searchInput.addEventListener("input",
    ()=>{
        renderNotes();
    }
);

// filter category logic

categoryInput.addEventListener("change",
    ()=>{
        renderNotes();
    }
);