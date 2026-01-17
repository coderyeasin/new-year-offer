import Section from "../layout/Section";

const Banner = () => {
  return (
    <Section>
      <div className="w-full h-150 text-white leading-[96px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/src/assets/banner.png')] rounded-2xl flex flex-col justify-center items-center">
        <h3 className="font-merriweather text-[32px]">Happy New Year</h3>
        <h1 className="font-merriweather font-black text-[72px] text-center">
          New Year Party <br /> Celebration
        </h1>
      </div>
    </Section>
  );
};

export default Banner;
