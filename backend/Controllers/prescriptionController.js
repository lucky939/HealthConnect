// //http:localhost:3000/doctor/addPrescription/{id}




const PrescriptionModel = require("../Models/PrescriptionModel");
const AppointmentModel = require('../models/AppointmentModel'); 
const UserModel = require('../models/UserModel');
const { generatePrescriptionPDF, sendPrescriptionEmail } = require('./prescriptiongen');

const addPrescription = async (req, res) => {
    try {
        const patientId = req.params.id; 
        console.log(patientId);
        const doctorId = req.user._id; 
        console.log(doctorId);



         const appointment = await AppointmentModel.findOne({ patientId });
         if (!appointment) {
         return res.status(404).json({ "error": "Appointment not found" });
         }

        const patient = await UserModel.findById(patientId);
        if (!patient) {
            return res.status(404).json({ "error": "Patient not found" });
        }
        const email = patient.email;

        console.log(email)


        const {patientName, age, cause, medicines, dosages, specialInstructions } = req.body; 
        const prescription = new PrescriptionModel({
            patientId,
            doctorId,
            patientName,
            age,
            medicines,
            dosages,
            cause,
            specialInstructions,
            issuedOn : new Date().toLocaleDateString()
        });
        await prescription.save();

        const pdfPath = await generatePrescriptionPDF(prescription);
        await sendPrescriptionEmail(email, pdfPath);


        return res.status(200).json({ "message": "Prescription is Added" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getPrescription = async (req, res) => {
    try {
        const patientId = req.user._id; // Access req.user directly
        const getPres = await PrescriptionModel.find({ patientId }).populate('doctorId','specialization');
        if (!getPres.length) { // Check if there are no prescriptions
            return res.status(403).json("No prescriptions Found");
        }
        return res.status(200).json(getPres);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getPrescriptionDetailsById = async (req, res) => {
    try {
        const id = req.params.id;
        const getPres = await PrescriptionModel.findById(id)
        if (!getPres) { 
            return res.status(403).json("No prescription found");
        }
        return res.status(200).json(getPres);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

module.exports = { addPrescription, getPrescription, getPrescriptionDetailsById };

