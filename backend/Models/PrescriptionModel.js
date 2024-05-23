const mongoose = require('mongoose')

const PrescriptionSchema = mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    medicine: { type: String, required: true },
    dosage: { type: String, required: true }
})

module.exports = mongoose.model("Prescription",PrescriptionSchema);