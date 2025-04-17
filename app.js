const dotenv = require('dotenv');
// dotenv.config(); // when running the app via "npm start" 
dotenv.config({path : './Health-Hub/.env'}); // when running with simple "run command"
// console.log(dotenv);

const path = require('path');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();

const sequelize = require ('./util/database');

const cors = require("cors");
const Patient = require ('./models/patient');
const Doctor = require('./models/doctor');
const Appointment = require('./models/appointment');
const ForgetPassword = require('./models/forget');

const userRoutes = require('./routes/users');
const appointmentRoutes = require('./routes/appointment');
const forgetRoutes = require('./routes/forget');

app.use(express.json());
app.use(cors());

Doctor.hasMany(ForgetPassword);
ForgetPassword.belongsTo(Doctor);

Patient.hasMany(ForgetPassword);
ForgetPassword.belongsTo(Patient);

Doctor.hasMany(Appointment);
Appointment.belongsTo(Doctor);

Patient.hasMany(Appointment);
Appointment.belongsTo(Patient);

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags : 'a'});

app.use(morgan('combined', {stream : accessLogStream}));

app.use('/user', userRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/password', forgetRoutes);

const port = process.env.PORT;

// {force : true}

sequelize
.sync()
.then(() => {
    console.log(`server is working on http://localhost:${port}`);
    app.listen(port);
}).catch((err) => {
    console.log(err)
});



