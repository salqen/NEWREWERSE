import Navbar from "./Navbar";
import "../styles/style.scss";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 6rem;
  top: 0;
  z-index: 1;
  align-items: center;
  background: transparent;
  color: white;
`;

const Header = (props) => {
  const [sidebarOffset, setSidebarOffset] = useState("0rem");
  useEffect(() => {
    if (props.displayProps === "none") {
      setSidebarOffset("6rem");
    }
    if (props.displayProps !== "none") {
      setSidebarOffset("0rem");
    }
  }, [props.displayProps]);
  return (
    <FooterContainer>
      <Navbar
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
        menuState={props.menuState}
      />
    </FooterContainer>
  );
};
export default Header;
