// Creating the controllers 
let tasks = [];
let currentId = 1;
// create getTasks
exports.getTasks = (req, res) => {
  const { sort, filter } = req.query;
  let result = tasks;

  if (filter) {
    result = result.filter(task => task.title.includes(filter) || task.description.includes(filter));
  }

  if (sort) {
    result = result.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
  }

  res.status(200).json(result);
};


// creating the getTaskById controller taking the id in url with req.params
exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(200).json(task);
};


// new createTask for user 
exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Updating the task by ID
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  task.title = title;
  task.description = description;
  res.status(200).json(task);
};


// deleting the tasks 
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted successfully' });
};
