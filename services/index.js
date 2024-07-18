import { notesDb } from "../model/index.js";

export async function createNotes(data){
    console.log("hii",data)
    const response = await notesDb.insertMany(data)
    return response
}

export async function getallNotes(){
    const response = await notesDb.find({})
    console.log(response)
    return response
}

export async function updatesNotes(id,dataBody){
    console.log(dataBody)
    const response = await notesDb.updateMany({id:id},{$set: dataBody})
    return response
}

export async function deletingNotes(id){
    const response = notesDb.deleteMany({id:id})
    return response
}