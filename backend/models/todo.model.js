const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    data:{type: 'string',required: true}
});

const todos = mongoose.model("todos",todoSchema);
module.exports = todos;