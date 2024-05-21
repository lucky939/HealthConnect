const AppointmentModel = require("../Models/AppointmentModel");
const DoctorModel = require("../Models/DoctorModel");

const bookAppointment =async (req,res) => {
    try {
        const {doctorId,startTime} = await req.body;
        const patientId = req.user._id;
        const doctor = await DoctorModel.findById(doctorId);
        if(!doctor) return res.status(403).json({"message":"Doctor Not found"});
        const endTime = new Date(new Date(startTime).getTime()+60*60*1000);
        const conflictAppointment = await AppointmentModel.findOne({
            doctorId,
            startTime:{$lt:endTime},
            endTime:{$gt:startTime},
            status:'Approved'
        })
        if (conflictAppointment) {
            return res.status(400).json({ message: 'Time slot is already booked' });
        }
        const appointment = new AppointmentModel({
            patientId,
            doctorId,
            startTime,
            endTime
        })
        await appointment.save();
        return res.status(200).json({"message":"Appointment Requested Sucessfully"})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


