const Task = require('../models/task')

async function createTask(title, description, res) {
    const taskData = {
        title:title,
        description:description,
    }
    const task = new Task(taskData)
    
    try {
        const savedTask = await task.save()
        console.log(savedTask._id)
        res.json({msg:"Added successfully"})
    }
    catch(e) {
        console.log(e)
        res.json({msg:"Could not add task"})
    }
}

async function fetchTask(res) {
try {
    const savedTask = await Task.find()
    const tasks=[]
    for(var task_item of savedTask) {
        tasks.push({
            title:task_item.title,
            description:task_item.description,
            id:task_item._id
        })
    }
    console.log(typeof tasks)
    res.json({tasks:tasks})
}
catch(e) {
    console.log(e)
    res.json({msg:"Could not fetch task"})
}
res.render('../views/home.ejs')
}

async function updateTask(title, description, res, _id) {
    try {
        const task = await Task.findByIdAndUpdate(_id, {description:description,title:title},{new:true})
        res.json({msg:"Task updated"})

    }
    catch(e) {
        console.log(e)
        res.json({msg:"Could not update task"})
    }
}

async function deleteTask(res,_id) {
    try {
        const task = await Task.findByIdAndDelete(_id)
        res.json({msg:"Task deleted"})
        }
        catch(e) {
            console.log(e)
            res.json({msg:"Could not delete task"})
            }

}
module.exports = {createTask, fetchTask, updateTask, deleteTask}