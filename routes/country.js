const sequelize = require('Sequelize');
/**
 * With the help of `express`, we create a country router (basically a place to have select, update, insert, delete)
 */
const countryRouter = require('express').Router();
const db = require("../db/db");


countryRouter.get('/get',(req,res)=>{

    db.country.findAll({

    }).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

countryRouter.post('/insert',(req,res)=>{
    let requestObject = req.body
    db.country.create(
        requestObject
    ).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

countryRouter.put('/update/:Name',(req,res)=>{
    let requestObject = req.body
    db.country.update(
        requestObject, {where: {"Name": req.params.Name}}
    ).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})

countryRouter.post('/delete/:Code',(req,res)=>{
   
    db.country.destroy(
        {where: {"Code": req.params.Code}}
    ).then(records=>{
        res.json(records)
    }).catch(()=>{
        res.json({"statusCode":-1})
    })
})


// TODO
module.exports = countryRouter