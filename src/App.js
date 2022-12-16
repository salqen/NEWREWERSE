import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.scss";
import { useState } from "react";
import { theme } from "./styles/theme.js";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import UniverseCanvas from "./components/Canvas/Universe";

export default function App() {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("visible");
  const isOpen = () => {
    setOpen(true);
    setDisplay("hidden");
  };

  const closeMenu = () => {
    setOpen(false);
    setTimeout(() => {
      setDisplay("visible");
    }, 1600);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header openMenu={isOpen} closeMenu={closeMenu} menuState={open} />
          <Routes>
            <Route
              path="/"
              element={
                <UniverseCanvas content={<HomePage displayProps={display} />} />
              }
            />

            <Route
              path="/contact"
              element={
                <UniverseCanvas
                  content={
                    <h6
                      style={{
                        color: "white",
                        marginTop: "4rem",
                        marginLet: "4rem",
                        fontSize: "50px",
                        marginInline: "auto",
                      }}
                    >
                      <Contact />
                    </h6>
                  }
                />
              }
            />
          </Routes>
          <Footer displayProps={display} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
