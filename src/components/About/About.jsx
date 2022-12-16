import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import lodka from "../../assets/images/core.mp4"
import poster from "../../assets/poster.jpeg"
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';

const VisionContent = styled(Box)`
  min-height: 50vh;
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
  min-height: 50vh;
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
  scale: 130%;
  top: -130px;
  animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  transform: rotate(10deg);
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
const About = (props) => {
  return (
    <Grid maxWidth="xl" container>
      <DiscoverContent>
        <DiscoverContentContainter>
          <div>
           
            <h3 className="heading" style={{ textAlign: "left" }}>
            REWERSE
            </h3> <h3 className="heading" style={{ textAlign: "left" }}>
            CREATIVE STUDIO 3.0
            </h3><br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
            Rewerse Creative Studio is a group of game visionaries dedicated to creating unforgettable virtual experiences. Our team comprises experienced professionals and passionate players with expertise in Web3 and game development. We are committed to pushing the boundaries of what is possible in the world of digital development.
            </p><br></br>
         
          </div>
        </DiscoverContentContainter>
        <Box style={{ flexBasis: "50%" }}>
        <Player
      playsInline
      fluid={true}
      autoplay
      poster={poster}
      src={lodka}>
      <BigPlayButton position="center" />
    </Player>
        </Box>
      </DiscoverContent>
    </Grid>
  );
};

export default About;
