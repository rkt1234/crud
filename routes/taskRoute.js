const express =require('express')
const router = express.Router()
const createTask = require('../controllers/taskController')

router.post('/create', (req,res) => {
createTask.createTask("title","description",res)
})

router.get('/fetch', (req,res) => {
    createTask.fetchTask(res)
})

router.put('/update', (req,res) => {
    createTask.updateTask("title1","description1",res, "67024e814e5caa442cd7aa7b")
})

router.delete('/delete',(req,res) => {
    createTask.deleteTask(res,"67024e814e5caa442cd7aa7b")
})
module.exports = router