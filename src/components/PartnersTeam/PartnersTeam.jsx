import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import teamwork from "../../assets/images/core.mp4";
import chargedlogo from "../../assets/images/partner/charged.png";
import blockczech from "../../assets/images/partner/blockczech.png";
import nefkus from "../../assets/images/partner/nefkus.png";
import altlift from "../../assets/images/partner/altlift.png";
import logo11 from "../../assets/images/partner/liondev.png";
import logo7 from "../../assets/images/partner/wellbens.png";
import logo8 from "../../assets/images/partner/bohemia.png";
import steinigers from "../../assets/images/partner/steiniger.png";
import logo9 from "../../assets/images/partner/binance.png";
import logo10 from "../../assets/images/partner/pixelfed.png";
import logo13 from "../../assets/images/partner/ton.png";
import logo15 from "../../assets/images/partner/polygon.jpeg";
import videoAlt from "../../assets/images/partner/rewerse_space_4.mp4";
import videoStein from "../../assets/images/partner/rewerse_space_2.mp4";
import videoNef from "../../assets/images/partner/rewerse_space_1.mp4";
import videoCharg from "../../assets/images/partner/rewerse_space_3.mp4";
import ReactCardFlip from "react-card-flip";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import poster from "../../assets/poster.jpeg"
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';

const TeamContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:40px;
  margin-inline: auto;
  gap: 8rem;
  max-width: 90%;
  @media (max-width: 650px) {
    margin-top: 12rem;
  }
`;
const BlockChainContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:40px;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 90%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 650px) {
    margin-top: 12rem;
  }
`;
const TeamHeading = styled.h2`
  text-align: center;
  color: white;
  position: relative;
  justify-content: flex-start;
  top: 80px;
  @media (max-width: 1200px) {
    top: 120px;
  }
  @media (max-width: 900px) {
    top: 0px;
    margin-bottom: 2rem;
  }
  @media (max-width: 650px) {
    top: 80px;
  }
  @media (max-width: 600px) {
    top: 80px;
    text-align: center;
  }
`;

const GridItem = styled(Grid)`
  display: flex;
  justify-content: center;
`;
const BlockChainContentContainter = styled(Box)`
  max-width: 100%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
const SocialBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem;
  position: relative;
  min-width: 3rem;
  min-height: 3rem;
  border-radius: 100%;
  background: #0e008f;
  border: 2px solid #0e008f;

  &:hover {
    background: transparent;
    svg {
      color: #0e008f !important;
    }
  }
  svg {
    color: #fff !important;
  }
`;

const PartnersTeam = () => {
  const [flip, setFlip] = useState(new Array(10).fill(false));

  const changeFlipToFalse = (idx) => {
    const flips = [...flip];
    flips.splice(idx, 1, false);
    setFlip(flips);
  };
  const changeFlipToTrue = (idx) => {
    const flips = [...flip];
    flips.splice(idx, 1, true);
    console.log(flips);
    setFlip(flips);
  };
  return (
    <>
      <Grid maxWidth="xl" container>
      <BlockChainContent>
      <BlockChainContentContainter>
        <TeamHeading className="heading" style={{ textAlign: "center", fontSize:"65px" }}>STRATEGIC PARTNERS</TeamHeading>
        <p className="sub-heading" style={{ textAlign: "center", marginTop: "110px",marginBottom:"50px",}}>
        Our partners are highly respected names and
possess a wealth of expertise in their respective
industries. This includes the creative house
Nefkus, the established financial law firm Steini-
ger, the game development studio Charged Mon-
keys, and international blockchain experts Altlift
and Blockczech. Together we have a long history
of successful business performances.</p>
<section
      style={{
        width: "100%",
        padding:"40px",
      }}
      className="tf-section tf-about style-2"
    >
      <div className="tf-container" style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
            <div className="tf-heading style-2 wow fadeInUp">
              <div className="about-headig">
                <h2 className="heading">Altlift</h2>
              </div>
              <p
                className="sub-heading"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  fontSize: "20px",
                }}
              >
                Altlift have been studying cryptocurrencies, their popularization and
investing in them since 2012 on both private and academic level.
Today, the Altlift team consists of a constantly growing number of
analysts, traders and other professionals of their respective fields from
all over the world. They cooperate with global exchanges and provide
audits of the best smart contracts. They are the world leader in setting
up tokenomics and help us with creating whole economic background
for our token
              </p><br></br>
              www.altlift.cz
            </div>
            <img style={{
        width: "30%",
        float: "left",
        justifyContent:"left",
       
      }}className="PartnersLogo" src={altlift} onClick={() => window.open("https://altlift.cz", "_blank")} alt="teamwork" />
            {/* <Button title="READ MORE" to="/about-v1" /> */}
          </div>

          <div className="content-right ">
            <></>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Player
      playsInline
      fluid={true}
      poster={poster}
      src={videoAlt}>
      <BigPlayButton position="center" />
    </Player>
        </div>
      </div>
    </section>
    <section
      style={{
        width: "100%",
      }}
      className="tf-section tf-about style-2"
    >
      <div className="tf-container" style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
            <div className="tf-heading style-2 wow fadeInUp">
              <div className="about-headig">
                <h2 className="heading">Charged Monkey</h2>
              </div>
              <p
                className="sub-heading"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  fontSize: "20px",
                }}
              >
                Charged Monkey is a cross platform game development studio,
founded by industry veterans in 2015. The founders have previous
experience from globally known companies such as Disney, Pixel
Federation (Co-Founder), Geeva, Bohemia Interactive etc.
They merge experience from big IPs with passion to create, publish
and operate own love brands and bring them both to web2 and web3
              </p><br></br>
              www.chargedmonkey.com
            </div>
            <img style={{
        width: "25%",
        float: "left",
        justifyContent:"left",
      }}src={chargedlogo} onClick={() => window.open("https://chargedmonkey.com", "_blank")} alt="teamwork" />
            {/* <Button title="READ MORE" to="/about-v1" /> */}
          </div>

          <div className="content-right ">
            <></>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Player
      playsInline
      fluid={true}
      poster={poster}
      src={videoCharg}>
      <BigPlayButton position="center" />
    </Player>
        </div>
      </div>
    </section>
    <section
      style={{
        width: "100%",
      }}
      className="tf-section tf-about style-2"
    >
      <div className="tf-container" style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
            <div className="tf-heading style-2 wow fadeInUp">
              <div className="about-headig">
                <h2 className="heading">Steiniger | law firm</h2>
              </div>
              <p
                className="sub-heading"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  fontSize: "20px",
                }}
              >
               Experts in International Law, Business Law, Financial, Blockchain and
Cryptocurrency Law. Steiniger | law firm is providing the highest level
that can be found in the market of legal and consulting services.
              </p><br></br>
              www.steinigers.sk
            </div>
            <img style={{
        width: "25%",
        float: "left",
        justifyContent:"left",
      }}src={steinigers} onClick={() => window.open("https://steinigers.com", "_blank")} alt="teamwork" />
            {/* <Button title="READ MORE" to="/about-v1" /> */}
          </div>

          <div className="content-right ">
            <></>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           <Player
      playsInline
      fluid={true}
      poster={poster}
      src={videoStein}>
      <BigPlayButton position="center" />
    </Player>
        </div>
      </div>
    </section>
    <section
      style={{
        width: "100%",
      }}
      className="tf-section tf-about style-2"
    >
      <div className="tf-container" style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
            <div className="tf-heading style-2 wow fadeInUp">
              <div className="about-headig">
                <h2 className="heading">Blockczech</h2>
              </div>
              <p
                className="sub-heading"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  fontSize: "20px",
                }}
              >
              Creating a bridge between industries and blockchain ecosystems. We
are finding new ways of blockchain technology implementation.
Building complete crypto ecosystem solutions based on blockchain.
BLOCKCHAIN INTEGRATION & creating custom Smart Contracts for
specific use cases. They have partnered up with companies as
Animoca Brands, Binance, Polygon, Anchor, Amber, Bizztech,
Blockhy.pe
              </p><br></br>
              www.blockczech.io
            </div>
         
            {/* <Button title="READ MORE" to="/about-v1" /> */}
          </div>

          <div className="content-right ">
            <></>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > <img style={{
          width: "50%",
          float: "left",
          justifyContent:"left",
        }}src={blockczech} onClick={() => window.open("https://blockczech.io", "_blank")}  alt="teamwork" />
          
        </div>
      </div>
    </section>
    <section
      style={{
        width: "100%",
      }}
      className="tf-section tf-about style-2"
    >
      <div className="tf-container" style={{ alignItems: "center" }}>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
            <div className="tf-heading style-2 wow fadeInUp">
              <div className="about-headig">
                <h2 className="heading">Nefkus</h2>
              </div>
              <p
                className="sub-heading"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  fontSize: "20px",
                }}
              >
                Full service creative house. Video production, sound design, creative
design, online marketing & web creation. Creating all type of creative
content for huge companies.
              </p><br></br>
              www.nefkus.sk
            </div>
            <img style={{
        width: "20%",
        float: "left",
        justifyContent:"left",
      }}src={nefkus} onClick={() => window.open("https://nefkus.sk", "_blank")} alt="teamwork" />
            {/* <Button title="READ MORE" to="/about-v1" /> */}
          </div>

          <div className="content-right ">
            <></>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           <Player
      playsInline
      fluid={true}
      poster={poster}
      src={videoNef}>
      <BigPlayButton position="center" />
    </Player>
        </div>
      </div>
    </section>
    </BlockChainContentContainter>
    </BlockChainContent>
      </Grid>
    </>
  );
};

export default PartnersTeam;
