import Banner from "../Banner/Banner";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Offer from "../Offer/Offer";
import WelcomeParty from "../WelcomeParty/WelcomeParty";
import BestOffer from "../BestOffer/BestOffer";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <Offer />
        <WelcomeParty />
        <BestOffer />
      </Container>
    </Section>
  );
};

export default Home;
