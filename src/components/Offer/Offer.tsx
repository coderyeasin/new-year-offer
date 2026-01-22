import Section from "../layout/Section";
import newYear from "/src/assets/new-year-shape.png";

const Offer = () => {
  return (
    <Section>
      <h1 className="text-secondary font-inter font-black text-3xl sm:text-5xl md:text-7xl lg:text-[88px] text-center mb-4">
        65% OFF
      </h1>
      <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-7">
        <div className="py-2 sm:py-5">
          <p className="text-secondary font-inter font-medium text-base sm:text-lg md:text-2xl lg:text-[24px] text-center">
            OUR HOLIDAY DEALS ARE BETTER
          </p>
          <p className="text-TextPrimary font-inter font-bold text-xl sm:text-3xl md:text-5xl lg:text-[48px] text-center">
            ALL CATEGORIES
          </p>
        </div>
        <img
          src={newYear}
          alt="newYear"
          className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[802px] h-auto object-contain"
        />
      </div>
    </Section>
  );
};

export default Offer;
