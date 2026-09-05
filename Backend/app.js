const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectToDB = require("./db/db.js");
const userRoute = require("./routes/userRoute.js");
const captainRoute = require("./routes/captainRoute.js");


connectToDB();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    res.send("App is working well");
});


app.use("/users", userRoute);
app.use("/captain", captainRoute);

// app.listen("/" , () => {
//     console.log(`app is listening on Port ${port}`);
// });

module.exports = app;