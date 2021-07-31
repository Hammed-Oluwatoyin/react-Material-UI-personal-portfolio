import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route>
                <Portfolio />
              </Route>
              <Route>
                <Resume />
              </Route>
            </Switch>
          </BrowserRouter>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
