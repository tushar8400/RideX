const mapService = require("../Services/mapService");
const {validationResult} = require('express-validator');

const getCoordinate = async(req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
          return res.status(400).json({errors : error.array() })
    }

    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    }catch(error){
        res.status(404).json({message: 'Coordinates not found '});
    }
}

const getDistanceTime = async(req, res , next) => {
   
    try{
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors: error.array() });
         }

         const {origin , destination } = req.query;
         
         const distanceTime = await mapService.getDistanceTime(origin , destination);

         res.status(200).json(distanceTime);

    }catch(err){
        console.error(err);
        res.status(500).json({message : "Interval server error"});
    }
}

const getAutoCompleteSuggestions = async(req, res , next) => {

    try{
        const errors = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    }catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Interval server error '});
    }
}

module.exports = {getCoordinate , getDistanceTime, getAutoCompleteSuggestions};