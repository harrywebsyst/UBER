import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate()

  const {captain, setCaptain} = React.useContext(CaptainDataContext)
   

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName:{
        firstName:firstName,
        lastName:lastName, 
      },
      email:email,
      password:password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    if (response.status === 201) {
      const data = response.data
      setCaptain(data);
      localStorage.setItem('token', data.token)
      navigate('/captain-home');
    }
    
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  }

  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>
        <form action="" onSubmit={(e) => submitHandler(e)}>
        <img
          className="w-14 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
          <h3 className="text-lg font-medium mb-2">What's our Captain Name</h3>
         <div className="flex gap-4 mb-6">
         <input
            type="text"
            required
            placeholder="first name"
            className="px-4 w-1/2 py-2 bg-[#eeeeee]  rounded border text-lg placeholder:text-base"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="last name"
            className="px-4 w-1/2 py-2 bg-[#eeeeee]  rounded border text-lg placeholder:text-base"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
          />
         </div>


          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="w-full px-4 py-2 bg-[#eeeeee] mb-6 rounded border text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="w-full px-4 py-2 bg-[#eeeeee] mb-6 rounded border text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

    <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        required
        placeholder="Vehicle Color"
        className="px-4 w-1/2 py-2 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
        value={vehicleColor}
        onChange={(e) => setVehicleColor(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="Vehicle Plate"
        className="px-4 w-1/2 py-2 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
        value={vehiclePlate}
        onChange={(e) => setVehiclePlate(e.target.value)}
      />
    </div>

    <div className="flex gap-4 mb-6">
      <input
        type="number"
        required
        placeholder="Vehicle Capacity"
        className="px-4 w-1/2 py-2 bg-[#eeeeee] rounded border text-lg placeholder:text-base"
        value={vehicleCapacity}
        onChange={(e) => setVehicleCapacity(e.target.value)}
      />
      <select
        required
        className="px-4 w-1/2 py-2 bg-[#eeeeee] rounded border text-lg"
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="car" selected>Car</option>
        <option value="auto">Auto</option>
        <option value="moto">Moto</option>
      </select>
    </div>

          <button className="w-full px-4 py-2 bg-[#111111] text-[#fff] font-semibold mb-3 rounded text-lg placeholder:text-sm">
            Create a Captain Account 
          </button>

        </form>
          <p className="text-center">
           Already have a account? <Link className="text-blue-400" to="/captain-login">Login here</Link>
          </p>
      </div>

      <div>
      <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.</p>   
         </div>
    </div>
  );
};

export default CaptainSignup;
