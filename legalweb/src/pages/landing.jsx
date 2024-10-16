import { isMobile } from "react-device-detect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomButton from "../components/boton";
import { Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
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
      {}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: isMobile ? "1rem" : "3rem",
        }}
      >
        <Container>
          {}
          <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
            ¿Buscas asesorías legales?
          </Typography>

          <CustomButton
            text="Start"
            onClick={() => navigate("/Opciones")}
            variant="contained"
            color="primary"
            sx={{ fontSize: isMobile ? "14px" : "16px" }}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
