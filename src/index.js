const express = require("express");
const app = express();

app.use = express.json();
app.get("/", (req,res) =>{
    res.status(200).json({message: "qualquer coisa"})
})





app.listen(3001,() => console.log("App rodando"));