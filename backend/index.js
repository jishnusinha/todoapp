const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
var cors = require('cors')

var app = Express();

Mongoose.connect('mongodb+srv://jishnusinha:972GNubbMj2x4SoN@cluster-5pvsj.mongodb.net/ottdb?retryWrites=true&w=majority')
.then(()=> console.log('connected to mongodb'))
.catch(err => console.error('could not connect to mongodb', err))

const Task = Mongoose.model("task" ,{
   name: String,
   priority : String,
   date : String ,
   time : String
});
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post("/addtask", async (request, response) => {
    try {
        var task = new Task(request.body)
        var result = await task.save()
        response.send(result)
    } catch(error) {
        response.status(500).send(error)
    }
});
app.get("/gettask", async (request, response) => {
    var result = await Task.find().exec();
    response.send(result)
 

});
app.get("/gettask/:id", async (request, response) => {
    var result = await Task.findById(request.params.id).exec();
    response.send(result)
});
app.put("/puttask/:id", async (request, response) => {
    var data = await Task.findById(request.params.id).exec();
    data.set(request.body)
    var result = await data.save()
    response.send(result)
});
app.delete("/deletetask/:id", async (request, response) => {
    var result = await Task.deleteOne({ _id: request.params.id }).exec();
    response.send(result)
});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});