import './App.css'
import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
function App() {
  
  return (
    <>
      <Navbar/>
      {/* <hr className='bg-slate-400 h-[1px]'/>
      <Home/> */}
      <Login/>
    </>
  ) 
}

export default App
