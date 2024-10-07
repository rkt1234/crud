const express = require('express')
const mongoose = require('mongoose')
const taksRoute = require('./routes/taskRoute')
const methodOverride = require('method-override');

app = express()

app.set('view engine', 'ejs'); // set the ejs view engine
app.use(methodOverride('_method'));  // Override with POST having ?_method=PUT
app.use(express.urlencoded({ extended: true })); // middleware to parse the form data

// establishing connection with db
mongoose
  .connect("mongodb+srv://tiwariravikant2001:6S8fFWeaVGb1GzQf@cluster0.v4rea.mongodb.net/crud")
  .then(() => console.log("Connection made successfully"))
  .catch((err) => console.log("Could not connect to MongoDB:", err));

// routing to tasks
app.use('/task', taksRoute)


app.listen(5000, () => {
  console.log("Server is running on port 5000");
})