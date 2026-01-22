import { FaPhoneVolume } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import fb from "/icons/fb.png";
import insta from "/icons/insta.png";
import twt from "/icons/twt.png";
import linkdn from "/icons/linkdn.png";
const Footer = () => {
  return (
    <>
      <footer className="w-full bg-TextPrimary py-10 sm:py-14 md:py-18 space-y-8 sm:space-y-10 md:space-y-12">
        <div className="text-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-5xl mx-auto px-4">
          <p className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[24px] leading-7 md:leading-10 text-center md:text-left">
            44, Big Building Roosevelt Street <br />
            Beach Gardens Florida 33410
          </p>
          <div className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[24px] leading-7 md:leading-10 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneVolume />
              +00 123 584 124
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 mt-2">
              <TbWorldWww className="mt-1" />
              www.website.com
            </p>
          </div>
        </div>
        <div className="border-b border-t border-slate-800 py-8 sm:py-12 md:py-20 flex justify-center items-center gap-4 sm:gap-5 max-w-3xl mx-auto">
          <img
            src={fb}
            alt="fb"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 cursor-pointer"
          />
          <img
            src={insta}
            alt="insta"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 cursor-pointer"
          />
          <img
            src={twt}
            alt="twt"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 cursor-pointer"
          />
          <img
            src={linkdn}
            alt="linkdn"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 cursor-pointer"
          />
        </div>
        <div className="text-white font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[24px] flex flex-col sm:flex-row justify-between items-center max-w-3xl mx-auto px-4 gap-2 sm:gap-0">
          <h3>2027, All Rights Reserved.</h3>
          <h3>Unsubscribe</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
