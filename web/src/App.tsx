import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactUs } from "./features/contact-us/ContactUs";
import Home from "./features/home/Home";
import { Listings } from "./features/Listings/Listings";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";
import Routes from "./shared/Routes";

const App = () => (
  <Router>
    <div className="container content">
      <Header />
      <main>
        <Route exact path={Routes.home} component={Home} />
        <Route exact path={Routes.contactUs} component={ContactUs} />
        <Route exact path={Routes.listings} component={Listings} />
      </main>
    </div>
    <Footer />
  </Router>
);

export default App;
