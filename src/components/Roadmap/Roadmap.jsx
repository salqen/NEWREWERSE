import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import phigital from "../../assets/images/slider/roadmap.png";

const PhigitalContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding:40px;
  justify-content: center;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 100%;

  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 12rem;
  }
`;

const Disctrict = styled.img`
  float: right;
  margin-top: 15rem;
  position: relative;
  scale: 130%;
  top: 5%;
  left: -20%;

  @media (max-width: 1300px) {
    scale: 100%;
    top: 0px;
    left: 0px;
    margin-top: 0rem;
  }
`;

const PhigitalContentContainter = styled(Box)`
  max-width: 100%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const Roadmap = () => {
  return (
    <Grid maxWidth="xl" container>
      <PhigitalContent>
        <PhigitalContentContainter>
        <div>
            <h2 className="heading" style={{ marginTop:"-300px",textAlign: "left", fontSize:"65px" }}>
              ROADMAP
            </h2>
            <h3 className="heading" style={{ color:"gray", textAlign: "left", fontSize:"50px" }}>
              2023
            </h3>
          </div>
        </PhigitalContentContainter>
        <Box style={{ flexBasis: "61%" }}>
          <Disctrict src={phigital} alt="phigital" />
        </Box>
      </PhigitalContent>
    </Grid>
  );
};

export default Roadmap;
