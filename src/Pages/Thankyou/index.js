import React, { Component } from "react";
import { Link } from "react-router-dom";

class Thankyou extends Component {
  render() {
    return (
      <div className="full_container thankyou">
        <div className="wrapper">
          <div className="icon">
            <i className="fa fa-check" aria-hidden="true" />
          </div>
          <div className="content">
            <h5>Thank you!</h5>
            <p>Your submission is received and we will contact you soon.</p>
            <Link to="/" className="back">
              <i className="fa fa-arrow-left" aria-hidden="true" />Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Thankyou;
