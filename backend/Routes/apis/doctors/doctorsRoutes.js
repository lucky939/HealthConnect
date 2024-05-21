const express = require('express');
const { authentcateJWT, checkRole } = require('../../../Middleware/authMiddleware');
const {addDoctor,getProfile} = require('../../../Controllers/doctorController');
const router = express.Router();

router.post('/addDoc',authentcateJWT,checkRole('isAdmin'),addDoctor);
router.get('/profile',authentcateJWT,checkRole('isDoctor'),getProfile)

module.exports = router