const express = require('express')
const app = express()
const mongoose = require('mongoose')
port=3000
app.get((req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})