import React from "react";

import { FaPhoneVolume } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-152.25 bg-TextPrimary py-10">
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
        <div className="border-b-8 border-secondary border-t-8 border-secondary py-20">
          <h3 className="text-white">icons</h3>
        </div>
        <div className="text-white font-inter font-medium text-[24px] flex justify-around items-center">
          <h3>2027, All Rights Reserved.</h3>
          <h3>Unsubscribe</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
