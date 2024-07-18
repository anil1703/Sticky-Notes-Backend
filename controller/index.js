import { createNotes ,getallNotes,updatesNotes,deletingNotes} from "../services/index.js";

export async function createNotesController(req,res){
    const array = []
    const bodyData = req.body;
    console.log(bodyData)
    array.push(bodyData)
    const fetching = await createNotes(array);
    try{
        
        res.status(200).send("notes inserted Successfully")
    }
    catch(err){
        res.status(500).json({message:err,message});
        console.log("there is a problem while inserting the data")
    }
}

export async function getallNotesController(req,res){
    const fetching = await getallNotes();

    try{
        res.status(200).json(fetching)
        console.log("You got all notes")
    }
    catch(error){
        console.log("there is a problem while fetching the data")
    }

}

export async function updateNotesController(req,res){
    const id = req.params;
    const dataBody = req.body;
    const fetching = await updatesNotes(id.id,dataBody);

    try{
        res.status(200).send("updated data successfully")
        console.log("data updated successfully")
    }
    catch(error){
        console.log("there is a problem while updating the data")
    }

}

export async function deletingNotesController(req,res){
    const id = req.params.id;
    const fetching = await deletingNotes(id);
    try{
        res.status(200).send("Note Deleted Successfully")
    }
    catch(err){
        console.log("There is a problem while deleting the data")
    }
}