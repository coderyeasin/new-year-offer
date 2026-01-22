import Container from "../layout/Container";
import Section from "../layout/Section";
import celebrate from "/src/assets/celebrate.png";
import newYearLogo from "/src/assets/new-year-logo.png";
import gift from "/src/assets/gift.png";

const BestOffer = () => {
  return (
    <Container>
      <Section>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 text-center lg:text-left w-full">
          <div className="flex-1">
            <h3 className="text-secondary font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-2">
              NEW BEST OFFER
            </h3>
            <h1 className="text-TextPrimary font-black font-merriweather text-2xl sm:text-3xl md:text-4xl lg:text-[48px] mb-2">
              Coming Soon
            </h1>
            <p className="font-inter text-TextPrimary/60 text-base sm:text-lg md:text-xl lg:text-[20px] leading-7 md:leading-8">
              Dolor sit amet consectetur. Consequat{" "}
              <br className="hidden md:block" />
              eget consectetur maecenas sed molestie{" "}
              <br className="hidden md:block" />
              malesuada. Ipsum sed sodales risus ut{" "}
              <br className="hidden md:block" />
              pellentesque vel euismod.
            </p>
          </div>
          <div className="border-10 border-secondary rounded-full shrink-0 my-6 lg:my-0 mx-auto lg:mx-8 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center bg-white">
            <img
              src={celebrate}
              alt="celebrate"
              className="h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-60 lg:w-60 p-2 object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="font-inter text-secondary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
                2026
              </h3>
              <p className="font-inter text-TextPrimary/60 text-base sm:text-lg md:text-xl lg:text-[20px] leading-7 md:leading-8">
                Dolor sit amet consectetur. <br className="hidden md:block" />{" "}
                Consequat eget consectetur <br className="hidden md:block" />{" "}
                maecenas sed.
              </p>
            </div>
            <img
              src={newYearLogo}
              alt="logo"
              className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-[140px] lg:w-[140px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="text-center py-6 sm:py-10 space-y-5">
          <h3 className="font-inter font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-TextPrimary">
            WHAT IS FUNCTIONAL
          </h3>
          <h1 className="font-merriweather text-2xl sm:text-4xl md:text-5xl lg:text-[72px] font-black text-TextPrimary">
            <span className="text-secondary">Holidays</span> Sale 50%
          </h1>
          <p className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-7 md:leading-8 text-TextPrimary/60">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            <br className="hidden md:block" />
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod. Eleifend nunc purus quam id{" "}
            <br className="hidden md:block" /> fermentum amet amet sit
            consectetur.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full min-h-80 sm:min-h-100 md:min-h-125 lg:min-h-150">
          <div className="z-30 absolute top-4/12 left-2/12 lg:top-4 lg:left-30 md:top-2/12 md:left-1/12 sm:top-2/12 sm:left-1/12">
            <img
              src={gift}
              alt="gift"
              className="w-60 sm:w-80 md:w-100 lg:w-150 h-auto object-contain"
            />
          </div>
          <div
            className="bg-secondary lg:leading-11 md:leading-11 sm:leading-6 leading-4 font-inter font-bold text-sm 
            sm:text-xl md:text-2xl lg:text-[28px] text-white flex flex-col justify-center items-center 
            -rotate-12 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full 
          absolute right-0 lg:left-10/12 lg:top-1.5/2 md:left-10/12 sm:top-1.5/2 sm:right-0 transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-40"
          >
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] md:leading-10 lg:leading-10">
              50%
            </span>{" "}
            DISCOUNT
          </div>
          <div className="bg-secondary w-full h-20 sm:h-32 md:h-44 lg:h-57.25 rounded-2xl absolute bottom-0 left-0 z-10"></div>
        </div>
      </Section>
    </Container>
  );
};

export default BestOffer;
