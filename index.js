const express=require('express');
const app = express();
const port = 5003;

const path =  require('path');

const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/' , require('./routes'));  

app.listen(port,function(err){
    if(err){
        console.log("Error",err); 
    }

    console.log(`Server is Running on : ${port}`);

});