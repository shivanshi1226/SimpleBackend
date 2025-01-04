const express = require("express")
const env = require("dotenv").config()
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Hi I'm h1 tag</h1>")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port , ${process.env.PORT}`)
})