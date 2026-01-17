import Banner from "../Banner/Banner";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Offer from "../Offer/Offer";
import WelcomeParty from "../WelcomeParty/WelcomeParty";
import BestOffer from "../BestOffer/BestOffer";
import ProductsPortfolio from "../ProductsPortfolio/ProductsPortfolio";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <Offer />
        <WelcomeParty />
        <BestOffer />
        <ProductsPortfolio />
        <Newsletter />
      </Container>
    </Section>
  );
};

export default Home;
