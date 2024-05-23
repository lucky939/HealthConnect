const AppointmentModel = require("../Models/AppointmentModel");
const DoctorModel = require("../Models/DoctorModel");
const NotificationModel = require("../Models/NotificationModel");
const UserModel = require("../Models/UserModel");

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

        const patient = await UserModel.findById(patientId)
        const message = `Your are being appointed by the ${patient.userName} at ${startTime}`
        const newNotification = new NotificationModel({
            userId:patientId,
            doctorId:doctorId,
            message
        })

        await newNotification.save()

        return res.status(200).json({"message":"Appointment Requested Sucessfully"})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
 

//In front end we will provide the button to accept or reject the appointment and from that we will issue
//the status of the appointment and will be sent notifcation to the user

const upDateAppointment = async (req,res) => {
    try {
        const {appointMentId,status} = await req.body;
        const appointment = await AppointmentModel.findById(appointMentId);
        if(!appointment) return res.status(403).json({"message":"Appointment Not found"});
        appointment.status = status;
        await appointment.save();
        const patient  = await UserModel.findById(appointment.patientId)
        const message = `Your appointment with ${patient.userName} is ${status}`
        const newNotification = new NotificationModel({
            userId: appointment.patientId,
            message
        })
        await newNotification.save();
        return res.status(200).json({"message":"Appointment Updated Sucessfully"})       
    } catch (error) {
        return res.status(500).json({error})
    }

}

module.exports ={bookAppointment,upDateAppointment}


