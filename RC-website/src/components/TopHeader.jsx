import { MdLogin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiGoogletranslate } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const TopHeader = () => {
  const link_one = [
    {
      name: "NAAC",
    },
    {
      name: "NIRF",
    },

    {
      name: "IQAC",
    },

    {  
      name: "RC IGNOU Centre",
    },

    {
      name: "RC Virtual Tour",
    },

    { icon: <FaSearch />,
       name: "Research" },
  ];
  const link_two = [
    {
      icon: <MdLogin />,
      name: "Login",
    },
  ];

  const link_three = [
    {
      icon: <FaLinkedinIn />,
    },

    {
      icon: <FaXTwitter />,
    },

    {
      icon: <FaFacebookF />,
    },
    {
      icon: <IoLogoInstagram />,
    },
  ];

  const link_four = [
    {
      icon: <SiGoogletranslate />,
      name: "हिंदी",
    },

    {
      name:"/",
    },

    {
      name: "A+/A-",
    },
  ];

  return (
    <>
      <div className=" flex justify-around bg-[#463BAC] text-white font-bold h-[33px] w-screen font_Design list-none cursor-pointer ">
        <div className="flex justify-center items-center gap-5">
          {link_one.map((item, index) => {
            return (
              <li
                key={index}
                className="flex gap-1 justify-center items-center"
              >
                {item.icon}
                {item.name}
              </li>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-12">
          <div className="flex">
            {link_two.map((item, index) => {
              return (
                <li 
                key={index}
                className="flex gap-1 justify-center items-center text-[10px]">
                  
                    {item.icon}
                    {item.name}
                  
                </li>
              );
            })}
          </div>

          <div className="flex gap-2">
            {link_three.map((item, index) => {
              return (<li 
                key={index}
                className="flex  justify-center items-center text-[13px]"
                >{item.icon}
                </li>);
            })}
          </div>

          <div className="flex gap-1">
            {link_four.map((item, index) => {
              return (
                <li key={index}
                  className=" flex justify-center items-center gap-1 text-[12px]"
                >
                  
                    {item.icon}
                    {item.name}
                  
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
