import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

class PaydayLoanfromLender extends Component {
  render() {
    return (
	
      <div className="section2 section">
          <div className="full_container">            
            <div className="wrapper">
              <div className="image">
                <img src={require('../../Images/professional.png')}/>
              </div>
              <div className="text">
                <h2>Payday Loans From <span>Lender</span></h2>
                <p>Lender offers payday loans online, sometimes referred to as cash advances, in a number of states, including California, Florida and Michigan.</p>
                <p>Our payday loans are unsecured short-term loans, usually for less than $500.</p>
                <p>The amounts, terms and types of loans available differ according to where you live.</p>
                <p>Check out our <Link to="">Rates & Terms</Link> page to see what’s available in your state and the amounts and terms. 
</p>
                <p className="no_mb">If an online payday loan is not available in your state, you still might be able to apply for a product that suits your needs — such as a longer-term <Link to="">installment loan </Link>or a flexible <Link to="">line of credit</Link>.</p>
                <div className="apply">
                  <Link className="action" to="">Apply online for your payday advance now!</Link>
                </div>
              </div>
              
            </div>            
          </div>  
        </div>
    );
  }
}

export default PaydayLoanfromLender;
