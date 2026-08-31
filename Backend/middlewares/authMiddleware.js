const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


module.exports.authUser = async (req , res, next ) => {
       const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
       
       if(!token) {
             return res.status(401).json({message : "Unauthorized"});
       }
      
       const isBacklisted =  await userModel.findOne({token : token});

       if(isBacklisted) {
            return res.status(401).jsonf({message : 'UnauthorizedToken'});
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