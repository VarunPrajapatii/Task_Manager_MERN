const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();


//middleware
app.use(express.static("./public"))
app.use(express.json());   //if we dont use this we wont have that data in req.body


app.use("/api/v1/tasks", tasks)
app.use(notFound);
app.use(errorHandlerMiddleware);

//app.get('/api/v1/tasks')          - get all the tasks
//app.post('/api/v1/tasks')         - create a new task
//app.get('/api/v1/tasks/:id')      - get single task
//app.patch('/api/v1/tasks/:id')    - update task
//app.delete('/api/v1/tasks/:id')   - delete task






const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, (req, res) => {
            console.log("Server Running on port 3000...")
        });
    } catch (error) {
        console.log(error);
    }
}

start();