const accounts = {
  name: "Tushar Langer",
  income: [],
  expenses: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalIncome = 0;
    let totalExpenses = 0;
    let accountBalance = 0;

    this.income.forEach(function (income) {
      totalIncome += income.amount;
    });

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a total balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

accounts.addExpense("Rent", 950);
accounts.addExpense("Coffee", 2);
accounts.addIncome("Job", 1000);
console.log(accounts.getAccountSummary());
