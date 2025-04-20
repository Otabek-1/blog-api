const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to blog API!");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));