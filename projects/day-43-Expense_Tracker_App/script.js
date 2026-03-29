let expenseInput = document.getElementById("expenseInput");
let amountInput = document.getElementById("amountInput");
let addButton = document.getElementById("add");
let expenseList = document.getElementById("expenseList");
let totalExpense = document.getElementById("totalExpense");

let expenses =JSON.parse(localStorage.getItem("expenses")) || [];

// expense save

addButton.addEventListener("click", 
    ()=>{
        let expense = expenseInput.value;
        let amount = amountInput.value;
        let newExpense = {

                name: expense,
                amount: Number(amount)
            };

        expenses.push(newExpense);
        saveData();
        console.log(expenses);
        renderExpenses();
    }
);

function renderExpenses() {
    
    expenseList.innerHTML="";
    let total = 0;
    expenses.forEach(function (item,index) {
        let li = document.createElement("li");
        li.innerText = item.name + " -$" + item.amount;
        total+= item.amount;
        
        //delete expense 
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.addEventListener("click",
            ()=>{
                expenses.splice(index,1);
                saveData();
                renderExpenses();
            }
        );
        
        expenseList.appendChild(li);
        li.appendChild(deleteBtn);
    });
    totalExpense.innerText = total;
}

// save expense

function saveData() {
    localStorage.setItem("expenses",JSON.stringify(expenses));
}

renderExpenses();