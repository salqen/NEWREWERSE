import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import lodka from "../../assets/images/slider/ship_3D.png";

const VisionContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 90%;
  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 12rem;
  }
`;

const DiscoverContent = styled(Box)`
  min-height: 70vh;
  display: flex;
  margin-top: 100px;
  padding: 40px;
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
  scale: 130%;
  top: -130px;
  transform: rotate(10deg);
  animation: fly 20s linear infinite;
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
  margin-top: 0;
  @media (max-width: 1200px) {
    margin-top: 4rem;
  }
`;
const Vision = (props) => {
  return (
    <Grid maxWidth="xl" container>
      <DiscoverContent>
        <DiscoverContentContainter>
          <div>
            <h2
              className="heading"
              style={{ fontSize: "60px", textAlign: "left" }}
            >
              MISSION
            </h2>
            <br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
              Our mission is to revolutionize the real estate and gaming
              industries by fully utilizing the potential of linking blockchain
              technologies with these markets. We want to become a leading
              player in the web 3.0 gaming industry and real estate industries.
              Our company, Rewerse, symbolizes the opposite side of the classic
              market we know, offering a fresh perspective on the new digital
              world. Web 3.0 will change old models for the better, and you can
              join us on our journey to success. At Rewerse, we also want to
              leave a lasting legacy for future generations, so every project in
              our portfolio contains a deeper meaning and is of the highest
              quality.
            </p>
            <br></br>
          </div>
        </DiscoverContentContainter>
        <Box style={{ flexBasis: "50%" }}>
          <VtackyImage src={lodka} alt="Binabox" />
        </Box>
      </DiscoverContent>
    </Grid>
  );
};

export default Vision;
