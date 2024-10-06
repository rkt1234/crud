const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String,
    },
})

const Task = mongoose.model('Task', taskSchema,"task")
module.exports = Task;