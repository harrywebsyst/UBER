import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContextData } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  
  const { user, setUser } = useContext(UserContextData);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    console.log(response, 'data');
    

    if (response.status === 200) {
      const data = response.data 
      setUser(data.user)  
      localStorage.setItem('token',  data.token)
      navigate('/home')
    }
    

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <img
            className="w-14 mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
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
          New here?{" "}
          <Link className="text-blue-400" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="w-full px-4  inline-block text-center py-2 bg-[#10b461] text-[#fff] font-semibold mb-5 rounded text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
