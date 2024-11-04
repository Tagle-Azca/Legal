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
                El derecho civil es una rama del derecho privado que regula las relaciones jurídicas entre particulares. Se encarga de establecer las normas que rigen la vida en sociedad, abarcando aspectos como las obligaciones, los contratos, la propiedad, la familia y la sucesión. Su objetivo principal es garantizar la protección de los derechos e intereses de las personas, proporcionando un marco legal para la resolución de conflictos y la defensa de los derechos individuales.
              </Typography>
              

              <Typography variant="h4" gutterBottom sx={{ marginTop: "2rem" }}>
                Asesorías en Derecho Mercantil
              </Typography>
              <Typography variant="body1" paragraph>
                Ofrecemos servicios de asesoría en derecho civil para ayudar a los individuos y empresas a navegar por diversas situaciones legales. Algunos de los temas en los que podemos asesorarte incluyen:
              </Typography>

              <Typography variant="h6" gutterBottom>
                Contratos:
              </Typography>
              <Typography variant="body1" paragraph>
                - Redacción, revisión y negociación de contratos.<br />
                - Asesoría en la resolución de conflictos derivados de incumplimientos contractuales.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Derechos de Propiedad:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría sobre la compra, venta y arrendamiento de bienes inmuebles.<br />
                - Resolución de disputas relacionadas con la propiedad y la posesión.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Familia:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en procesos de divorcio y separación.<br />
                - Asistencia en la adopción, tutela y guarda de menores.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Sucesiones:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría en la planificación patrimonial y elaboración de testamentos.<br />
                - Orientación en procesos de sucesión y herencia.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Responsabilidad Mercantil:
              </Typography>
              <Typography variant="body1" paragraph>
                - Asesoría sobre daños y perjuicios en accidentes y otros eventos que causen daños a terceros.<br />
                - Representación legal en reclamaciones por responsabilidad civil.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Mercantil;
