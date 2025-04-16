const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    id:{type: Number, unique: true},
    heading: String,
    text: String
},{
    collection: "collection"
});
mongoose.model("collection", notesSchema);