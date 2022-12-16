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
import "react-image-gallery/styles/scss/image-gallery.scss";

import profile1 from "../../assets/images/team/daveprofil.jpg";
import profile2 from "../../assets/images/team/profilovka2.jpg";
import profile3 from "../../assets/images/team/profilovka3.jpg";
import profile4 from "../../assets/images/team/profilovka4.jpg";
import profile5 from "../../assets/images/team/profilovka5.jpg";
import profile6 from "../../assets/images/team/image0.jpg";
import yacko from "../../assets/images/team/yacko.jpg";
import profile7 from "../../assets/images/team/profilovka7.jpg";
import profile8 from "../../assets/images/team/profilovka8.jpg";
import profile9 from "../../assets/images/team/profilovka6.jpg";
import profile10 from "../../assets/images/team/profilovka10.jpg";

import jedlinsky from "../../assets/images/team/jedlinsky.jpeg";
import ReactCardFlip from "react-card-flip";

import { Twitter } from "@mui/icons-material";

import ImageGallery from "react-image-gallery";

const TeamContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  gap: 8rem;
  max-width: 100%;
  @media (max-width: 650px) {
    margin-top: 12rem;
  }
`;

const TeamHeading = styled.h2`
  text-align: left;
  color: white;
  display: flex;
  max-width: 90%;
  position: relative;
  justify-content: flex-start;
  top: 100px;
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

const BlockChainContent = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-inline: auto;
  gap: 8rem;
  max-width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 650px) {
    margin-top: 12rem;
  }
`;
const BlockChainContentContainter = styled(Box)`
  max-width: 85%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const SocialBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -0.5rem;
  position: relative;
  min-width: 3rem;
  min-height: 3rem;
  border-radius: 100%;

  &:hover {
    background: transparent;
    svg {
      color: #0e008f !important;
    }
  }
  svg {
    color: #000 !important;
  }
`;

const images = [
  {
    original: "/resources/allteam.jpg",
    thumbnail: "/resources/allteam.jpg",
  },
  {
    original: "/resources/1.jpg",
    thumbnail: "/resources/1.jpg",
  },
  {
    original: "/resources/2.jpg",
    thumbnail: "/resources/2.jpg",
  },
  {
    original: "/resources/3.jpg",
    thumbnail: "/resources/3.jpg",
  },
  {
    original: "/resources/4.jpg",
    thumbnail: "/resources/4.jpg",
  },
  {
    original: "/resources/Artboard 1.jpg",
    thumbnail: "/resources/Artboard 1.jpg",
  },
  {
    original: "/resources/Artboard 2.jpg",
    thumbnail: "/resources/Artboard 2.jpg",
  },
  {
    original: "/resources/Artboard 3.jpg",
    thumbnail: "/resources/Artboard 3.jpg",
  },
  {
    original: "/resources/Artboard 5.jpg",
    thumbnail: "/resources/Artboard 5.jpg",
  },
];

const Team = () => {
  const [flip, setFlip] = useState(new Array(12).fill(false));

  const changeFlipToFalse = (idx) => {
    const flips = [...flip];
    flips.splice(idx, 1, false);
    setFlip(flips);
  };
  const changeFlipToTrue = (idx) => {
    const flips = [...flip];
    flips.splice(idx, 1, true);
    setFlip(flips);
  };
  return (
    <>
      <Grid maxWidth="xl" container>
        <BlockChainContent>
          <BlockChainContentContainter>
            <TeamHeading className="heading">CORE TEAM</TeamHeading>
            <p
              className="sub-heading"
              style={{
                textAlign: "left",
                marginTop: "110px",
                marginBottom: "20px",
              }}
            >
              We are a team of 40+ experienced creators, innovators, gamers,
              marketers, and crypto enthusiasts united by a passion for modern
              and time- less technologies and a common desire to create. We are
              trailblazers, driven to exceed expectations and break through
              limitations. Our unique approach, known as valuable gaming,
              prioritizes players and game experi- ence over financial gain.
            </p>
            <br></br>
            <ImageGallery
              showFullscreenButton={false}
              showThumbnails={true}
              thumbnailPosition={"right"}
              showNav={true}
              showPlayButton={false}
              items={images}
            />
            <br></br>
            <br></br>
            <TeamContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 6, md: 18, xl: 24 }}
                sx={{ justifyContent: "center" }}
              >
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[0]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(0)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile1}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          David Lovas
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Founder
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(0)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          David is an entrepreneur with more than 12 years of
                          experience in business. Founder of two successful
                          brands, investor in the field of modern technologies,
                          startups and crypto. He is a creator, founder and
                          visionary of the company Rewerse Space & Deeck Frens.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/David__lvs"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[1]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(1)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile2}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Miroslav Belica
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          CEO & Co-Founder
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, minHeight: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(1)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Miroslav is educated in the law and gained vast
                          experience as a project manager. He has many years of
                          experience in the leadership of projects. His biggest
                          business focus is Web 3.0 and the gaming environment.
                          In his free time, Miro enjoys reading books and
                          sports.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/miroslav_belica"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="Large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[2]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(2)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile3}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Barbora Strecanska
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          CMO
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(2)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Barbora has extensive experience in content
                          acquisition, NFT marketing, and community management.
                          She has worked on several NFT projects and startups.
                          Barbora is interested in the latest fashion trends,
                          likes sports and travel.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/barbstrec"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[3]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(3)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile5}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Samuel Saloky
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          COO & CTO
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(3)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Samuel has technical and marketing skills and has
                          experience in several Web 3.0 projects as a core team
                          member. In Rewerse Space, he is responsible for the
                          technical department and overall operations as team
                          leader.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/r3wsammy"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[4]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(4)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile4}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Lukas Majerik
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Lead Game Designer
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(4)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Lukas has been gaming since a young age and has played
                          profes- sional competitive games for almost a decade.
                          He has many years of experience in story writing and,
                          as a professional player in E-Sport leagues, has a
                          very good understanding of game mechan- ics and the
                          retention model in games. He is also interested in the
                          Web 3.0 environment & tokenomics.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/MajerikLukas"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[5]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(5)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile6}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Andrej Pavelek
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          CFO
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(5)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Andrej is educated in economics and management and
                          gained extensive experiences in accounting. During his
                          career he worked in several companies as a chief
                          econo- mist and as an analyst in international
                          companies. In his free time, Andrej spends time with
                          his family and loves to travel.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[6]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(6)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile7}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Marcel Hromnik
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Community Director
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(6)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Marcel is a marketing expert with 7 years of
                          experience in Web 2.0. He has worked in marketing for
                          various banks in the financial sector for the past 3
                          years. He enjoys movies, comics, PC games, and
                          cryptocurrencies and is an avid NFT collector and
                          member of various communities.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/LuckyMF33"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[7]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(7)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={jedlinsky}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Jakub Jedlinsky
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Tokenomic Advisor
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(7)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Jakub Jedlinsky has a Ph.D. in SFC modeling of money
                          flows from Kingston University London. He has been
                          teaching cryptocurrencies at the Prague University of
                          Economics and Business since 2014. In his free time,
                          he enjoys playing games such as Civilization, Asphalt
                          9, and World War Heroes.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/Jakub_Jedlinsky"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[8]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(8)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile9}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Michal Harangozo
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Lead Game Developer
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(8)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Michal is a Co-Founder of the game development studio
                          Charged Monkeys. In the past, he worked for well-known
                          companies like Disney or Geeva. He is a passionate,
                          determined, and hard-working gaming industry
                          professional with over 20 years of multi-role
                          experience. Successful in building and motivating
                          dynamic teams.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/michalharangozo"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip isFlipped={flip[9]} flipDirection="horizontal">
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(9)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile8}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Lukas Steiniger
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Advisor
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(9)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Lukas is a lawyer, advisor and partner of advisory
                          compa- nies STEINIGER | law firm and Wellbens. He
                          specializes in cryptocurrency regulation, taxation,
                          and business structur- ing on an international level.
                          He also advises several successful crypto projects and
                          educates individuals on taxation and the use of
                          cryptocurrencies in everyday life.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/steinigerlukas"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip
                    isFlipped={flip[10]}
                    flipDirection="horizontal"
                  >
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(10)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={yacko}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Richard Jacko
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Designer
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(10)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Richard is young designer and creative head. He has a
                          years of experience behind in fashion and graphics
                          design area. In his free time he likes to study about
                          healthy lifestyle, new fashion and art trends and also
                          procrastinating with Netflix.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox>
                              <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
                <GridItem item xs={2} sm={4} md={4}>
                  <ReactCardFlip
                    isFlipped={flip[11]}
                    flipDirection="horizontal"
                  >
                    <Card
                      sx={{ maxWidth: 345 }}
                      onMouseEnter={() => changeFlipToTrue(11)}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={profile10}
                        alt="team member"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ textAlign: "left" }}
                        >
                          Martin Fyris
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          sx={{ textAlign: "left", fontSize: "1rem" }}
                        >
                          Art Advisor
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ maxWidth: 345, height: "100%" }}
                      onMouseLeave={() => changeFlipToFalse(11)}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          gutterBottom
                          sx={{ textAlign: "left" }}
                        >
                          DESCRIPTION
                        </Typography>
                        <Typography
                          variant="body2"
                          color="black"
                          gutterBottom
                          sx={{
                            textAlign: "left",
                            fontSize: { xxs: "0.5", sm: "0.8rem", lg: "1rem" },
                            lineHeight: "1",
                            paddingTop: "auto",
                          }}
                        >
                          Founder & Creative Director of Nefkus Creative House.
                          Martin is a skilled creative mind itself, he has many
                          years of experience in art creation and his company
                          has partner- ships with biggest brands.
                        </Typography>
                        <CardActions
                          style={{
                            padding: "0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: "auto",
                            }}
                          >
                            <SocialBox
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "auto",
                              }}
                            >
                              <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Twitter fontSize="large" />
                              </a>
                            </SocialBox>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </ReactCardFlip>
                </GridItem>
              </Grid>
            </TeamContent>
          </BlockChainContentContainter>
        </BlockChainContent>
      </Grid>
    </>
  );
};

export default Team;
