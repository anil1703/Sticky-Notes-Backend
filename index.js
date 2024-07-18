import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { routes } from "./router.js";

const app = express();
app.use(express.json())
app.use(cors());
const databaseUrl = "mongodb+srv://anilcherry1714:Mongo123@cluster0.juxytxs.mongodb.net/Sample"
mongoose.connect(databaseUrl)

const database = mongoose.connection;

database.on("error", () => {
    console.log("not connected")

})

app.use(routes)

database.once("connected",()=>{
    console.log("Database Connected")
})

app.listen(3000,() => {
    console.log("Server is running on port 3000")
})

