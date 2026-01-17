import Banner from "../Banner/Banner";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Offer from "../Offer/Offer";
import WelcomeParty from "../WelcomeParty/WelcomeParty";
import BestOffer from "../BestOffer/BestOffer";
import ProductsPortfolio from "../ProductsPortfolio/ProductsPortfolio";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <Offer />
        <WelcomeParty />
        <BestOffer />
        <ProductsPortfolio />
      </Container>
    </Section>
  );
};

export default Home;
