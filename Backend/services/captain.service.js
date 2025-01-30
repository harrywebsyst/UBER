const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstName, lastName, email, password,
    color, capacity, vehicleType, plate
}) => {
    if (!firstName || !email || !password || !color || !capacity || !vehicleType || !plate) {
        throw new Error('All fields are required');
    } 
    const captain = captainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return captain;
}