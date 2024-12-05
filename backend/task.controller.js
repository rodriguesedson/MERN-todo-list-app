const Task = require('./task.model');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).send(tasks);
  } catch (e) {
    return res.status(500).send('An error has occurred. Please try again or contact us.');
  }
};

const createTask = async (req, res) => {
  const newTask = new Task({
    task: req.body.task
  });
  try {
    await newTask.save();
    return res.status(201).send("Task created successfully.");
  } catch (e) {
    return res.status(500).send("An error has occurred. Please try again or contact us.");
  }
};

const editTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      status: req.body.status
    }, {
      new: true
    });
    return res.status(201).send(task);
  } catch (e) {
    return res.status(500).send("An error has occurred. Please try again or contact us.");
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    return res.status(200).send('Task deleted successfully.');
  } catch (e) {
    return res.status(500).send("An error has occurred. Please try again or contact us.");
  }
};

module.exports = {
  getTasks,
  createTask,
  editTask,
  deleteTask
}