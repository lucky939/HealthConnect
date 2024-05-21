const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');
const DoctorModel = require('../Models/DoctorModel');

const addDoctor = async (req,res) => {
    try {    
        const {userName,password,email,specialization,costPerVisit} = await req.body
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new UserModel({
            userName,
            password:hashPassword,
            email,
            roles:{
                isDoctor:true
            }
        })
        await newUser.save();
        const newDoc = new DoctorModel({
            userId:newUser._id,
            specialization,
            costPerVisit
        })
        await newDoc.save();
        return res.status(200).json({"message":"Added Doctor succesfully"})
    } catch (error) {
        return res.status(400).json({error})
    }

}

const getProfile = async (req,res) => {
    try {
        // console.log(req.user._id);
        const getDoc = await DoctorModel.findOne({userId:req.user._id})
        // console.log(getDoc);
        if(!getDoc){
            return res.status(400).json({"message":"Doctor Not found"})
        }
        return res.status(200).json({getDoc})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = {addDoctor,getProfile};