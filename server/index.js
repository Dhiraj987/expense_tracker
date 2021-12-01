// app set up
const express = require('express');
const app = express();
app.use(express.json())

// imports from other files
const expense_functions = require('./database_handler/expense_defi')
const income_functions = require('./database_handler/income_defi')


app.get('/', (req, res) => {
    res.send('Hey, ready to track your expenses!')
} );


// endpoints for expenses
app.post('/expenses/insert', (req, res) => {
    expe_obj = {
        date: Date.now | req.body.date,
        category: req.body.category,
        amount: req.body.amount,
        notes:req.body.notes
    }
    expense_functions.insertExpense(expe_obj);
    res.send('added your expense')
});

app.get('/expenses/viewAll', (req,res) => {
    console.log('------')
    const all_exp = expense_functions.fetchExpenses();
    console.log(all_exp)
    res.json(all_exp);
});


// income_functions.insertIncome({ income_source: 'workplace1', amount: 100, notes: 'happy me'})

app.listen(3000)

