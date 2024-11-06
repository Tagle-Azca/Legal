import { isMobile } from "react-device-detect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Box, Container, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Wallpaper from "../IMG/beigeWallpaper.jpg";

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
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.5, 
    },
  },
});

const Mercantil = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", 
          textAlign: "center",
          padding: isMobile ? "1rem" : "3rem",
          backgroundImage: `url(${Wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", 
              borderRadius: "10px", 
              boxShadow: 3, 
              padding: "2rem",
              marginTop: "2rem",
            }}
          >
            <CardContent>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Derecho Mercantil
              </Typography>
              <Typography variant="body1" paragraph>
              El derecho mercantil, también llamado derecho comercial, es una rama del derecho privado que tiene como objetivo regular el intercambio de bienes y servicios entre privados, es decir, los actos comerciales y sus implicaciones jurídicas, para garantizar que cumplan siempre con lo establecido en la ley.
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ marginTop: "2rem" }}>
                Asesorías en Derecho Mercantil
              </Typography>
              <Typography variant="body1" paragraph>
                Ofrecemos servicios de asesoría en derecho Mercantil para ayudar a los individuos y empresas a navegar por diversas situaciones legales. Algunos de los temas en los que podemos asesorarte incluyen:
              </Typography>
              <Typography variant="h6" gutterBottom>
                Controversias mercantiles:
              </Typography>
              <Typography variant="body1" paragraph>
              -Litigio de toda clase de asuntos derivados de la práctica comercial.
              </Typography>
              <Typography variant="h6" gutterBottom>
              Recuperación judicial y extrajudicial de títulos y contratos de crédito:
              </Typography>
              <Typography variant="body1" paragraph>
              -Créditos Hipotecarios y Prendarios; Pagarés, Cheques, Facturas. 
              </Typography>
              <Typography variant="h6" gutterBottom>
                Arrendamientos
              </Typography>
              <Typography variant="h6" gutterBottom>
                Constitucion de patrimonio familiar
              </Typography>
              <Typography variant="h6" gutterBottom>
              Litigios derivados de conflictos entre accionistas:
              </Typography>
              <Typography variant="body1" paragraph>
              -Ejecución y rescisión de todo tipo de contratos y convenios mercantiles; juicios concursales.
              </Typography>
              <Typography variant="h6" gutterBottom>
              Demandas en contra de cualquier aseguradora:
              </Typography>
              <Typography variant="body1" paragraph>
              -Por el cumplimiento forzoso del contrato (de autos, de vida, de riesgos, de gastos médicos etc)
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Mercantil;
