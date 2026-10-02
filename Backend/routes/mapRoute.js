const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {getCoordinate , getDistanceTime , getAutoCompleteSuggestions } = require("../controllers/mapsController");
const {query} = require('express-validator');

router.get('/getCoordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser, getCoordinate ,async (req, res) => {
});


router.get('/getCoordinates',
    query('address').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({min: 3}),
    authMiddleware.authUser,  getDistanceTime);


router.get('/getSuggestion', query('input').isString().isLength({ min: 3}),
    query('destination').isString().isLength({ min: 3}),
    authMiddleware.authUser , getAutoCompleteSuggestions
);
    

module.exports = router;