const express = require('express');
const extRouter = express.Router();
const lawHelpers = require('./../../controllers/propublicaController');
const newHelpers = require('./../../controllers/googleController');

extRouter.get('/senators', lawHelpers.getSenate, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      senateInfo: res.data
    })
   })

   extRouter.get('/house', lawHelpers.getHouse, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      houseInfo: res.data
    })
   }) 
   
   extRouter.get('/senatecommittees', lawHelpers.getSenateCommittees, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      houseInfo: res.data
    })
   })  

   extRouter.get('/houescommittees', lawHelpers.getHouseCommittees, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      houseInfo: res.data
    })
   })  
   
   extRouter.get('/senators', newHelpers.getSenate, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      senateInfo: res.data
    })
   })

   extRouter.get('/house', newHelpers.getHouse, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      senateInfo: res.data
    })
   })