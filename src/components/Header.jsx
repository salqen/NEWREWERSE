import Navbar from "./Navbar";
import "../styles/style.scss";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 6rem;
  top: 0;
  z-index: 100;
  align-items: center;
  background: transparent;
  color: white;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <Navbar
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
        menuState={props.menuState}
      />
    </HeaderContainer>
  );
};
export default Header;
