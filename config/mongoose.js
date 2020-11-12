//require the library
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection in db(to check it successfull or not)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'Db is not connected'));

//up and running then print the message
db.once('open',function(){
   console.log('Successfully connected to database list');
});

