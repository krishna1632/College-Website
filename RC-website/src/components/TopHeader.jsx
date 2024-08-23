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
      <div className="flex items-center gap-5 bg-[#463BAC] text-white font-bold h-[33px] w-auto fontDesign list-none">
        <div className="flex items-center gap-7 ml-[90px] cursor-pointer">
          {link_one.map((item, index) => {
            return <li key={index}>
              {item.name}
            </li>
          })}
        </div>

        <div className="flex items-center gap-5 ml-[700px] cursor-pointer">
          {link_two.map((item, index) => {
            return <li key={index}>
              <span className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </span>
            </li>
          })}
        </div>

        <div className="flex items-center gap-3 ml-[20px] cursor-pointer">
          {link_three.map((item, index) => {
            return <li key={index}>
              {item.icon}
            </li>
          })}
        </div>

        <div className="flex items-center gap-3 ml-[50px] cursor-pointer">
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


{/* <div className="flex gap-6">
          <div className="flex justify-center items-center gap-5 ml-[50px]">
            {link_two.map((item, index) => {
              return <li key={index} className="curser-pointer">
                {item.icon}
                {item.name}
              </li>
            })}
          </div>

          <div className="flex justify-center items-center gap-5 mr-[50px]">
            {link_three.map((item, index) => {
              return <li key={index} className="curser-pointer">
                {item.icon}
              </li>
            })}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 ml-[200px]">
          {link_four.map((item, index) => {
            return <li key={index} className="curser-pointer">
              {item.icon}
              {item.name}
            </li>
          })}
        </div> */}
