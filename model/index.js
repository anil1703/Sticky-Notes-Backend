import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
        
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    bg_color:{
        type:String,
        required:true
    },
    font_color:{
        type:String,
        required:true
    }


})

const notesDb = mongoose.model("notes",notesSchema)

export {notesDb};