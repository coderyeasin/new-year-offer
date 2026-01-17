import { FaPhoneVolume } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import fb from "/icons/fb.png";
import insta from "/icons/insta.png";
import twt from "/icons/twt.png";
import linkdn from "/icons/linkdn.png";
const Footer = () => {
  return (
    <>
      <footer className="w-full h-152.25 bg-TextPrimary py-18 space-y-12">
        <div className="text-white flex justify-around items-center">
          <p className="font-inter font-medium text-[24px] leading-10">
            44, Big Building Roosevelt Street <br />
            Beach Gardens Florida 33410
          </p>
          <div className="font-inter font-medium text-[24px] leading-10">
            <p className="flex gap-5">
              <FaPhoneVolume />
              +00 123 584 124
            </p>
            <p className="flex gap-5">
              <TbWorldWww />
              www.website.com
            </p>
          </div>
        </div>
        <div className="border-b border-t border-slate-800 py-20 flex justify-center items-center gap-5 max-w-330 mx-auto">
          <img src={fb} alt="fb" className="w-16 h-16 cursor-pointer" />
          <img src={insta} alt="insta" className="w-16 h-16 cursor-pointer" />
          <img src={twt} alt="twt" className="w-16 h-16 cursor-pointer" />
          <img src={linkdn} alt="linkdn" className="w-16 h-16 cursor-pointer" />
        </div>
        <div className="text-white font-inter font-medium text-[24px] flex justify-between items-center max-w-330 mx-auto">
          <h3>2027, All Rights Reserved.</h3>
          <h3>Unsubscribe</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
