import { Box, Button, Grid, Stack, Modal, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import "./styles.scss";

const ContactContent = styled(Stack)`
  min-height: 100vh;
  margin-inline: auto;
  gap: 8rem;
  max-width: 80%;
  margin-top: 12rem;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Contact = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    
    <Grid maxWidth="xl" container>
      <ContactContent
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <div className="col-sm-6">
            <h2
              className="heading"
              style={{ textAlign: "center", width: "100%" }}
            >
              FEEL FREE TO CONTACT US
            </h2>
            
            <Button onClick={() => window.open("/contact", "_self")}
              color="secondary"
              disabled={false}
              variant="filled"
              sx={{
                marginTop: "2rem",
                fontSize: "1.5rem",
                background: "grey",
                border: 1.5,
                minWidth: "9em",
              }}
            >
              Contact
            </Button>

          </div>
        </Box>
        <Box>
          <div className="col-sm-6">
            <h2 className="heading" style={{ textAlign: "center" }}>
              LET'S WORK WITH US
            </h2>
            <Button 
              color="secondary"
              disabled={false}
              variant="filled"
              sx={{
                marginTop: "2rem",
                fontSize: "1.5rem",
                background: "grey",
                border: 1.5,
                minWidth: "9em",
              }}
            >
              Jobs
            </Button>
          
          </div>
        </Box>
      </ContactContent>
    </Grid>
  );
};

export default Contact;
