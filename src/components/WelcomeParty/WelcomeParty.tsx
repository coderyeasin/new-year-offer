import Container from "../layout/Container";
import Section from "../layout/Section";
import newYear from "/src/assets/new-year-shape2.png";
const WelcomeParty = () => {
  return (
    <Container>
      <Section>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center w-full min-h-[220px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/src/assets/party.png')] bg-cover bg-center rounded-2xl px-4 py-6 text-center md:text-left">
          <div className="text-white space-y-3 sm:space-y-5 md:space-y-7 flex-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-black font-merriweather leading-tight">
              Welcome to <br className="hidden sm:block" /> midnight party
            </h1>
            <p className="font-inter text-white/80 text-base sm:text-lg md:text-xl lg:text-[18px] leading-6 md:leading-7.5">
              Dolor sit amet consectetur. Consequat eget consectetur maecenas
              sed molestie <br className="hidden md:block" /> malesuada. Ipsum
              sed sodales risus ut pellentesque vel euismod.
            </p>
            <h3 className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px]">
              Join Now
            </h3>
          </div>
          <img
            src={newYear}
            alt="newYear"
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-88 lg:h-90 object-contain mx-auto"
          />
        </div>
      </Section>
      <Section>
        <div className="w-full rounded-2xl flex flex-col justify-center items-center bg-gradient-to-t from-white to-secondary/15 py-6 sm:py-10 md:py-14 px-4 mt-6">
          <p className="text-TextPrimary font-inter font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[32px] leading-8 md:leading-14 text-center">
            <span className="text-secondary">Place:</span> New Park Hotel
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[32px] leading-8 md:leading-14 text-center">
            <span className="text-secondary">Date:</span> 31 December Night 2026
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[32px] leading-8 md:leading-14 text-center">
            <span className="text-secondary">Time:</span> Evening 7.30 pm to
            12.30 am
          </p>
          <button className="bg-secondary mt-6 sm:mt-10 text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-inter font-bold rounded-2xl w-full sm:w-48 md:w-56 lg:w-41.75 h-12 sm:h-14 px-4 py-3">
            Join Now
          </button>
        </div>
      </Section>
    </Container>
  );
};

export default WelcomeParty;
