const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();


//to get home page
router.get('/' , homeController.home);

//to add task in a list
router.post('/create-task' , homeController.createTask);

//to delete task from a list
router.get('/delete-task/:id',homeController.deleteTask);

//to retrieve task from a list by category
router.get('/retrieve-category/:Category' , homeController.retrieveTask);

module.exports = router;