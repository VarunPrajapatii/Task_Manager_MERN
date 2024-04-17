const mongoose = require("mongoose");

const connectionString = "mongodb+srv://varunpjp:vppt8989@taskmanagerproject.cualnwv.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerProject";

mongoose
    .connect(connectionString)
    .then(()=> console.log("Connected to the DB..."))
    .catch((err) => console.log(err));