const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

// GET
app.get("/hello", (req,res)=>{
    res.status(200).send("Hello, world!");
})

//POST
app.post("/user",(req,res)=>{
    const {name} = req.body;
    res.status(201).json({message:`user ${name} created!`});
})

//404
app.use((req,res)=>{
    res.status(404).json({error:"Route not found!"})
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log(`Server listening on http://localhost:${PORT}`));