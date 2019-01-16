import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

class Applyonline extends Component {
  render() {
    return (
	<div className="section1 section">
        <div className="full_container">
          <h2>Applying Online for a Payday Loan</h2>
          <div className="card_main">
            <div className="card_wrapper">
              <div className="card">
                <div className="image">
                  <img src={require('../../Images/step1.png')}/>
                </div>
                <div className="content">
                  <h3>Complete&nbsp;<br/>Application</h3>
                </div>
              </div>
            </div>

            <div className="card_wrapper">
              <div className="card">
                <div className="image">
                  <img src={require('../../Images/step2.png')}/>
                </div>
                <div className="content">
                  <h3>Alternative&nbsp;<br/>Credit Check</h3>
                </div>
              </div>
            </div>

            <div className="card_wrapper">
              <div className="card">
                <div className="image">
                  <img src={require('../../Images/step3.png')}/>
                </div>
                <div className="content">
                  <h3>Instant&nbsp;<br/>Decision*</h3>
                </div>
              </div>
            </div>

            <div className="card_wrapper">
              <div className="card">
                <div className="image">
                  <img src={require('../../Images/step4.png')}/>
                </div>
                <div className="content">
                  <h3>Read and Sign</h3>
                </div>
              </div>
            </div>

            <div className="card_wrapper">
              <div className="card">
                <div className="image">
                  <img src={require('../../Images/step5.png')}/>
                </div>
                <div className="content">
                  <h3>Get Funds</h3>
                </div>
              </div>
            </div>
          </div>    
        </div>
        </div>
      
    );
  }
}

export default Applyonline;
