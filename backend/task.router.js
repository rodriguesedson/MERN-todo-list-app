const express = require('express');
const router = express.Router();
const {getTasks, createTask, editTask, deleteTask} = require('./task.controller');

router.get('/', getTasks);
router.post('/create', createTask);
router.put('/edit/:id', editTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;