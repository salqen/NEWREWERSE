import Navbar from "./Navbar";
import "../styles/style.scss";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
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
    <header className="header">
      <Navbar
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
        menuState={props.menuState}
      />
    </header>
  );
};
export default Header;
