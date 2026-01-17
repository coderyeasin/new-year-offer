import Container from "../layout/Container";
import Section from "../layout/Section";
// import partyImg from "/src/assets/party.png";
import newYear from "/src/assets/new-year-shape.png";
const WelcomeParty = () => {
  return (
    <Container>
      <Section>
        <div className="flex justify-center gap-10 items-center w-full h-[600px] bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0)),url('/src/assets/party.png')] rounded-2xl">
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
        <div className="w-full h-[482px] bg-linear-to-t from-white to-secondary/15 rounded-2xl mx-auto">
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-[56px]">
            <span className="text-secondary">Place:</span> New Park Hotel
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-[56px]">
            <span className="text-secondary">Date::</span> 31 December Night
            2023
          </p>
          <p className="text-TextPrimary font-inter font-semibold text-[32px] leading-[56px]">
            <span className="text-secondary">Time::</span> Evening 7.30 pm to
            12.30 am
          </p>
          <button className="bg-secondary text-white text-[20px] font-inter font-bold rounded-2xl w-[167px] h-[56px] px-[16px] py-[32px]">
            Join Now
          </button>
        </div>
      </Section>
    </Container>
  );
};

export default WelcomeParty;
