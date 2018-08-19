let express = require('express');
let bodyParser = require('body-parser');

let {
    mongoose
} = require('./db/mongoose');

let {
    Todo
} = require('./models/todos');
let {
    User
} = require('./models/user');


let app = express();

app.post('/todo', (req, res)=>{

});

app.listen(3000, ()=>{
    console.log('start on port 3000');
})