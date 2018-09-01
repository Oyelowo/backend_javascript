const {
    ObjectID
} = require('mongodb');

const {
    Todo
} = require('./../../models/todos');
const {
    User
} = require('./../../models/user.js');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'oyelowo@example.com',
    passoword: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userOneId,
            access: 'auth'
        }, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'dayo@example.com',
    passoword: 'userTwoPass',
}]

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 5345
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};
module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};