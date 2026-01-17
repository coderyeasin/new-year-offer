import Container from "../layout/Container";
import Section from "../layout/Section";
import celebrate from "/src/assets/celebrate.png";
import newYearLogo from "/src/assets/new-year-logo.png";
import gift from "/src/assets/gift.png";

const BestOffer = () => {
  return (
    <Container>
      <Section>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-secondary font-medium text-[24px]">
              NEW BEST OFFER
            </h3>
            <h1 className="text-TextPrimary font-black font-merriweather text-[48px]">
              Coming Soon
            </h1>
            <p className="font-inter text-TextPrimary/60 text-[20px] leading-8">
              Dolor sit amet consectetur. Consequat <br />
              eget consectetur maecenas sed molestie <br />
              malesuada. Ipsum sed sodales risus ut <br /> pellentesque vel
              euismod.{" "}
            </p>
          </div>
          <div className="border-10 border-secondary rounded-full">
            <img
              src={celebrate}
              alt="celebrate"
              className="h-full w-full p-6"
            />
          </div>
          <div className="space-y-7">
            <div>
              <h3 className="font-inter text-secondary font-bold text-[48px]">
                2026
              </h3>
              <p className="font-inter text-TextPrimary/60 text-[20px] leading-8">
                Dolor sit amet consectetur. <br /> Consequat eget consectetur{" "}
                <br /> maecenas sed.
              </p>
            </div>
            <img src={newYearLogo} alt="logo" className="h-[140px] w-[140px]" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="text-center py-10">
          <h3 className="font-inter font-medium text-[24px] text-TextPrimary">
            WHAT IS FUNCTIONAL
          </h3>
          <h1 className="font-merriweather text-[72px] font-black text-TextPrimary">
            <span className="text-secondary">Holidays</span> Sale 50%
          </h1>
          <p className="font-inter font-medium text-[20px] leading-8 text-TextPrimary/60">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed{" "}
            <br />
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod. Eleifend nunc purus quam id <br /> fermentum amet amet sit
            consectetur.
          </p>
        </div>
        <div className="h-165.5 w-full relative">
          <img
            src={gift}
            alt="gift"
            className="w-168.5 h-144.25 absolute bottom-6 left-22 z-30 drop-shadow-TextPrimary/20"
          />
          <div className="bg-secondary leading-12 font-inter font-bold text-[28px] text-white flex flex-col justify-center items-center -rotate-45 h-48 w-48 rounded-full absolute right-8 top-48">
            <span className="text-[72px]">50%</span> DISCOUNT
          </div>
          <div className="bg-secondary w-full h-57.25 rounded-2xl absolute -bottom-14 z-10"></div>
        </div>
      </Section>
    </Container>
  );
};

export default BestOffer;
