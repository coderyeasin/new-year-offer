import Container from "../layout/Container";
import Section from "../layout/Section";

const Newsletter = () => {
  return (
    <Container>
      <Section className="mt-20">
        <div className="bg-secondary/5 rounded-2xl py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center w-full px-4">
          <div className="text-center mx-auto space-y-4 sm:space-y-7">
            <img
              src="/icons/email.png"
              alt="email"
              className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-[150px] lg:w-[150px] mx-auto"
            />
            <h3 className="font-merriweather font-black text-xl sm:text-3xl md:text-4xl lg:text-[48px]">
              Subscribe Newsletter
            </h3>
            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-[20px] leading-7 md:leading-8 text-TextPrimary/60">
              Dolor sit amet consectetur. Consequat eget consectetur maecenas
              sed molestie malesuada. <br className="hidden md:block" /> Ipsum
              sed sodales risus ut pellentesque vel euismod.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 mt-6 w-full max-w-xl">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              className="border-0 bg-white outline-0 py-3 sm:py-5 px-4 sm:px-6 lg:rounded-tl-full lg:rounded-bl-full w-full sm:w-auto flex-1 text-base md:text-lg"
            />
            <button className="bg-secondary font-inter font-semibold text-base md:text-lg lg:text-[20px] text-white py-3 sm:py-5 px-4 sm:px-6 lg:rounded-tr-full lg:rounded-br-full md:rounded-tr-full md:rounded-br-full sm:rounded-tr-full sm:rounded-br-full w-full sm:w-auto mt-2 sm:mt-0">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </Container>
  );
};

export default Newsletter;
