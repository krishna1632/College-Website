import { MdLogin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiGoogletranslate } from "react-icons/si";

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

    {
      name: "Research",
    },
  ];
  const link_two = [
    {
      icon: <MdLogin />,
      name: "Log in",
    }
  ]

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
  ]

  const link_four = [
    {
      icon: <SiGoogletranslate />,
      name: "हिंदी",
    },

    {
      name: "A+/A-",
    },
  ];

  return (
    <>
      <div className="flex justify-around items-center gap-5 bg-[#463BAC] text-white font-bold h-[33px] w-screen font_Design list-none cursor-pointer">
        <div className="flex items-center gap-9"> 
          {link_one.map((item, index) => {
            return <li key={index}>
              {item.name}
            </li>
          })}
        </div>


        <div className="flex items-center">
          {link_two.map((item, index) => {
            return <li key={index}>
              <span className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </span>
            </li>
          })}
        </div>

        <div className="flex items-center gap-3">
          {link_three.map((item, index) => {
            return <li key={index}>
              {item.icon}
            </li>
          })}
        </div>

        <div className="flex items-center">
          {link_four.map((item, index) => {
            return <li key={index}>
              <span className="flex items-center gap-2">{item.icon}
                {item.name}</span>
            </li>
          })}
        </div>
      </div>

    </>
  );
};

export default TopHeader;


