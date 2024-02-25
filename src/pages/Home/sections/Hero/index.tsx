import { styled, Grid, Container, Typography, Box } from "@mui/material";
import avatar from "../../../../images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const StyledAvatarImg = styled("img")(({ theme }) => ({
    width: "90%",
    borderRadius: "50%",
    border: `11px solid ${theme.palette.primary.light}`,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box position="relative">
              <Box
                position="absolute"
                width={"150%"}
                top={"-100px"}
                left={"-200px"}
              >
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign={"center"}>
                <StyledAvatarImg src={avatar} alt="Img Avatar" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              color="primary.contrastText"
              textAlign="center"
              variant="h1"
              pb={2}
            >
              Rodrigo Grisi
            </Typography>
            <Typography
              color="primary.contrastText"
              textAlign="center"
              variant="h3"
              marginBottom={5}
            >
              Front end Developer
            </Typography>

            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="10px"
              // spacing={3}
              margin={0}
            >
              <Grid
                item
                xs={12}
                md={4.5}
                display="flex"
                justifyContent="center"
              >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
