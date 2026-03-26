const express = require('express');

const router = express.Router();
const controller = require('../controllers/expense.controller.js');
const { route } = require('../app.js');

router.get('/', controller.showForm);
router.post('/expenses', controller.createExpense);

router.get('/expenses', controller.getExpenses);

router.get('/delete/:id', controller.deleteExpense);


module.exports = router;