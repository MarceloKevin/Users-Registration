const express = require("express");
const getUser = require("./model/user");
const app = express();

app.use = express.json();


app.get("/", async(req,res) =>{
  const users = await getUser();
  res.status(200).json({users});
})





app.listen(3001,() => console.log("App rodando"));