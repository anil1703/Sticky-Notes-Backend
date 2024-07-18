import express from "express"
import { createNotesController ,getallNotesController,updateNotesController,deletingNotesController} from "./controller/index.js";
const router = express.Router();

router.post("/create_notes",createNotesController)

router.get("/notes",getallNotesController);

router.put("/updating_notes/:id",updateNotesController)

router.delete("/notes/:id",deletingNotesController);

export {router as routes};