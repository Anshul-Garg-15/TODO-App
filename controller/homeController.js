// const express = require('express');

const TODO = require('../model/todo');
const path = require('path');

//to get home page
module.exports.home = function(req,res){

    TODO.find({},function(err,appList){
        if(err){
            console.log('Error in finding list',err);
            return;
        }

        return res.render('home',{
            title: "TODO_App",
            task_list: appList
        });
    });
}

//to add a task in a list
module.exports.createTask = function(req,res){
    TODO.create({
        Description: req.body.Description,
        Category: req.body.Category,
        due_Date: req.body.due_Date
    },function(err,tasks){
        if(err){
            console.log('Error in creating task',err);
            return;
        }
        return res.redirect('/');
    });
}

//to delete task by finding task id
module.exports.deleteTask = function(req,res){
    let id = req.params.id;
    TODO.findByIdAndDelete(id,function(err,deletedTask){
        if(err){
            console.log('Error in deleting task',err);
            return;
        }

        return res.redirect('/');
    });
}

//to retrieve task by category
module.exports.retrieveTask = function(req,res){
    let retrieveCategory = req.params.Category;
    TODO.find({retrieveCategory},function(err,retrieveTask){
        if(err){
            console.log('Error in retrieving task',err);
            return;
        }

        return res.redirect('/');
    });
}