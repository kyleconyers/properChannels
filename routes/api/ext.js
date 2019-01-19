const express = require('express');
const extRouter = express.Router();
const lawHelpers = require('./../../controllers/propublicaController');

extRouter.get('/senators', lawHelpers.getSenate, (req, res, next) => {
    console.log('sending');
    res.send({
      message: 'ok',
      senateInfo: res.data
    })
   })