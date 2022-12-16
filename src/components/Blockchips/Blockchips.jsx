import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import blockchips from "../../assets/images/slider/coin.gif";

const BlockChipsContent = styled(Box)`
  min-height: 100vh;
  display: flex;
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

const BlockChipsHeading = styled.h2`
  text-align: left;
  font-size:80px;
  @media (max-width: 650px) {
    font-size: 50px;
  }
`;

const BlockChipsSubHeading = styled.h2`
  text-align: left;
  font-size:45px;
  @media (max-width: 650px) {
    font-size: 50px;
  }
`;

const BlockChipsImage = styled.img`
  scale: 150%;
  filter: contrast(150%);
  opacity: 1.2;
  margin-top: 150px;

`;

const BlockChipsContentContainter = styled(Box)`
  max-width: 50%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const BlockChips = () => {
  return (
    <Grid maxWidth="xl" container>
      <BlockChipsContent>
        <BlockChipsContentContainter>
          <div className="col-xl-6 col-lg-5 col-md-12 ">
          <BlockChipsSubHeading className="heading">
             OUR FIRST COIN
            </BlockChipsSubHeading>
            <BlockChipsHeading className="heading">
             BLOCKCHIPS
            </BlockChipsHeading>
            <p className="sub-heading" style={{ textAlign: "left" }}><br></br>
            Block Chips Coin is a cryptocurrency created specifically for the Deeck Frens ecosystem. With the ability to purchase valuable boxes or directly purchase on the Black Market, it offers the opportunity to quickly increase the value of your inventory or simply collect your favorite assets and trade them with other users. The coin can also be used to directly purchase the Battlepass, which guarantees high rewards for certain natural player activities. Staking, which is active and supports the gaming activity of all users, is a given.
            </p>
            
          </div>
        </BlockChipsContentContainter>
        <Box>
          <BlockChipsImage src={blockchips} alt="BlockChips" />
        </Box>
      </BlockChipsContent>
    </Grid>
  );
};

export default BlockChips;
