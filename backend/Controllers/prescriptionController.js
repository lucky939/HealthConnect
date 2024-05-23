// //http:localhost:3000/doctor/addPrescription/{id}

// const PrescriptionModel = require("../Models/PrescriptionModel");

// const addPrescription = async(req,res) => {
//     try {
//         const {patientId} = await req.params.id;
//         console.log(patientId);
//         const {doctorId} = await req.user._id;
//         console.log(doctorId);
//         const {medicine,dosage} = await req.body;
//         const prescription = await new PrescriptionModel({
//             patientId,
//             doctorId,
//             medicine,
//             dosage
//         })
//         await prescription.save();
//         return res.status(200).json({"message":"Prescription is Added"});       
//     } catch (error) {
//         return res.status(500).json(error);
//     }    
// }

// //http:localhost/patient/getPrescriptions
// const getPrescription = async(req,res) => {
//     try {
//         const {userId} = await req.user._id;
//         const getPres = await PrescriptionModel.find({userId});
//         if(!getPres){
//             res.status(403).json("No prescriptions Found")
//         }
//         return res.status(200).json(getPres);
        
//     } catch (error) {
//         return res.status(500).json({error});
//     }

// }

// module.exports = {addPrescription,getPrescription}


const PrescriptionModel = require("../Models/PrescriptionModel");

const addPrescription = async (req, res) => {
    try {
        const patientId = req.params.id; // Access req.params directly
        console.log(patientId);
        const doctorId = req.user._id; // Access req.user directly
        console.log(doctorId);
        const { medicine, dosage } = req.body; // Destructure req.body
        const prescription = new PrescriptionModel({
            patientId,
            doctorId,
            medicine,
            dosage
        });
        await prescription.save();
        return res.status(200).json({ "message": "Prescription is Added" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getPrescription = async (req, res) => {
    try {
        const patientId = req.user._id; // Access req.user directly
        const getPres = await PrescriptionModel.find({ patientId });
        if (!getPres.length) { // Check if there are no prescriptions
            return res.status(403).json("No prescriptions Found");
        }
        return res.status(200).json(getPres);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

module.exports = { addPrescription, getPrescription };

