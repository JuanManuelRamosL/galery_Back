const { Router } = require("express");
const getFav = require("../controlers/getUser");
const addFavorites = require("../controlers/addFav");
const getName = require("../controlers/getName");
const deleteFav = require("../controlers/deleteFav");
const deleteAll = require("../controlers/deleteAll");


const router = Router();

router.post('/favs', getFav); //http://localhost:2233/favs
router.post('/addFavs/:userN', addFavorites); //http://localhost:2233/addFavs/4
router.post('/name/:user', getName);
router.post('/delete', deleteFav);
router.post('/deleteAll', deleteAll);
module.exports = router;
