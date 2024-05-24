import React, { useState } from "react";
import login from "../assets/login.avif";
// import Link from "react-router-dom"
// import Link from 'react-router-dom'
const Login = () => {
const [userName,setUserName] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(userName+" "+password)
}

  return (
    <div className="flex justify-center items-center gap-10 mt-7">
      <img className="w-1/3 h-auto" src={login} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-slate-700">Create an Account</h1>
        <form className="shadow-2xl flex flex-col justify-center mt-4 items-center border-2 rounded-lg w-96 gap-6 py-7">
          <div className="flex flex-col justify-start items-center gap-4">
            <p className='mr-[185px]'>Enter username</p>
            <input className='p-2 outline-none border-2 rounded-lg w-full' type="text" placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="mr-[185px]">Enter password</p>
            <input className='p-2 outline-none border-2 rounded-lg w-full' type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <select name="role" className="p-2 rounded-lg">
            <option value="">Select role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
          </select>
          <button className='shadow-lg hover:bg-blue-800 w-[315px] h-9 bg-blue-500 rounded-full text-white' onClick={handleSubmit}>Submit</button>
          <div className="">
            <p>Not registerd yet? </p>
            {/* <Link to="/register">Register</Link> */}
            {/* <Link to></Link> */}
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
