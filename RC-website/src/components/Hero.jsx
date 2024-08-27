import React from "react";
import { IoHome } from "react-icons/io5";
import TypingEffect from "./TypingEffect"

function Hero() {
  return (

        

    <React.Fragment>
      <div>
        <div className="w-full h-auto flex justify-center items-center hero absolute ">
          <img
            className="h-auto w-[100vw] object-cover"
            src="Hero_images/bg2.jpg"
            alt="bigImage"
          />
        </div>

        <div className="absolute flex">
          <div className="relative left-44 top-7 ">
            <img
              className="h-[100px] w-[100px]"
              src="Hero_images/logo.png "
              alt="logo"
            />
          </div>
          <div className="relative left-44 top-7 flex justify-center items-center text-[1.8rem] pl-[15px] font-bold">
            <h1 className="text-[#fff] ramanujan_text">
              Ramanujan College,University of Delhi
            </h1>
          </div>
          <div className="relative left-[33rem]  justify-center items-center top-16 text-[#fff] text-center font-bold">
            <div>
              G-18B, CR Park Main Rd, Near Deshbandhu College, University
            </div>
            <div>of Delhi, Block H, Kalkaji, New Delhi, Delhi 110019</div>
          </div>
          <div className=" pl-[570px] h-[20px] ">
            <img className="mt-12 h-[85px]" src="public/location.png" alt="" />
          </div>
        </div>
        <nav className="absolute text-[#fff]">
            <div className="relative left flex top-44 gap-20 text-[1.3rem] list-none pl-[215px] nav-1">
                <li><IoHome /></li>
                <li>About</li>
                <li>Academics</li>
                <li>Admission</li>
                <li>Faculty</li>
                <li>Placement</li>
                <li>Other-Activities</li>
                <li></li>
            </div>
        </nav>

       
      
<div className="flex items-center justify-center h-[740px] ">

  <div className="text-[#fff] text-center">
    
    <div className="text-[2.5rem] font-bold">
      <TypingEffect />
    </div>

    <div className="btn-pink mx-auto py-2 px-4 rounded cursor-pointer mt-4">
      KNOW MORE
    </div>
    
  </div>

</div>


      </div>
    </React.Fragment>
  );
}

export default Hero;
