import Section from "../layout/Section";
import newYear from "/src/assets/new-year-shape.png";

const Offer = () => {
  return (
    <Section>
      <h1 className="text-secondary font-inter font-black text-[88px] text-center">
        65% OFF
      </h1>
      <div className="flex flex-col justify-center items-center space-y-7">
        <div className="py-5">
          <p className="text-secondary font-inter font-medium text-[24px]">
            OUR HOLIDAY DEALS ARE BETTER
          </p>
          <p className="text-TextPrimary font-inter font-bold text-[48px]">
            ALL CATEGORIES
          </p>
        </div>
        <img src={newYear} alt="newYear" className="w-[802px] h-[500px]" />
      </div>
    </Section>
  );
};

export default Offer;
