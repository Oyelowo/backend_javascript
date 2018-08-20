let mongoose = require('mongoose');
// to make it use inbuilt promise as opposed to third party Promise
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}