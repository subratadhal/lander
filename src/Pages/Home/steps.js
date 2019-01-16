import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

class Steps extends Component {
  render() {
    return (
      <div className="content">
        <h1>
          Get Your <span>Payday Loan</span> online?
        </h1>
        <ul>
          <li>Quick Application</li>
          <li>Instant Decision</li>
          <li>Fast Funding</li>
        </ul>
        <p className="meta two">Advantages of Lender PayDay Loan</p>
        <div className="steps">
          <div className="step_box">
            <div className="image">
              <img src={require("../../Images/001.png")} />
            </div>
            <div className="text">
              <p>Easy Access to Your Cash</p>
              <p className="meta">
                Cash deposited directly to your bank account!
              </p>
            </div>
          </div>
          <div className="step_box">
            <div className="image">
              <img src={require("../../Images/002.png")} />
            </div>
            <div className="text">
              <p>Fast Service</p>
              <p className="meta">
                Most internet payday loans are available the NEXT business day!
              </p>
            </div>
          </div>
          <div className="step_box">
            <div className="image">
              <img src={require("../../Images/003.png")} />
            </div>
            <div className="text">
              <p>Simple Online Form</p>
              <p className="meta">
                Apply for Lender loans online quickly & easily!
              </p>
            </div>
          </div>
          <div className="step_box">
            <div className="image">
              <img src={require("../../Images/004.png")} />
            </div>
            <div className="text">
              <p>Bad Credit, No Problem!</p>
              <p className="meta">Most cases, you will find a lender!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
