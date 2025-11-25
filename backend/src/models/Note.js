//Note model for MongoDB using Mongoose

import mongoose from 'mongoose';

//Create a schema for Note
const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
},{timestamps: true});
//CreatedAt and UpdatedAt fields will be added automatically

//Create a model from the schema
const Note = mongoose.model('Note', noteSchema);
export default Note;