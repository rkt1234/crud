const express = require('express')
app = express()

app.get('/',()=> {
    res.json({msg:"Hello"})
})
app.listen(3000)