import { Box, Container, Grid, } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import styled from "@emotion/styled";
import logo1 from "../../assets/images/partner/steiniger.png";
import logo2 from "../../assets/images/partner/hhlogo.png";
import logo3 from "../../assets/images/partner/charged.png";
import blockczech from "../../assets/images/partner/blockczech.png";
import wellbens from "../../assets/images/partner/wellbens.png";
import altlift from "../../assets/images/partner/altlift.png";
import matic from "../../assets/images/partner/matic.png";
import logo4 from "../../assets/images/partner/liondev.png";
import logo5 from "../../assets/images/partner/nefkus.png";
import binance from "../../assets/images/partner/binance.png";
import ton from "../../assets/images/partner/tonlogo.png";
import animoca from "../../assets/images/partner/animoca.png";
import disney from "../../assets/images/partner/disney.png";
import pixel from "../../assets/images/partner/pixel.png";
import bohemia from "../../assets/images/partner/bohemia.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

const PartnersContent = styled(Box)`
  max-width: 100%;
  margin-inline: auto;
  padding:40px;
  margin-top: 12rem;
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
const BlockChainContentContainter = styled(Box)`
  max-width: 100%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
const SlideItemWraper = styled(Box)`
  max-width: 200px;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideItem = styled.img`
  height: 100%;
  cursor: auto;
  &:hover {
    cursor: pointer;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const PartnersHeadingWraper = styled.div`
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const PartnersHeading = styled.h2`
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const Partners = () => {
  const [slides, setSlides] = useState(5);
  const mediaXL = useMediaQuery("(max-width:1600px)");
  const mediaLG = useMediaQuery("(max-width:1200px)");
  useEffect(() => {
    if (mediaXL) {
      setSlides(5);
    }
    if (mediaLG) {
      setSlides(3);
    }
  }, [mediaXL, mediaLG]);

  return (
    <Grid maxWidth="xl" container>
      <BlockChainContent>
      <BlockChainContentContainter>
      <div style={{ marginTop: "5rem", width: "100%" }}>
        <PartnersHeadingWraper className=" mb60  " style={{ textAlign: "center", fontSize:"65px" }}>
          <PartnersHeading className="heading" style={{ textAlign: "center", fontSize:"65px" }}>ALL PARTNERS</PartnersHeading>
        </PartnersHeadingWraper>
      </div>
     
      <PartnersContent>
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          slidesPerView={slides}
          autoplay={{ delay: 1500 }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <Slide>
            <SlideItemWraper>
              <SlideItem src={logo1} onClick={() => window.open("https://steinigers.com", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={logo2} onClick={() => window.open("https://hoodhero.store", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={logo3} onClick={() => window.open("https://chargedmonkey.com", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={logo4} onClick={() => window.open("https://liondevelopers.sk", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={logo5} onClick={() => window.open("https://nefkus.sk", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={altlift} onClick={() => window.open("https://altlift.cz", "_blank")}alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={blockczech} onClick={() => window.open("https://blockczech.io", "_blank")}alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={wellbens} onClick={() => window.open("https://wellbens.com", "_blank")}alt="partner" />
            </SlideItemWraper>
          </Slide>
        </Swiper>
      </PartnersContent>
      <div style={{ marginTop: "5rem", width: "100%" }}>
        <PartnersHeadingWraper className=" mb60  ">
          <PartnersHeading className="heading" style={{ textAlign: "center", fontSize:"65px" }}>PARTNERS IN TALK</PartnersHeading>
        </PartnersHeadingWraper>
      </div>
      <PartnersContent>
        <Swiper
          // install Swiper modules
          slidesPerView={3}
          loop={false}
          pagination={{ clickable: true }}
        >
          <Slide>
            <SlideItemWraper>
              <SlideItem src={binance} onClick={() => window.open("https://binance.com", "_blank")}alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={matic} onClick={() => window.open("https://polygon.technology", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={ton} onClick={() => window.open("https://ton.org", "_blank")}alt="partner" />
            </SlideItemWraper>
          </Slide>
          </Swiper>
      </PartnersContent>
      <div style={{ marginTop: "5rem", width: "100%" }}>
      <PartnersHeadingWraper className=" mb60">
        <PartnersHeading className="heading" style={{ textAlign: "center", fontSize:"65px" }}>OUR PEOPLE WORKED WITH</PartnersHeading>
      </PartnersHeadingWraper>
      </div>

      <PartnersContent>
        <Swiper
          // install Swiper modules
          slidesPerView={4}
          loop={false}
          pagination={{ clickable: true }}
        >
          <Slide>
            <SlideItemWraper>
              <SlideItem src={animoca} onClick="window.open('https://www.animocabrands.com', '_blank');" alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={disney} onClick={() => window.open("https://disney.com", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={pixel} onClick={() => window.open("https://pixelfederation.com", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
          <Slide>
            <SlideItemWraper>
              <SlideItem src={bohemia} onClick={() => window.open("https://bohemia.net", "_blank")} alt="partner" />
            </SlideItemWraper>
          </Slide>
        </Swiper>
      </PartnersContent>
     
    </BlockChainContentContainter>
    </BlockChainContent>
    </Grid>
  );
};

export default Partners;
