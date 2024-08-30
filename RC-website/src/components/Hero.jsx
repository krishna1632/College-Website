import React from "react";
import { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import TypingEffect from "./TypingEffect";
import { Parallax } from "react-parallax";
import ContentBox from "./ContentBox";

function Hero() {

  const [text, setText] = useState('RAMANUJAN COLLEGE,UNIVERSITY OF DELHI');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setText(prevText => prevText === 'RAMANUJAN COLLEGE,UNIVERSITY OF DELHI' ? 'रामानुजन कॉलेज, दिल्ली विश्वविद्यालय' : 'RAMANUJAN COLLEGE,UNIVERSITY OF DELHI');
        setShow(true);
      }, 500); // Duration of the fade-out animation
    }, 5000); // Interval for changing text

    return () => clearInterval(intervalId);
  }, []);
  return (
    <React.Fragment>
      <div className="w-screen big-container h-[100vh]  mb-[235px] ">
        <Parallax
          bgImage="Hero_images/bg3.jpg"
          strength={290} // Adjust strength as needed
          className=" h-[750px] w-full object-cover bgimage"
        >
          <div className=" text-[#fff]">
            <div className="flex justify-around	items-center mt-7">
              <div className="flex gap-6">
                <div>
                  <img
                    className="h-auto w-[100px] "
                    src="Hero_images/logo.png"
                    alt="logo"
                  />
                </div>
                <div className=" text-[26px] font-bold flex items-center ramanujan_text select-none w-[36rem]">
                  <h1 className={show ? 'fade-in' : 'fade-out'}>
                  {text}
                  </h1>
                </div>
              </div>

              <div className="flex items-center">
                <div className=" text-[#fff] font-bold flex items-center flex-col select-none text-[0.9rem]">
                  <div className=" ">
                    G-18B, CR Park Main Rd, Near Deshbandhu College, University
                  </div>
                  <div>of Delhi, Block H, Kalkaji, New Delhi, Delhi 110019</div>
                </div>

                <div className="">
                  <img
                    className=" h-[69px]"
                    src="public/Hero_images/location.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <nav className="flex justify-center  text-[#fff] navbar">
              <ul className="flex gap-12 text-[1.3rem] list-none  mt-8 items-center cursor-pointer">
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
                  <img
                    src="public/Hero_images/search.png"
                    alt=""
                    className="h-[50px]"
                  />
                </li>
              </ul>
            </nav>

            <div className="flex justify-center flex-col mt-32">
              <div className="text-[2rem] font-bold flex justify-center h-[50px] select-none">
                <TypingEffect />
              </div>

              <div className="btn-pink cursor-pointer mx-auto mt-4">
                KNOW MORE
              </div>
            </div>
          </div>
        </Parallax>
        <div className="container relative top-[-210px]">
          <ContentBox></ContentBox>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
