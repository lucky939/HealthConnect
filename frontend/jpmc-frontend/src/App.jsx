import './App.css'
import { Routes, Route  } from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Home from './Components/Home'
import Signup from './Pages/Signup';
import HomePage from './Pages/HomePage';
// import Signup from './Pages/Signup';
function App() {
  
  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <hr className='bg-slate-400 h-[1px]'/>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<HomePage />} />
      </Routes>
    </>
  ) 
}

export default App
