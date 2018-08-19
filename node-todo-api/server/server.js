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

app.use(bodyParser.json());

app.post('/todo', (req, res)=>{

});

app.listen(3000, ()=>{
    console.log('start on port 3000');
})