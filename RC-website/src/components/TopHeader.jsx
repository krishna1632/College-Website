import { MdLogin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiGoogletranslate } from "react-icons/si";

const TopHeader = () => {
  return (
    <header>
      <div className="flex justify-center items-center gap-5 bg-[#463BAC] text-white h-[33px] fontDesign">
        <div>NAAC</div>
        <div>NIRF</div>
        <div>IQAC</div>
        <div>RC IGNOU Centre</div>
        <div>RC Virtual Tour</div>
        <div className="pr-[720px]">Research</div>
        <div><MdLogin />Login</div>
        <div><FaLinkedinIn /></div>
        <div><FaXTwitter /></div>
        <div><FaFacebookF /></div>
        <div><SiGoogletranslate />हिंदी</div>
        <div>A-</div>/
        <div>A+</div>
      </div>
    </header>
  )
}

export default TopHeader;