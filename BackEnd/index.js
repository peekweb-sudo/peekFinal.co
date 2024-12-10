import express from "express"
import { signUp } from "./controller/user.controller.js";
const app = express()
const port = 3000;


app.use("/signup", signUp)
app.get("/",(req, res)=>{
res.send("hellow woorld")
})
app.listen(port,()=>{
    console.log(`shit is running http://localhost:${port}`);
    
})
