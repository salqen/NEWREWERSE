import { Box, Container, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

/* const DiscoverContent = styled(Box)`
  min-height: 50vh;
  display: flex;
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

const DiscoverContentContainter = styled(Box)`
  max-width: 50%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`; */

const About = (props) => {
  return (
    <Container maxWidth="xl">
      {/* <DiscoverContent>
        <DiscoverContentContainter>
          <div>
            <h3 className="heading" style={{ textAlign: "left" }}>
              REWERSE
            </h3>
            <h3 className="heading" style={{ textAlign: "left" }}>
              CREATIVE STUDIO 3.0
            </h3>
            <br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
              Rewerse Creative Studio is a group of game visionaries dedicated
              to creating unforgettable virtual experiences. Our team comprises
              experienced professionals and passionate players with expertise in
              Web3 and game development. We are committed to pushing the
              boundaries of what is possible in the world of digital
              development.
            </p>
            <br></br>
          </div>
        </DiscoverContentContainter>
        <Box style={{ flexBasis: "50%" }}>
          <Player playsInline fluid={true} autoplay poster={poster} src={lodka}>
            <BigPlayButton position="center" />
          </Player>
        </Box>
      </DiscoverContent> */}
    </Container>
  );
};

export default About;
