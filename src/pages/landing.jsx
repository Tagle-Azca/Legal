import { isMobile } from "react-device-detect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomButton from "../components/boton";
import { Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FotoTelefono from "../IMG/wallpaper.webp";
import FotoComputadora from "../IMG/PC.webp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
});

const Landing = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: isMobile ? "1rem" : "3rem",
          backgroundImage: `url(${isMobile ? FotoTelefono : FotoComputadora})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <div
            className="Text"
            style={{
              marginTop: isMobile ? "8vh" : "19vh",
              color: isMobile ? "black" : "white",
            }}
          >
            <Typography variant="h4" gutterBottom>
              ¿Buscas asesorías legales gratis?
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              style={{ marginTop: "5rem", color: isMobile ? "black" : "white" }}
            >
              ¡Nosotros te ayudaremos!
            </Typography>
          </div>
        </Container>

        <Container>
          <div
            style={{
              width: isMobile ? "20rem" : "",
              marginBottom: "10rem",
            }}
          >
            <CustomButton
              text="Empecemos aquí"
              onClick={() => navigate("/Opciones")}
              variant="contained"
              style={{
                fontSize: isMobile ? "14px" : "16px",
                padding: isMobile ? "8px 20px" : "12px 24px",
                borderRadius: "15px",
                color: isMobile ? "white" : "black",
                backgroundColor: isMobile ? "black" : "white",
              }}
            />
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
