import Section from "../layout/Section";

const Banner = () => {
  return (
    <Section>
      <div className="w-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[600px] text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/src/assets/banner.png')] bg-cover bg-center rounded-2xl flex flex-col justify-center items-center text-center px-4">
        <h3 className="font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
          Happy New Year
        </h3>
        <h1 className="font-merriweather font-black text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
          New Year Party <br className="hidden sm:block" /> Celebration
        </h1>
      </div>
    </Section>
  );
};

export default Banner;
