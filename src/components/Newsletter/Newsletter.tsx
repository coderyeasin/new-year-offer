import React from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";

const Newsletter = () => {
  return (
    <Container>
      <Section className="mt-20">
        <div className="bg-secondary/5 h-154 rounded-2xl py-20 flex flex-col justify-center items-center">
          <div className="text-center mx-auto space-y-7">
            <img
              src="/icons/email.png"
              alt="email"
              className="h-[150px] w-[150px] mx-auto"
            />
            <h3 className="font-merriweather font-black text-[48px]">
              Subscribe Newsletter
            </h3>
            <p className="font-inter text-[20xl] leading-8 text-TextPrimary/60">
              Dolor sit amet consectetur. Consequat eget consectetur maecenas
              sed molestie malesuada. <br /> Ipsum sed sodales risus ut
              pellentesque vel euismod.{" "}
            </p>
          </div>
          <div className="h-18 mt-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              className="border-0 bg-white outline-0  py-5 px-6 rounded-bl-full rounded-tl-full"
            />
            <button className="bg-secondary font-inter font-semibold text-[20px] text-white py-5 px-6 rounded-tr-full rounded-br-full">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Newsletter;
