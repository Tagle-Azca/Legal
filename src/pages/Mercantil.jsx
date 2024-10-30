import { Container, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";


const Mercantil = () => {
//Mercantil
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
             Derecho Mercantil
            </Typography>
          </div>
        </Container>
    );
};

export default Mercantil;