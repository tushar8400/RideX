const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptain, loginCaptain , getCaptainProfile , logoutCaptain } = require("../controllers/captainController");
const authMiddleware = require("../middlewares/authMiddleware");


const registerCaptainValidation =  [
    body('email').isEmail().withMessage('Invalid Email Address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Color must be 3 character long"),
    body('vehicle.plate').isLength({ min: 6 }).withMessage(" Number must be 6 number long "),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage("Atleast 1 Capacity should be."),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto' , '7seater']),
]

const loginCaptainValidation = [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min : 6}).withMessage("Password  must be at least 6 character")
];

router.post("/register", registerCaptainValidation , registerCaptain );
router.post("/login", loginCaptainValidation, loginCaptain);
router.get("/logout", logoutCaptain );

router.get("/profile", authMiddleware.authCaptain, getCaptainProfile);


module.exports = router;