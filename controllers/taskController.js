const Task = require('../models/task')

async function createTask(req, res) {
    const taskData = {
        title: "title",
        description: "description",
    }
    const task = new Task(taskData)

    try {
        const savedTask = await task.save()
        res.json({ msg: "Added successfully" })
    }
    catch (e) {
        console.log(e)
        res.json({ msg: "Could not add task" })
    }
}

async function fetchTask(req, res) {
    try {
        const savedTask = await Task.find()
        const tasks = []
        for (var task_item of savedTask) {
            tasks.push({
                title: task_item.title,
                description: task_item.description,
                id: task_item._id
            })
        }
        res.json({ tasks: tasks })
    }
    catch (e) {
        res.json({ msg: "Could not fetch task" })
    }
}

async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate("67024e834e5caa442cd7aa7d", { description: "jahntu", title: "jhantu" }, { new: true })
        res.json({ msg: "Task updated" })
    }
    catch (e) {
        res.json({ msg: "Could not update task" })
    }
}

async function deleteTask(req, res) {
    try {
        const task = await Task.findByIdAndDelete("67024e834e5caa442cd7aa7d")
        res.json({ msg: "Task deleted" })
    }
    catch (e) {
        res.json({ msg: "Could not delete task" })
    }

}
module.exports = { createTask, fetchTask, updateTask, deleteTask }