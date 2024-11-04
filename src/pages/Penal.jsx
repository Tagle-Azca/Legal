import { isMobile } from "react-device-detect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Box, Container, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Wallpaper from "../IMG/greywallpaper2.png";

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

const Civil = () => {
  // eslint-disable-next-line
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
              <Typography variant="h4" gutterBottom sx={{ marginTop: "2rem" }}>
                Asesorías en Derecho Penal.
              </Typography>
              <Typography variant="body1" paragraph>
                Ofrecemos servicios de asesoría en derecho penal para apoyar a
                individuos y empresas a comprender y resolver situaciones
                legales relacionadas con el sistema penal en México. Entre los
                temas que cubrimos se incluyen:
              </Typography>

              <Typography variant="h6" gutterBottom>
                Delitos Patrimoniales y Económicos:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en la resolución de conflictos relacionados con
                delitos de fraude, abuso de confianza, robo y falsificación.
                <br />- Representación en procedimientos penales relacionados
                con infracciones que afectan el patrimonio de personas o
                empresas.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Delitos Patrimoniales y Económicos:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en la resolución de conflictos relacionados con
                delitos de fraude, abuso de confianza, robo y falsificación.
                <br />- Representación en procedimientos penales relacionados
                con infracciones que afectan el patrimonio de personas o
                empresas.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Familia:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en procesos de divorcio y separación.
                <br />- Asistencia en la adopción, tutela y guarda de menores.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Delitos Contra las Personas:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en casos de delitos como homicidio, lesiones,
                violencia familiar y abuso.
                <br />- Orientación legal para proteger los derechos de víctimas
                y acusados en estos procesos.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Delitos Cibernéticos:
              </Typography>
              <Typography variant="body1" paragraph>
                - Orientación en casos de fraude, suplantación de identidad, y
                otros delitos cibernéticos.
                <br />- Asesoría para empresas y personas sobre cómo protegerse
                y actuar frente a este tipo de delitos.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Civil;
