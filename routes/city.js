const sequelize = require('Sequelize');
const cityRouter = require('express').Router();
const db = require("../db/db");


cityRouter.get('/get',(req,res)=>{

    db.city.findAll({

    }).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

module.exports = cityRouter