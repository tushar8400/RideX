const mongoose = require("mongoose");
const { Socket } = require("socket.io");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CaptainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active ', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be 3 character long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [6, "Number must be 6 number long "]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Atleast 1 capacity should Be.']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['auto', 'bike', 'car', '7seater'],
        }
    },
    location : {
        lat : {
           type: Number,
        },
        long: {
            type: Number,
        }
    }
});

CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , {expiresIn : '24h'});
    return token;
}

CaptainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const CaptainModel = new mongoose.model("CaptainModel", CaptainSchema);
module.exports = CaptainModel;