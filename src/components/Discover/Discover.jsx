import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import dflogo from "../../assets/dflogo.png";
import vtacky from "../../assets/vtáčky2.png";

const DiscoverContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  padding:40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 90%;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin-top: 12rem;
  }
`;

const VtackyImage = styled.img`
  float: right;
  margin-top: 15rem;
  position: relative;
  scale: 125%;
  top: -50px;
  animation: floating 3s ease-in-out infinite;
  right: 0px;
  @media (max-width: 1200px) {
    scale: 100%;
    top: 0px;
    right: 0px;
    margin-top: 0rem;
  }
`;

const DiscoverContentContainter = styled(Box)`
  max-width: 50%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const DeeckFrensImage = styled.img`
  margin-top: ;
  @media (max-width: 1200px) {
    margin-top: 4rem;
  }
`;

const Discover = (props) => {
  return (
    <Grid maxWidth="xl" container>
      <DiscoverContent>
        <DiscoverContentContainter>
          <div>
           
            <h2 className="heading" style={{ textAlign: "left", fontSize:"45px", lineHeight:"45px", }}>
             Discover our first project under Rewerse Creative Studio 3.0
            </h2> <br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
            Game visionaries bringing unforgettable experiences through the screen. Our team of creatives and professionals with Web 3.0 and game dev skills are currently working on "Deeck Frens.
              Deeck Frens is an action-packed NFT shooting arena game set in a
              bustling metropolis where the main characters are birds. However,
              these birds have forgotten how to fly, which adds a unique twist
              to the gameplay. Players must use their cunning and combat skills
              to battle against other players and emerge victorious. With
              stunning graphics and immersive gameplay, Deeck Frens offers a
              unique and exciting experience for fans of shooting games and
              NFTs.
            </p><br></br>
         
          </div>
        </DiscoverContentContainter>
        <Box style={{ flexBasis: "50%" }}>
        <VtackyImage className="floating" src={vtacky} alt="Binabox" />
        <DeeckFrensImage src={dflogo} alt="dflogo" />
            <button
              className="tf-button style-2"
              style={{
                display: "wrap",
                justifyContent: "center",
                marginTop: "0rem",
                minWidth: "20rem",
                textAlign: "center",
              }}
            ><a href="https://deeckfrens.io" target="_blank">
              VISIT WEBSITE
              </a></button>
        </Box>
      </DiscoverContent>
    </Grid>
  );
};

export default Discover;
