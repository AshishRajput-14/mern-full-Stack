import dotenv from'dotenv'
dotenv.config();

import express from 'express'

const app = express();

app.get("/",(req,res)=>{

    console.log("server is Running");
    res.json({message:"sever is running sucesfully"});
})

const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log("server Started at pott",port);

})

