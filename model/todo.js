const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    Description: {
        type: String,
        required:true
    },
    Category: {
        type: String,
        required:true
    },
    due_Date: {
        type: String,
        required: true
    }
});

const TODO = mongoose.model('TODO' , todoSchema);

module.exports = TODO;