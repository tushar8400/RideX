const { validationResult } = require('express-validator');
const userModel = require('../models/userModel');
const userService = require('../Services/userService');
const backlistToken = require('../models/BacklistTokenModel');

const registerUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    const { fullName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword
    });


    const token = user.generateAuthToken();

    res.status(201).json({ token, user });

}

const Login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "Invalid Email or Password " });
    }


    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password " });
    }

    const token = user.generateAuthToken();
  
    res.cookie("token", token);
    
    res.status(200).json({token , user}); 

}

const getUserProfile = async(req , res) => {
     
     res.status(200).json(req.user);
}

const logoutUser = async(req, res) => {
     res.clearCookie('token');

     const token = req.cookies.token  ||  req.headers.authorization.split(' ')[ 1 ];

     await blacklistToken.create({ token });

     res.status(200).json({message : 'Logged out '});
}

// CHANGE THIS AT THE BOTTOM OF YOUR CONTROLLER FILE:
module.exports = { registerUser, Login , getUserProfile };

