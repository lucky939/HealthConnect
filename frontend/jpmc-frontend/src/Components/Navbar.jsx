import React from 'react'
import Logo from '../assets/react.svg'
import  { Ambulance} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='drop-shadow-lg flex justify-around items-center w-auto h-20 bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 text-slate-800'>
      
      <div className='flex justify-center items-center'>
        <Ambulance className='w-20 h-16 cursor-pointer'/>
        <h2 className='font-bold cursor-pointer'>HealthCare<br></br>Info</h2>
      </div>
      <ul className='flex justify-center items-center gap-10'>
        <li  className='hover:border-b-2 border-slate-600 cursor-pointer text-md'>Home</li>
        <li  className='hover:border-b-2 border-slate-600 cursor-pointer'>About us</li>
        <li  className='hover:border-b-2 border-slate-600 cursor-pointer'>Contact us</li>
        <li  className='hover:border-b-2 border-slate-600 cursor-pointer'>Find a doctor</li>
      </ul>
      <button className='shadow-lg hover:bg-blue-800 w-20 h-9 bg-blue-500 rounded-full text-white'>Login</button>
    </div>
  )
}

export default Navbar
