import React, { useRef } from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import BlockChain from "../components/Blockchain/Blockchain";
import BlockChips from "../components/Blockchips/Blockchips";
import Phigital from "../components/Developing/Developing";
import Roadmap from "../components/Roadmap/Roadmap";
import Contact from "../components/Contact/Contact";
import Discover from "../components/Discover/Discover";
import Partners from "../components/Partners/Partners";
import Team from "../components/Team/Team";
import PartnersTeam from "../components/PartnersTeam/PartnersTeam";
import Vision from "../components/Vision/Vision";
import "./home.scss";

const HomePage = (props) => {
  /* const testref = useRef(null);
  const executeScroll = () =>
    testref.current.scrollIntoView({ behavior: "smooth" }); */
  /* const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); */
  return (
    <>
      <div className="hero" id="/">
        <Banner />
      </div>

      <div className="vision" id="mission">
        <Vision />
      </div>
      <div className="discover" id="deeckfrens">
        <Discover />
      </div>
      <div className="blockchain" id="blockchain">
        <BlockChain />
      </div>
      <div className="blockchips" id="blockchips">
        <BlockChips />
      </div>
      <div className="phigital" id="phigital">
        <Phigital />
      </div>
      <div className="roadmap" id="roadmap">
        <Roadmap />
      </div>
      <div className="team" id="team">
        <Team />
      </div>
      <div className="partnersteam">
        <PartnersTeam />
      </div>
      <div className="partners" id="partners">
        <Partners />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
