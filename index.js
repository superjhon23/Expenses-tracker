const expenses = [
  {
  category: "Hardware",
  description: "ERTX 90090 XX triple fan",
  amount: "9999",
  },
  {
  category: "Drugs",
  description: "Onion",
  amount: "1",
  },
  {
  category: "Education",
  description: "Assembly for dummies",
  amount: "59.99",
  },
];

/* <li class="expense">
          <div class="expense__detail">
            <div>
              <p class="heading--xs bold">Shopping</p>
              <p class="content-sm gray-300">Nintendo :'v</p>
            </div>
              <p class="content-xl bold">$350</p>
          </div>
          <div class="expense__actions">
            <a href="#">Delete</a>
          </div>
        </li> */

function createExpenseEl(expense){
  //Create elements
  const li = document.createElement("li");
  const expenseDetail = document.createElement("div");
  const container = document.createElement("div");
  const category = document.createElement("p");
  const description = document.createElement("p");
  const amount = document.createElement("p");
  const expenseActions = document.createElement("div");
  const deleteLink = document.createElement("a");
  //Set up elements
  li.classList.add("expense");
  expenseDetail.classList.add("expense__detail");
  category.className = "heading--xs bold";
  category.textContent = expense.category;
  description.className = "content-sm gray-300";
  description.textContent = expense.description;
  amount.className = "content-xl bold";
  amount.textContent = `$${expense.amount}`;
  expenseActions.classList.add("expense__actions");
  deleteLink.textContent = "Delete";
  //Build card
  container.append(category,description);
  expenseDetail.append(container,amount);
  expenseActions.append(deleteLink);
  li.append(expenseDetail, expenseActions);
  return li;
}

function renderExpenses(expenses){
  const expenseList = document.querySelector(".js-expenses");
  console.log(expenseList);
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    //Put the expense on our website
    const expenseEl = createExpenseEl(expense);
    expenseList.append(expenseEl);
  });
}

renderExpenses(expenses);
