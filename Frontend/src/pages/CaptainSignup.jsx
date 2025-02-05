import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});
   

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullName:{
        firstName:firstName,
        lastName:lastName, 
      },
      email:email,
      password:password
    })

    console.log(userData);
    
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <button className="w-full px-4 py-2 bg-[#111111] text-[#fff] font-semibold mb-3 rounded text-lg placeholder:text-sm">
            Login
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
