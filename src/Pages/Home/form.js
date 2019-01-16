import React, { Component } from "react";

import { Link } from "react-router-dom";
import Validator from "validator";
import isEmpty from "lodash/isEmpty";

const emailRgx = /(^.{4,8}^$|^.*@.*\..*$)/;
const phoneno = /^\d+$/;

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "This field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "This field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "This field is required";
  }
  if (Validator.isEmpty(data.state)) {
    errors.state = "This field is required";
  }
  if (!data.phone.match(phoneno)) {
    errors.phone = "Enter valid phone no.";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameError: false,
      lastname: "",
      lastnameError: false,
      email: "",
      emailError: false,
      emailErrorStr: "Please enter valid email Id",
      phone: "",
      phoneError: false,
      state: "",
      stateError: false,
      RequiredStr: "This field is required",
      errors: {},
      isloading: false
    };
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    console.log("is valid", errors, isValid);
    if (!isValid) {
      this.setState({ errors, isloading: false });
    }
    return isValid;
  }

  handleInputChange = e => {
    let errorss = this.state.errors;
    console.log("inchnage");
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    errorss[name] = "";
  };

  handleCheckbox = () => {
    document.getElementById("terms").classList.remove("error");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isloading: true });
    if (this.isValid()) {
      if (document.getElementById("Agree").checked === false) {
        var element = document.getElementById("terms");
        element.classList.add("error");
        this.setState({ isloading: false });
        return false;
      }

      this.setState({ errors: {} });
      fetch("http://payday.enetdefender.com/api/users/application/", {
        method: "POST",
        body:
          "firstName=" +
          this.state.firstname +
          "&lastName=" +
          this.state.lastname +
          "&email=" +
          this.state.email +
          "&phone=" +
          this.state.phone +
          "&state=" +
          this.state.state,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ isloading: false });
            console.log("response:", res.status);
            this.props.history.history.push({ pathname: "/thankyou" });
          }
          res.json();
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      state,
      errors,
      isloading
    } = this.state;
    return (
      <div className="form_box">
        <form onSubmit={this.handleSubmit}>
          <div className="form_field">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={this.handleInputChange}
            />
            {errors.firstname && (
              <div className="error">
                {errors.firstname}
                <br />
              </div>
            )}
          </div>
          <div className="form_field">
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={this.handleInputChange}
            />
            {errors.lastname && (
              <div className="error">
                {errors.lastname}
                <br />
              </div>
            )}
          </div>
          <div className="form_field">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && (
              <div className="error">
                {errors.email}
                <br />
              </div>
            )}
          </div>
          <div className="form_field">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
            />
            {errors.phone && (
              <div className="error">
                {errors.phone}
                <br />
              </div>
            )}
          </div>
          <div className="form_field">
            <input
              type="text"
              placeholder="State"
              name="state"
              value={state}
              onChange={this.handleInputChange}
            />
            {errors.state && (
              <div className="error">
                {errors.state}
                <br />
              </div>
            )}
          </div>
          <div className="form_field checkbox">
            <input
              type="checkbox"
              id="Agree"
              name="agree"
              onChange={this.handleCheckbox}
            />
            <label id="terms" htmlFor="Agree">
              I have read and understand the{" "}
              <Link to="/">Terms & Conditions</Link> and{" "}
              <Link to="/">Privacy Policy</Link> of this loan and I agree to
              electronic communication.
            </label>
          </div>
          <div className="form_field submit">
            <div className="left" />
            <div className="left_after" />
            <input type="submit" value="Apply now" />
            {isloading && (
              <div className="loader">
                <img src={require("../../Images/loading.gif")} alt="loader" />
                <br />
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
