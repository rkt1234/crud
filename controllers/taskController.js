const Task = require('../models/task')

async function createTask(req, res) {
    console.log(req.body.title)
    console.log(req.body.description)
    const taskData = {
        title: req.body.title,
        description: req.body.description,
    };

    const task = new Task(taskData);

    try {
        await task.save();

        // Fetch all tasks to render them on the home page
        const tasks = await Task.find(); // Get all tasks from the database

        // Pass tasks to the template
        return res.render('../views/home.ejs', { tasks });
    } catch (e) {
        console.log(e);
        res.json({ msg: "Could not add task" });
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
       res.render('../views/home.ejs',{tasks})
    }
    catch (e) {
        res.json({ msg: "Could not fetch task" })
    }
}

async function updateTask(req, res) {
    const id = req.body['._id']; 
    const { title, description } = req.body; 

    console.log(req.body._id); 
    console.log('ID:', id); 

    try {
        const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }

        const tasks = await Task.find(); // Fetch all tasks
        return res.render('../views/home.ejs', { tasks });
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: "Could not update task" });
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