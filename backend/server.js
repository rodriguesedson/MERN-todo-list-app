const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./task.router.js');

app.use(express.json());
app.use(cors());
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Connected at port ${port}`);

  mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection failed: ', err))
})