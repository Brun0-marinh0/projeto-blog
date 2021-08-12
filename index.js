const express = require("express");
const app = express();

//view engine
app.set('view engine','ejs');

app.get("/",(req, res) =>{
    res.send("oi");
})

app.listen(8000,()=>{
    console.log("oservidor está rodando!");
})