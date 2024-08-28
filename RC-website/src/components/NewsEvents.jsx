
import { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const totalDivs = 8;

const NewsEvents = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < totalDivs - 2) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <>
      <div className="w-screen bg-[#F9F9F6]">
        <div className="h-[557px] w-[1170px] py-5 mx-[160px] flex overflow-x-hidden">
          <div className="w-[665px] h-[510px] px-2">
            <div className="h-[510px] w-[650px] overflow-hidden">
              <h2 className="flex items-center text-2xl">
                <span className="pr-1">
                  LATEST <span className="text-[#251b85]">NEWS</span>
                </span>
                <FaRegNewspaper className="ml-2 text-5xl" />
                <button className="ml-3 bg-[#463BAC] text-white px-3 text-xl">
                  VIEW ALL
                </button>
              </h2>

              <div className="flex items-center">
                <img src="images/Belan_icon.png" alt="" className="h-2 mt-2" />
                <div
                  className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full ml-[500px] mr-2"
                >
                  <FaArrowLeft onClick={prevSlide} />
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mr-2"
                >
                  <FaArrowRight onClick={nextSlide} />
                </div>
              </div>

              <div className="h-[411px] mt-5 transition-transform duration-500 overflow-hidden">
                <div
                  style={{
                    display: "flex",
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(-${slide * (325 + 12)}px)`,
                    width: `${totalDivs * (325 + 12) - 12}px`,
                  }}
                >
                  {Array.from({ length: totalDivs }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-[411px] w-[325px] border-b-[#463BAC] border-b-8 ${index > 0 ? 'ml-[12px]' : ''}`}
                      style={{
                        backgroundColor: index % 2 === 0 ? 'limegreen' : 'lightcoral',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[505px] h-[510px]  border-l-[#251b85] border-l-4 border-dotted ml-2">
            <div className="h-[510px] w-[489px] overflow-hidden ml-4">
              <h2 className="flex items-center text-2xl mt-1">
                <span className="pr-1">
                  UPCOMING <span className="text-[#251b85]">EVENTS</span>
                </span>
                <FaRegCalendarAlt className="ml-2 text-4xl" />
                <button className="ml-3 bg-[#463BAC] text-white px-3 text-xl">
                  VIEW ALL
                </button>
              </h2>

              <div>
                <img src="images/Belan_icon.png" alt="" className="h-2 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEvents;
