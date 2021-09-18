const sequelize = require('Sequelize');
const statesRouter = require('express').Router();
const db = require("../db/db");


statesRouter.get('/get',(req,res)=>{

    db.states.findAll({

    }).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

statesRouter.get('/get/sql',(req,res)=>{

    db.sequelize.query(
        "select * from states", { type: sequelize.QueryTypes.SELECT}
    ).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

module.exports = statesRouter