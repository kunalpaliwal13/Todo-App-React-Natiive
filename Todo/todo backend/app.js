const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongourl= ""; 
// get your mongo url

mongoose.connect(mongourl).then(()=>{
    console.log("Database connected")
})

require("./noteschema");
const Note = mongoose.model("collection"); 


app.get("/",(req,res)=>{
    res.send("Server started")
})

app.post("/enterdata", async (req, res)=>{
    const {id, heading, text} = req.body;

    try{
        const newNote = await Note.create({
            id: id,
            heading: heading,
            text: text
        });
        res.send({status: "ok", data: newNote });
    }catch(error){}

}) 
app.listen(5001, ()=>{
    console.log("server started!")
});


