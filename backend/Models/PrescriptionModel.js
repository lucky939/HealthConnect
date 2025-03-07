const mongoose = require('mongoose')

const PrescriptionSchema = mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patientName : {type:String},
    age: { type: Number },
    medicines: { type: [String], required: true },
    dosages: { type: [String], required: true },
    cause : {type:String},
    issuedOn : {type:String},
    specialInstructions: { type: String, required: true },
    prescriptionName : {type:String,default:"Your prescription"}
})

module.exports = mongoose.model("Prescription",PrescriptionSchema);