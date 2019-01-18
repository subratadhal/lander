import React, { Component } from "react";
import Testimonials from "./testimonials";
import Banner from "./banner";
import Infopanel from "./infopanel"



class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Infopanel/>
        <Testimonials />
      </div>
    );
  }
}

export default Home;
