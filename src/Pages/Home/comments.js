import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

class Comments extends Component {
  render() {
    return (
	
      <div className="section4 section">
        <div className="full_container">
          <h2>What people are saying</h2>
          <div className="wrapper">
            <div className="comments_box">
              <fieldset>                
                <img className="quotes" src={require('../../Images/quotes.png')}/>
                {/*<div className="quotes">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>*/}
                <h5>Excellent</h5>                
                <p>It is leveraging technology to redefine the payday lending experience, bringing a new level of innovation and transparency to an industry that desperately needs disruption.</p>
                
                <div className="author">
                  <div className="img">
                    <img src={require('../../Images/jany.png')}/>
                  </div>
                  <span className="name">Jany<span>CEO</span></span> 
                </div>
                <p className="stars">
                  <ul>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>                  
                  </ul>
                  <span className="reviews">9.5 out of 10 based on 1,167 reviews</span>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
