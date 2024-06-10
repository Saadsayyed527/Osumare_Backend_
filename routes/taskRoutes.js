const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
const { authenticateToken, generateToken } = require('../middleware/auth');
//login route for login and generate a token 
router.post('/login', generateToken);

// route for getting all the tasks
router.get('/tasks', authenticateToken, taskController.getTasks);

// for specific routes using id 
router.get('/tasks/:id', authenticateToken, taskController.getTaskById);

// creating new tasks 
router.post('/tasks', authenticateToken, taskController.createTask);

//update the task using the id
router.put('/tasks/:id', authenticateToken, taskController.updateTask);


// delete the tasks using the id
router.delete('/tasks/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
