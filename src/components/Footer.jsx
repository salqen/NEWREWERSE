import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const FooterTypography = styled(Typography)`
  font-weight: 700;
  font-size: small;
  @media (min-width: 1200px) {
    font-size: medium;
  }
`;

const FooterContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 6rem;
  bottom: 0;
  align-items: center;
  background: transparent;
  color: white;
  @media (max-width: 600px) {
    height: 8rem;
  }
`;

const FooterGrid = styled(Grid)``;

const Footer = (props) => {
  const [sidebarOffset, setSidebarOffset] = useState("0rem");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    if (props.displayProps === "none") {
      setSidebarOffset("6rem");
    }
    if (props.displayProps !== "none") {
      setSidebarOffset("0rem");
    }
  }, [props.displayProps]);
  return (
    <FooterContainer sx={{ marginTop: `${sidebarOffset}` }}>
      <FooterGrid
        container
        sx={{ maxWidth: { xxs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" } }}
        direction="row"
        justifyContent={{ xxs: "center", md: "space-between" }}
        alignItems="center"
      >
        <Stack direction="row" spacing={2}>
          <Link to="/">
            <FooterTypography>TERMS OF SERVICE</FooterTypography>
          </Link>
          <Link to="/">
            <FooterTypography>PRIVACY</FooterTypography>
          </Link>
          <Link to="/">
            <FooterTypography>GDPR</FooterTypography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={2}>

         
            <FooterTypography><a href="https://rewerse.space/rewerse-litepaper.pdf" target="_blank">REWERSE LITEPAPER V1.0</a></FooterTypography>
          

          <FooterTypography>|</FooterTypography>
          <Link to="/">
            <FooterTypography>ENGLIGHTENMENT</FooterTypography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={2}>
        <a href="https://twitter.com/rewersespace" target="_blank">
            <Twitter fontSize="large" />
          </a>
          <a  href="https://instagram.com/rewersespace" target="_blank">
            <Instagram fontSize="large" />
          </a>
          <a href="https://www.youtube.com/channel/UCiFSQ5CoGo-mrCA5pJJOKMg" target="_blank">
            <YouTube fontSize="large" />
          </a>
        </Stack>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
