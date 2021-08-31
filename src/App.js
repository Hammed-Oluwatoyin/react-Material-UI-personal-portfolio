import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row" spacing={7}>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
