import React from "react";
import photo from "../assets/photo.avif";
import ex1 from "../assets/ex1.avif";
const Home = () => {
  return (
    <div className="flex justify-evenly items-center w-auto h-auto bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100">
      <div className="flex-col justify-center items-center mt-5">
        <h1 className="text-5xl text-slate-600 font-bold mt-5 leading-tight">
          We help patients<br></br>to live a longer<br></br>healthy life
        </h1>
        <p className="mt-7 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Voluptatem
          qui nesciunt a voluptatibus quis praesentium <br></br>fugiat, earum perferendis
          debitis libero est veniam quod sit officiis.
        </p>
        <button className="shadow-lg mt-7 hover:bg-blue-800 w-44 h-9 bg-blue-500 rounded-full text-white text-xs font-medium">
          Request an Appointment
        </button>
        <div className="mt-7 flex justify-center items-center gap-14">
          <div className="pb-8">
            <h1 className="text-4xl border-b-orange-300 border-b-4">30+</h1>
            <p className="mt-2">years of experience</p>
          </div>
          <div className="pb-8">
            <h1 className="text-4xl border-b-violet-300 border-b-4">15+</h1>
            <p className="mt-2">Clinic Location</p>
          </div>
          <div className="pb-8">
            <h1 className="text-4xl border-b-green-300 border-b-4">100%</h1>
            <p className="mt-2">parent satisfaction</p>
          </div>
        </div>
        
      </div>
      <div>
          <div className="">
            <img className="w-96 h-auto rounded-full shadow-2xl" src={ex1} />
          </div>
        </div>
    </div>
  );
};

export default Home;
