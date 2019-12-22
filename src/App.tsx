import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import Header from "./shared/Header";
import Routes from "./shared/Routes";
import { Footer } from "./shared/Footer";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <div className="container content">
      <Header />
      <main>
        <Route exact path={Routes.home} component={Home} />
        <Route path={Routes.about} component={About} />
      </main>
    </div>
    <Footer />
  </Router>
);

export default App;
