import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";
import blockchain from "../../assets/blockchain_pic.png";

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

const BlockChainHeading = styled.h2`
  text-align: left;
  @media (max-width: 650px) {
    font-size: 50px;
  }
`;

const BlockChainImage = styled.img`
  scale: 130%;
  animation: rotation 100s infinite linear;
`;

const BlockChainContentContainter = styled(Box)`
  max-width: 100%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const BlockChain = () => {
  return (
    <Grid maxWidth="xl" container>
      <BlockChainContent>
        <BlockChainContentContainter>
          
            <BlockChainHeading className="heading">
              BLOCKCHAIN
            </BlockChainHeading><br></br>
            <p className="sub-heading" style={{ textAlign: "left" }}>
              Blockchain technology offers several benefits that make it
              attractive for various industries, including gaming and real
              estate. Some of the key strengths of blockchain that we aim to
              take advantage of include the following: Security: Blockchain
              technology is known for its strong security features, which
              protect against digital asset theft and hacking attacks such as
              DDOS. <br></br>
              <br></br>By using blockchain, we can help ensure that our
              customers' digital assets are safe and secure. Interoperability:
              Blockchain technology enables different systems to communicate and
              exchange data securely and transparently. This is particularly
              useful for our gaming and real estate projects, as it allows us to
              create seamless customer experiences across both platforms.
              <br></br>
            </p>
         
        </BlockChainContentContainter>
        <Box>
          <BlockChainImage src={blockchain} alt="blockchain" />
        </Box>
      </BlockChainContent>
    </Grid>
  );
};

export default BlockChain;
