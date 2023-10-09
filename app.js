// const express = require('express');
// const mongoose = require('mongoose');

import express from 'express'
import mongoose from 'mongoose';
const app = express();


app.use((req, res, next) =>{
    res.status(200).json({
        message: 'It works!'
    });
});



//Connecting to DB
mongoose.connect('mongodb://localhost:27017/Algorythmics',
    { useNewUrlParser: true },
    function (){
        console.log('connected to database');
    } 
);


 module.exports = app;