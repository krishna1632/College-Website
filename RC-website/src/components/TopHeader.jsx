import { MdLogin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiGoogletranslate } from "react-icons/si";

const TopHeader = () => {
  const link_left = [
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
  const link_right = [
    {
      icon: <MdLogin />,
      name: "Login",
    },
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
      icon: <SiGoogletranslate />,
      name: "हिंदी",
    },

    {
      name: "A+ /",
    },

    {
      name: "A-",
    },
  ];
  return (
    <header>
      <div className="flex  items-center gap-5 bg-[#463BAC] text-white h-[33px] fontDesign list-none">
        {link_left.map((item,index)=>{
          return <li key={index} className="curser-pointer">
            {item.name}
          </li>
        })}
        <div className="flex ml-[700px] p">
        {link_right.map((item,index)=>{
          return <li key={index} className="curser-pointer">
            {item.icon}
            {item.name}
          </li>
        })}
        </div>
        
      </div>
    </header>
  );
};

export default TopHeader;
