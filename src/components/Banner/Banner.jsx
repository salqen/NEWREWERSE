import React from "react";
import { Container } from "@mui/material";

// import logodark from "../../assets/logorewe.png";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";


const Banner = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        marginBottom:"50px",
      }}
    >
      <section className="tf-slider home2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-slider-item style-2">
                <div
                  className="content-inner wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h1>WELCOME</h1>
                  <h3>TO THE REWERSE SPACE</h3>
                  <p className="sub-heading wow fadeInUp" data-wow-delay="0.6s">
                    <br></br>Place where Web 3.0 is getting real shapes.{" "}
                    
                    <br></br>Rewerse Space is an international creative company
                    with the vision of building a<br></br> network of innovative
                    projects. We are implementing the best of well-known Web 2.0
                    <br></br> with unexplored Web 3.0 to create the most
                    effective hybrid and pioneer products.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "4rem",
                      opacity: "0.6",
                      transform: "translateY(10px)",
                      transition: "2s all ease",
                      animation: "floating 4s infinite linear",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <SwipeDownAltIcon
                      style={{ alignSelf: "center", fontSize: 40, }}
                    />
                    <h6>SCROLL DOWN</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
