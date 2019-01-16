import React, { Component } from "react";
import "./App.css";
import Header from "./Common/header";
import Thankyou from "./Pages/Thankyou";
import Home from "./Pages/Home";
import Unsubscribe from "./Pages/Unsubscribe";
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
            <Route exact path="/unsubscribe" component={Unsubscribe} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
