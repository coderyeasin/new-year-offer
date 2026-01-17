import Banner from "../Banner/Banner";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Offer from "../Offer/Offer";
import WelcomeParty from "../WelcomeParty/WelcomeParty";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <Offer />
        <WelcomeParty />
      </Container>
    </Section>
  );
};

export default Home;
