// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome.ejs',{pageTitle: 'Add home page ', currentPage:'home-add'});
})

const registeredHomes=[];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(`Home registration sucessful for`,req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded.ejs',{pageTitle:'Home Added Successfully', currentPage:'home-added'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes= registeredHomes;