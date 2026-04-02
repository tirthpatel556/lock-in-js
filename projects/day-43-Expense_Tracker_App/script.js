let expenseInput = document.getElementById("expenseInput");
let amountInput = document.getElementById("amountInput");
let addButton = document.getElementById("add");
let expenseList = document.getElementById("expenseList");
let totalExpense = document.getElementById("totalExpense");

let expenses =JSON.parse(localStorage.getItem("expenses")) || [];
let chart;

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
    renderChart();
}

// save expense

function saveData() {
    localStorage.setItem("expenses",JSON.stringify(expenses));
}

renderExpenses();

// chart function


function renderChart(){
    let labels = expenses.map(item =>item.name);
    let data = expenses.map(item=>item.amount);
    let ctx = document.getElementById("expenseChart").getContext("2d");
     if (chart) {
        chart.destroy();
     }

     chart = new Chart(ctx,{
        type: "pie",
        data:{
            labels: labels,
            datasets:[{
                data: data,
                backgroundColor: [
                    "#4CAF50",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8E44AD"
                ]
            }]
        },
        options:{
            plugins:{
                legend:{
                    labels:{
                        color:"#ffffff"
                    }
                }
            }
        }
     });
}