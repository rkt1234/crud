const express = require('express')
const mongoose = require('mongoose')
app = express()
const taksRoute = require('./routes/taskRoute')
mongoose
  .connect("mongodb+srv://tiwariravikant2001:6S8fFWeaVGb1GzQf@cluster0.v4rea.mongodb.net/crud")
  .then(() => console.log("Connection made successfully"))
  .catch((err) => console.log("Could not connect to MongoDB:", err));
  
// routing
app.use('/task', taksRoute)


app.listen(5000)