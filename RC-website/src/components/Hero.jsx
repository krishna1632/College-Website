import React from "react";
import { IoHome } from "react-icons/io5";
import TypingEffect from "./TypingEffect";
import { Parallax } from "react-parallax";
import ContentBox from "./ContentBox";




function Hero() {
  return (
    <React.Fragment>
     <div className="h-[900px] w-full">
     <Parallax
          
          bgImage="Hero_images/bg3.jpg"
          strength={280} // Adjust strength as needed
          className=" h-[750px] w-full object-cover bgimage"
          >
        <div className=" text-[#fff] ">
          <div className="flex justify-around	items-center mt-7">
            <div className="flex gap-6">
              <div>
                <img
                  className="h-auto w-[110px]"
                  src="Hero_images/logo.png"
                  alt="logo"
                />
              </div>
              <div className=" text-[1.8rem] font-bold flex items-center">
                <h1 className="ramanujan_text">
                  Ramanujan College, University of Delhi
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className=" text-[#fff] font-bold flex items-center flex-col h-auto">
                <div className=" ">
                  G-18B, CR Park Main Rd, Near Deshbandhu College, University
                </div>
                <div>of Delhi, Block H, Kalkaji, New Delhi, Delhi 110019</div>
              </div>

              <div className="">
                <img className=" h-[85px]" src="public/Hero_images/location.png" alt="" />
              </div>
            </div>
          </div>

          <nav className="flex justify-center  text-[#fff]">
            <ul className="flex gap-12 text-[1.3rem] list-none  mt-8 items-center">
              <li>
                <IoHome />
              </li>
              <li>About</li>
              <li>Academics</li>
              <li>Admission</li>
              <li>Faculty</li>
              <li>Placement</li>
              <li>Other-Activities</li>
              <li>
                <img src="public/Hero_images/search.png" alt="" className="h-[50px]" />
              </li>
            </ul>
          </nav>

          <div className="flex justify-center flex-col mt-36">
              <div className="text-[2.3rem] font-bold flex justify-center ">
                <TypingEffect />
              </div>

              <div className="btn-pink cursor-pointer mx-auto mt-4">
                KNOW MORE
              </div>
          </div>
           
          
        </div>

     
      </Parallax>
      <div className="flex justify-center container">

      <ContentBox></ContentBox>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;