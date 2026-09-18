const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser, Login ,logoutUser ,getUserProfile } = require("../controllers/userController");
const { authUser } = require("../middlewares/authMiddleware");


// Validation rules for registration
const registerValidation = [
    body('email').isEmail().withMessage('Invalid Email Address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
];


const loginValidation = [
    body('email').isEmail().withMessage('Invalid Email Address'),
    body('password').notEmpty().withMessage('Password is required')
];


router.post("/register", registerValidation, registerUser);


router.post("/login", loginValidation, Login);
router.get('/logout', logoutUser )

router.get("/profile", authUser , getUserProfile)

module.exports = router;
