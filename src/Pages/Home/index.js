import React, { Component } from "react";
import Feature from "./feature";
import Banner from "./banner";
import PageArticle from "./page-article";
import Footer from "../../Common/footer";
import Navigation from "../../Common/navigation";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Navigation />
        <Feature />
        <PageArticle />
        <Footer />
      </div>
    );
  }
}

export default Home;
