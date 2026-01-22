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
        <div className="pt-10 sm:pt-20 pb-6 sm:pb-10">
          <h3 className="font-inter font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-secondary mb-2">
            THE BEST GIFTS
          </h3>
          <h1 className="font-merriweather font-black text-xl sm:text-3xl md:text-4xl lg:text-[48px] text-TextPrimary mb-2">
            Our Awesome Portfolio
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] text-TextPrimary/60">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. <br className="hidden md:block" /> Ipsum sed
            sodales risus ut pellentesque vel euismod.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <img
            src={firstBag}
            alt="firstBag"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
          <img
            src={secondBag}
            alt="secondBag"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
          <img
            src={redShoe}
            alt="redShoe"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
          <img
            src={whiteShoe}
            alt="whiteShoe"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
          <img
            src={googles}
            alt="googles"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
          <img
            src={bangles}
            alt="bangles"
            className="w-full h-auto max-h-72 object-contain rounded-xl"
          />
        </div>
      </Section>
    </Container>
  );
};

export default ProductsPortfolio;
