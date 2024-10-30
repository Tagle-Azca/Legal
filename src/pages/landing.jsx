import { isMobile } from "react-device-detect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomButton from "../components/boton";
import { Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FotoTelefono from "../IMG/wallpaper.webp";
import FotoComputadora from "../IMG/Landing.png";

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
              marginTop: isMobile ? "2vh" : "1rem",
              color: isMobile ? "black" : "black",
            }}
          >
            <Typography variant="h3" gutterBottom>
              ¿Buscas asesorías legales gratis?
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginTop: isMobile ? "40vh" : "65vh",
                color: isMobile ? "black" : "black",
              }}
            >
              Asesorias Legales AG
            </Typography>
          </div>
        </Container>

        <Container>
          <div
            style={{
              marginTop: isMobile ? "-20vh" : "1rem",
              width: isMobile ? "20rem" : "",
            }}
          >
            <CustomButton
              text="¡Nosotros te ayudamos!"
              onClick={() => navigate("/Opciones")}
              variant="contained"
              style={{
                fontSize: isMobile ? "14px" : "16px",
                padding: isMobile ? "8px 40px" : "12px 24px",
                borderRadius: "15px",
                width: isMobile ? "" : "20rem",
                color: isMobile ? "white" : "white",
                backgroundColor: isMobile ? "black" : "black",
              }}
            />
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
