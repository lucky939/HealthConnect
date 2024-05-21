const express = require('express');
const connectToDb = require('./Config/connectToDb');
const cors = require('cors');
const authRoutes = require("./Routes/apis/authRoutes")
const doctorRoutes = require("./Routes/apis/doctors/doctorsRoutes")

const app = express();

require('dotenv').config()

connectToDb();

//Middlewares 
app.use(express.json())
app.use(cors());

//authenticationRoutes
app.use("/",authRoutes);

//doctorRoutes
app.use("/",doctorRoutes)

module.exports = app;