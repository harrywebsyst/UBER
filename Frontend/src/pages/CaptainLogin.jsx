import React, { useState } from 'react'
import { Link } from "react-router-dom";

const CaptainLogin = () => {
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [captainData, setCaptainData] = useState({});
      
      const handleSubmit = (e) => { 
          e.preventDefault();
         
          setCaptainData({
              email: email,
             password
          });
  
          setEmail("");
          setPassword("");
      }
  
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <img
          className="w-14 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email@example.com"
          className="w-full px-4 py-2 bg-[#eeeeee] mb-7 rounded border text-lg placeholder:text-base"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="password"
          className="w-full px-4 py-2 bg-[#eeeeee] mb-7 rounded border text-lg placeholder:text-base"
        />
        <button className="w-full px-4 py-2 bg-[#111111] text-[#fff] font-semibold mb-3 rounded text-lg placeholder:text-base">
          Login
        </button>

      </form>
        <p className="text-center">
         Join a fleet? <Link className="text-blue-400" to="/captain-signup">Register as a Captain</Link>
        </p>
    </div>

    <div>
      <Link to="/login" className="w-full px-4  inline-block text-center py-2 bg-[#d5622d] text-[#fff] font-semibold mb-5 rounded text-lg placeholder:text-base">
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin