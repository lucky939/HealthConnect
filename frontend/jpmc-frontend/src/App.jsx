import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Loading from "./Components/Loading";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import NotificationAdmin from "./Components/NotificationAdmin";
import PatientCard from "./Components/PatientCard";
function App() {
  return (
    <>
      <Navbar />
      <hr className="bg-slate-400 h-[1px]" />
      {/* <Home/> */}
      {/* <Login/>
      {/* <Loading/> */}
      {/* <AboutUs/>
      
      <ContactUs/>
      <Footer/> */}
      {/* <Card/> */}
      {/* <NotificationAdmin/> */}
      <PatientCard />
    </>
  );
}

export default App;
