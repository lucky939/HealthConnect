const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientId: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    doctorId: { 
        type: Schema.Types.ObjectId, 
        ref: "Doctor", 
        required: true 
    },
    startTime: { 
        type: Date, 
        required: true, 
    },
    endTime: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
