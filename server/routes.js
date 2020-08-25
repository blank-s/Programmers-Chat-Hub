const express = require('express');
const { Router } = require('express');
const Routes = express.Router();

Routes.get('/', (req, res)=>{
    res.send("server is up and running");
});

module.exports = Routes;