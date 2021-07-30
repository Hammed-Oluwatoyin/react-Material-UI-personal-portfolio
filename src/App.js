import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

const useStyles = makeStyles((theme) => ({
  redBackground: {
    background: "red",
  },
  blueBackground: {
    background: "blue",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Portfolio />
          <Resume />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
