import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import Header from "./shared/Header";
import Routes from "./shared/Routes";
import { Footer } from "./shared/Footer";

const App = () => (
  <Router>
    <div className="container content">
      <Header />
      <main>
        <Route exact path={Routes.home} component={Home} />
      </main>
    </div>
    <Footer />
  </Router>
);

export default App;
