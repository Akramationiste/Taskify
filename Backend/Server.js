const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose.connect('mongodb+srv://taskify:taskify@todoapp.yuwzoxu.mongodb.net/test');
app.listen(3000, () => console.log('Server started'));


mongoose.connection.once('open', function(){
    console.log('Connection has been made, abda takhdam...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));