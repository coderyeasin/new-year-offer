import Container from "../layout/Container";
import Section from "../layout/Section";
import newYear from "/src/assets/new-year-shape.png";
const WelcomeParty = () => {
  return (
    <Container>
      <Section>
        <div className="flex justify-center gap-10 items-center w-full h-150 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/src/assets/party.png')] rounded-2xl">
          <div className="text-white space-y-7">
            <h1 className=" text-[64px] font-black font-merriweather leading-[88px] ">
              Welcome to <br /> midnight party
            </h1>
            <p className="font-inter text-white/80 text-[18px] leading-[30px]">
              Dolor sit amet consectetur. Consequat eget consectetur maecenas
              sed molestie <br /> malesuada. Ipsum sed sodales risus ut
              pellentesque vel euismod.
            </p>
            <h3 className="font-inter text-[20px]">Join Now</h3>
          </div>
          <img src={newYear} alt="newYear" className="w-[300px] h-[250px]" />
        </div>
      </Section>
      <Section>
        <div className="w-full h-120.5 bg-linear-to-t from-white to-secondary/15 rounded-2xl flex flex-col justify-center items-center">
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-14">
            <span className="text-secondary">Place:</span> New Park Hotel
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-14">
            <span className="text-secondary">Date:</span> 31 December Night 2026
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-14">
            <span className="text-secondary">Time:</span> Evening 7.30 pm to
            12.30 am
          </p>
          <button className="bg-secondary mt-10 text-white text-[20px] font-inter font-bold rounded-2xl w-41.75 h-14 px-4 py-3">
            Join Now
          </button>
        </div>
      </Section>
    </Container>
  );
};

export default WelcomeParty;
