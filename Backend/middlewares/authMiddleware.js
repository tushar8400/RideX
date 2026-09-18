const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BacklistTokenModel = require("../models/BacklistTokenModel");
const CaptainModel = require("../models/captainModel");
const userModel = require("../models/userModel");


module.exports.authUser = async (req , res, next ) => {
       const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
       
       if(!token) {
             return res.status(401).json({message : "Unauthorized"});
       }
      
       const isBacklisted =  await BacklistTokenModel.findOne({token : token});

       if(isBacklisted) {
            return res.status(401).json({message : 'UnauthorizedToken'});
       }

       try {
          const decoded = jwt.verify(token ,  process.env.JWT_SECRET);
          const user =  await userModel.findById(decoded._id);

          req.user = user;

          return next();

       } catch (error) {
            res.status(401).json({message : "Unauthorized access"});
       }
}

module.exports.authCaptain = async (req, res, next) => {
       const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
       
       if(!token) {
             return res.status(401).json({message : "Unauthorized"});
       }
      
       const isBacklisted =  await BacklistTokenModel.findOne({token : token});

       if(isBacklisted) {
            return res.status(401).json({message : 'UnauthorizedToken'});
       }

       try {
          const decoded = jwt.verify(token ,  process.env.JWT_SECRET);
          const captain =  await CaptainModel.findById(decoded._id);

          req.captain = captain;

          return next();

       } catch (error) {
            res.status(401).json({message : "Unauthorized access"});
       }
}