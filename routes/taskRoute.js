const express =require('express')
const router = express.Router()
const taskMethods = require('../controllers/taskController')

router.post('/create', taskMethods.createTask)


router.get('/fetch', taskMethods.fetchTask)

router.put('/update', taskMethods.updateTask)


module.exports = router