import styled from "styled-components";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import Subcribe from "../components/home/Subscribe";
import Tokenomics from "../components/home/Tokenomics";
import Socials from "../components/home/Socials";
import Contract from "../components/home/Contract";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";



const Home = () => {

  return (
    <StyledHome>
      <Hero />
      <Socials />
      <Contract />
      <Tokenomics />
      {/* <Features /> */}
      <Features />
      <Subcribe />
      <Footer />
      <ScrollToTopButton />
    </StyledHome>

  );
};

export default Home;

const StyledHome = styled.main`
background-color: var(--dark-color);
color: var(--light-color);
align-items: center;
justify-content: center;
overflow-x: hidden;
 margin: 0 auto;
  padding: 0;
  width: 100%;

`;