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
      <div className="w-screen h-[600px] bg-[#F9F9F6] pt-10 pl-5 flex overflow-x-hidden justify-around">
        <div className="h-[505px] w-[700px] bg-[#F9F9F6] overflow-hidden">
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
                transform: `translateX(-${slide * (305 + 90)}px)`,
                width: `${totalDivs * (305 + 90) - 90}px`,
              }}
            >
              {Array.from({ length: totalDivs }).map((_, index) => (
                <div
                  key={index}
                  className={`h-[411px] w-[305px] border-b-[#463BAC] border-b-8 ${index > 0 ? 'ml-[90px]' : ''}`}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'limegreen' : 'lightcoral',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[505px] w-[600px] border-l-8 border-cyan-300 bg-white overflow-hidden pl-5">
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
    </>
  );
};

export default NewsEvents;
