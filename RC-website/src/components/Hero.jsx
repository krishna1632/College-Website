import React from "react";
import { LuMapPin } from "react-icons/lu";

function Hero() {
  return <React.Fragment>

        <div>
            <div className="w-full h-[679px] flex justify-center items-center hero absolute ">
                <img className="h-[679px] w-[100vw] object-cover"src="Hero_images/download1.jpg" alt="bigImage" />
            </div>

            <div className="absolute flex">
                <div className="relative left-44 top-7 ">
                    <img className="h-[100px] w-[100px]" src="Hero_images/logo.png " alt="logo" />
                </div>
                <div className="relative left-44 top-7 flex justify-center items-center text-[1.8rem] pl-[15px] font-bold">
                    <h1 className="text-[#fff] ramanujan_text">Ramanujan College,University of Delhi</h1>
                </div>
                <div className="relative left-[33rem]  justify-center items-center top-16 text-[#fff] text-center font-bold">
                    <div>
                    G-18B, CR Park Main Rd, Near Deshbandhu College, University 
                    </div>
                    <div>
                    of Delhi, Block H, Kalkaji, New Delhi, Delhi 110019
                    </div>
                </div>
                <div>
                <LuMapPin />
                </div>
            </div>
        </div>

        </React.Fragment>;
}

export default Hero;
