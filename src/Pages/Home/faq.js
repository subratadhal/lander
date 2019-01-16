import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

class Faq extends Component {
  render() {
    return (
      <div className="section3 section">
        <div className="full_container">
          <h2>Q/A</h2>
        </div>

        <div className="full_container">
          <div className="wrapper">
            <div className="accordion_wrapper">
              <button className="accordion active">
                <p>
                  <span className="q">Q:</span>
                  <span className="q-text">
                    Can you get a cash advance online?
                  </span>
                </p>
                <span className="i">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
              <div className="panel" style={{ display: "flex" }}>
                <div className="answer_symbol">A:</div>
                <div className="answer">
                  <p>
                    For most people, a cash advance (also known as a payday
                    advance) is something associated with a credit card or other
                    line of credit. Many credit card companies make it easy for
                    customers to receive cash advances nearby by using their
                    credit card at a local ATM. The problem with such tactics is
                    that the costs of the advance can add up quickly and you
                    might not even realize what all those costs are. You'll
                    likely pay an ATM fee charged by the bank that runs the
                    machine, and you might also pay a fee to the credit card
                    company for taking the advance, along with finance charges
                    and interest if you don't pay the money back before your
                    next billing cycle. Some credit card companies charge
                    interest on cash advances that is higher than the interest
                    charged on regular balances, which can make for surprising
                    increases in your total balance.
                  </p>
                  <p>
                    If you want to experience the benefits of a cash advance
                    without the necessity to ferret out hidden expenses, you
                    might want to consider seeking a cash advance loan online.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_wrapper">
              <button className="accordion">
                <p>
                  <span className="q">Q:</span>
                  <span className="q-text">
                    How can an online company provide a cash advance?
                  </span>
                </p>
                <span className="i">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
              <div className="panel">
                <div className="answer_symbol">A:</div>
                <div className="answer">
                  <p>
                    For most people, a cash advance (also known as a payday
                    advance) is something associated with a credit card or other
                    line of credit. Many credit card companies make it easy for
                    customers to receive cash advances nearby by using their
                    credit card at a local ATM. The problem with such tactics is
                    that the costs of the advance can add up quickly and you
                    might not even realize what all those costs are. You'll
                    likely pay an ATM fee charged by the bank that runs the
                    machine, and you might also pay a fee to the credit card
                    company for taking the advance, along with finance charges
                    and interest if you don't pay the money back before your
                    next billing cycle. Some credit card companies charge
                    interest on cash advances that is higher than the interest
                    charged on regular balances, which can make for surprising
                    increases in your total balance.
                  </p>
                  <p>
                    If you want to experience the benefits of a cash advance
                    without the necessity to ferret out hidden expenses, you
                    might want to consider seeking a cash advance loan online.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_wrapper">
              <button className="accordion">
                <p>
                  <span className="q">Q:</span>
                  <span className="q-text">
                    How to applying for a cash advance from us
                  </span>
                </p>
                <span className="i">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
              <div className="panel">
                <div className="answer_symbol">A:</div>
                <div className="answer">
                  <p>
                    For most people, a cash advance (also known as a payday
                    advance) is something associated with a credit card or other
                    line of credit. Many credit card companies make it easy for
                    customers to receive cash advances nearby by using their
                    credit card at a local ATM. The problem with such tactics is
                    that the costs of the advance can add up quickly and you
                    might not even realize what all those costs are. You'll
                    likely pay an ATM fee charged by the bank that runs the
                    machine, and you might also pay a fee to the credit card
                    company for taking the advance, along with finance charges
                    and interest if you don't pay the money back before your
                    next billing cycle. Some credit card companies charge
                    interest on cash advances that is higher than the interest
                    charged on regular balances, which can make for surprising
                    increases in your total balance.
                  </p>
                  <p>
                    If you want to experience the benefits of a cash advance
                    without the necessity to ferret out hidden expenses, you
                    might want to consider seeking a cash advance loan online.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_wrapper">
              <button className="accordion">
                <p>
                  <span className="q">Q:</span>
                  <span className="q-text">
                    How to getting a cash advance with us
                  </span>
                </p>
                <span className="i">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </button>
              <div className="panel">
                <div className="answer_symbol">A:</div>
                <div className="answer">
                  <p>
                    For most people, a cash advance (also known as a payday
                    advance) is something associated with a credit card or other
                    line of credit. Many credit card companies make it easy for
                    customers to receive cash advances nearby by using their
                    credit card at a local ATM. The problem with such tactics is
                    that the costs of the advance can add up quickly and you
                    might not even realize what all those costs are. You'll
                    likely pay an ATM fee charged by the bank that runs the
                    machine, and you might also pay a fee to the credit card
                    company for taking the advance, along with finance charges
                    and interest if you don't pay the money back before your
                    next billing cycle. Some credit card companies charge
                    interest on cash advances that is higher than the interest
                    charged on regular balances, which can make for surprising
                    increases in your total balance.
                  </p>
                  <p>
                    If you want to experience the benefits of a cash advance
                    without the necessity to ferret out hidden expenses, you
                    might want to consider seeking a cash advance loan online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
