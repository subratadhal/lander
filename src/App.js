import React, { Component } from "react";
import "./App.css";
import Header from "./Common/header";
import Footer from "./Common/footer";
import Pagenavigation from "./Common/pagenavigation";
import Thankyou from "./Pages/Thankyou";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks"
import AboutUs from "./Pages/AboutUs"
import WhyChooseUs from "./Pages/WhyChooseUs"
import Questions from "./Pages/Questions"
import Definitions from "./Pages/Definitions"
import RatesAndFees from "./Pages/RatesAndFees"
import LendingPolicy from "./Pages/LendingPolicy"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsOfUse from "./Pages/TermsOfUse"
import Disclaimer from "./Pages/Disclaimer"
import Contact from "./Pages/Contact"
import Unsubscribe from "./Pages/Unsubscribe";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Offers from "./Pages/Offers";
import NewPersonalLoan from "./Pages/NewPersonalLoan";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/thankyou" component={Thankyou} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/why-choose-us" component={WhyChooseUs} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/definitions" component={Definitions} />
            <Route exact path="/rates-and-fees" component={RatesAndFees} />
            <Route exact path="/lending-policy" component={LendingPolicy} />
            <Route exact path="/unsubscribe" component={Unsubscribe} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/new-personal-loan" component={NewPersonalLoan} />

          </Switch>
          <Pagenavigation />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
