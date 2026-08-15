
// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const homesController=require('../controllers/storeController.js');


storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getbookings);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/favourite-list", homesController.getFavouriteList);

module.exports = storeRouter;