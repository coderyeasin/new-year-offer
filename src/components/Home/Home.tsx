import Banner from "../Banner/Banner";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <Offer />
      </Container>
    </Section>
  );
};

export default Home;
