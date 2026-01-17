import React from "react";
import firstBag from "/src/assets/products/bag.png";
import secondBag from "/src/assets/products/bag-two.png";
import redShoe from "/src/assets/products/red-shoe.png";
import whiteShoe from "/src/assets/products/white-shoe.png";
import googles from "/src/assets/products/googles.png";
import bangles from "/src/assets/products/bangles.png";
import Container from "../layout/Container";
import Section from "../layout/Section";
const ProductsPortfolio = () => {
  return (
    <Container>
      <Section>
        <div className="pt-30 pb-10">
          <h3 className="font-inter font-medium text-[24px] text-secondary">
            THE BEST GIFTS
          </h3>
          <h1 className="font-merriweather font-black text-[48px] text-TextPrimary">
            Our Awesome Portfolio
          </h1>
          <p className="font-inter text-[20px] text-TextPrimary/60">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. <br /> Ipsum sed sodales risus ut pellentesque
            vel euismod.
          </p>
        </div>
        <div className="flex flex-col gap-x-5 gap-y-5">
          <div className="flex gap-5">
            <img src={firstBag} alt="firstBag" className="w-106 h-112.5" />
            <img src={secondBag} alt="secondBag" className="w-106 h-112.5" />
            <img src={redShoe} alt="redShoe" className="w-106 h-112.5" />
          </div>
          <div className="flex gap-5">
            <img src={whiteShoe} alt="whiteShoe" className="w-106 h-112.5" />
            <img src={googles} alt="googles" className="w-106 h-112.5" />
            <img src={bangles} alt="bangles" className="w-106 h-112.5" />
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default ProductsPortfolio;
