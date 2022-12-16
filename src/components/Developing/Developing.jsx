import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import phigital from "../../assets/images/slider/distric_transparent_official.png";

const PhigitalContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding:40px;
  justify-content: center;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 90%;

  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 12rem;
  }
`;

const Disctrict = styled.img`
  float: right;
  margin-top: 15rem;
  position: relative;
  scale: 300%;
  animation: blink 0.5s;
  animation-iteration-count: infinite;
  top: -50px;
  left: 0px;

  @media (max-width: 1300px) {
    scale: 100%;
    top: 0px;
    left: 0px;
    margin-top: 0rem;
  }
`;

const PhigitalContentContainter = styled(Box)`
  max-width: 50%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const Phigital = () => {
  return (
    <Grid maxWidth="xl" container>
      <PhigitalContent>
        <PhigitalContentContainter>
          <div>
            <h2 className="heading" style={{ textAlign: "left", fontSize:"65px" }}>
              REWERSE PHIGITAL DEVELOPING
            </h2><br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
              Rewerse Phigital Developing (RPD) is a fintech subsidiary of
              Rewerse Space that aims to connect the real estate market with
              blockchain technology. By combining the best elements of both, we
              have created a unique and innovative business model. RPD is
              dedicated to bringing the benefits of blockchain to the real
              estate industry, and to helping our clients navigate the complex
              and rapidly-evolving world of digital finance.
            </p><br></br>
            <h3 className="heading" style={{ textAlign: "left", fontSize:"35px" }}>
              START 2023
            </h3>
          </div>
        </PhigitalContentContainter>
        <Box style={{ flexBasis: "50%" }}>
          <Disctrict src={phigital} alt="phigital" />
        </Box>
      </PhigitalContent>
    </Grid>
  );
};

export default Phigital;
