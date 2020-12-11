const express = require('express');
const application = express();
const cors = require('cors');
const mongo = require('mongoose');
const {PetsModel} = require('./schema/pets');

const conn = mongo.connect("mongodb://localhost:27017/rest_tutorial",{useNewUrlParser:true,useUnifiedTopology:true});

application.use(cors());

application.get("/",(req,res)=>{
    res.send("Hello Users!!!");
})

application.get("/home",(req,res)=>{
    PetsModel.find((err,docs)=>{
        if(err) res.send({status:err});
        else res.send({status:"success",pets:docs});
    })
})

application.listen(8081,()=>{
    console.log("Server is up.");
})