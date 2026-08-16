document.body.innerHTML = `
<div id="continer">

    <h1 id="title">Expense Tracker</h1>

    <div id="tt">
        <p>Total Spent</p>
        <h1 id="totalspent">$0.00</h1>
    </div>

    <div id="expansename">
        <input type="text" id="input" placeholder="Expense name (e.g lunch)">
        <input type="number" id="input1" placeholder="Amount (e.g 25)">
    </div>

    <button id="btn">Add Expense</button>
    <div id="expenseList"></div>
</div>
`;

let input = document.getElementById("input");
let input1 = document.getElementById("input1");
let btn = document.getElementById("btn");
let expenseList = document.getElementById("expenseList");
let totalspent = document.getElementById("totalspent");


btn.addEventListener("click", function() {

    let expenseName = input.value;
    let amount = Number(input1.value);

    if (expenseName === "" || input1.value === "") {
        alert("Please enter an expense and amount");
        return;
    }

    let expense = document.createElement("div");
    
    expense.innerHTML = 
        `<span>${expenseName} - $${amount.toFixed(2)}</span>
        <button class="deleteBtn">Delete</button>`;


    
    expenseList.appendChild(expense);

    let currentTotal = Number(
        totalspent.textContent.replace("$", "")
    );

    let newTotal = currentTotal + amount;

    totalspent.textContent = "$" + newTotal.toFixed(2);

    let deleteBtn = expense.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function() {

        let currentTotal = Number(
            totalspent.textContent.replace("$", "")
        );

        let newTotal = currentTotal - amount;

        totalspent.textContent = "$" + newTotal.toFixed(2);

        expense.remove();
    });


    input.value = "";
    input1.value = "";
});