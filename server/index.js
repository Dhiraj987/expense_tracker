const expense_functions = require('./database_handler/expense_defi')
const income_functions = require('./database_handler/income_defi')


expense_functions.insertExpense({category:'School', amount:25.00, notes:'veggies'});
income_functions.insertIncome({ income_source: 'workplace1', amount: 100, notes: 'happy me'})