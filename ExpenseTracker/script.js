document.addEventListener("DOMContentLoaded", function () {
  const expenseDescriptionInput = document.getElementById("expenseDescription");
  const expenseAmountInput = document.getElementById("expenseAmount");
  const addExpenseButton = document.getElementById("addExpense");
  const expenseList = document.getElementById("expenseList");
  const totalAmountElement = document.getElementById("totalAmount");

  let totalAmount = 0;

  addExpenseButton.addEventListener("click", function () {
    const description = expenseDescriptionInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (description && !isNaN(amount) && amount > 0) {
      // Create a new list item for the expense
      const li = document.createElement("li");
      li.textContent = `${description}: $${amount.toFixed(2)}`;

      // Append the new list item to the expense list
      expenseList.appendChild(li);

      // Update the total amount
      totalAmount += amount;
      totalAmountElement.textContent = totalAmount.toFixed(2);

      // Clear the input fields
      expenseDescriptionInput.value = "";
      expenseAmountInput.value = "";
    } else {
      alert("Please enter a valid description and amount");
    }
  });
});
