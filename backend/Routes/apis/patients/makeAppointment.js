const express = require('express');
const {bookAppointment,upDateAppointment} = require('../../../Controllers/appointmentController');
const { authentcateJWT, checkRole } = require('../../../Middleware/authMiddleware');
const { getPrescription } = require('../../../Controllers/prescriptionController');

const router = express.Router();
router.post('/bookAppointment',authentcateJWT,checkRole('isPatient'),bookAppointment);
router.post('/updateAppointment',authentcateJWT,checkRole('isAdmin'),upDateAppointment);
router.get('/getPrescription',authentcateJWT,checkRole('isPatient'),getPrescription)

module.exports = router