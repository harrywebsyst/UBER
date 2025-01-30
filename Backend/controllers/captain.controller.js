const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')  
const {validationResult} = require('express-validator')

module.exports.createCaptain = async (req, res, next) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullName, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message: 'User already exist'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
        plate: vehicle.plate
    })

    const token = captain.generateAuthToken();
    res.status(201).json({token, captain});

}