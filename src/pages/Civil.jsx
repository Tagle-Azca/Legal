import { Container, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";


const Civil = () => {
//Civil
    return(
<Container>
          <div
            className="Text"
            style={{
              marginTop: isMobile ? "2vh" : "1rem",
              color: isMobile ? "black" : "black",
              textAlign: isMobile ? "CENTER" : "CENTER"
            }}
          >
            <Typography variant="h3" gutterBottom>
             Derecho Civil
            </Typography>
          </div>
        </Container>
    );
};

export default Civil;