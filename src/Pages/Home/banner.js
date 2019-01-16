import React, { Component } from "react";
import { Link } from "react-router-dom";
import CheckV2 from "../../Images/check-v2.png";
import Spiner from "../../Images/big-spinner.gif";
import NumberFormat from 'react-number-format';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import validator from "validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanAmount: "option3",
      loanDuration: "0",
      currentSlideID: "1",
      emailAddress: "",
      emailError: "",
      emailInputStyle: "",
      firstName: "",
      firstNameInputStyle: "",
      firstNameError: "",
      lastName: "",
      lastNameInputStyle: "",
      lastNameError: "",
      contactNumber: "",
      contactNumberError: "",
      contactNumberInputStyle: "",
      contactTime: "",
      month: "",
      monthError: "",
      monthInputStyle: "",
      day: "",
      dayError: "",
      dayInputStyle: "",
      year: "",
      yearError: "",
      yearInputStyle: "",
      activeMilitary: "",
      zipCode: "",
      zipCodeError: "",
      zipCodeInputStyle: "",
      streetAddress: "",
      streetAddressError: "",
      streetAddressInputStyle: "",
      city: "",
      cityError: "",
      cityInputStyle: "",
      state: "",
      stateError: "",
      stateInputStyle: "",
      howLongLived: "",
      ownYourHome: "",
      incomeSource: "",
      timeEmployed: "",
      iGetPaid: "",
      monthlyGrossIncome: "",
      nextPayDate: new Date(),
      nextPayDateError: '',
      nextPayDateInputStyle: "",
      employerName: "",
      employerNameError: "",
      employerNameInputStyle: "",
      employerPhoneNumber: "",
      employerPhoneNumberError: "",
      employerPhoneNumberInputStyle: "",
      driversLicenseOrStateID: "",
      driversLicenseOrStateIDError: "",
      driversLicenseOrStateIDInputStyle: "",
      licenseState: "",
      licenseStateError: "",
      licenseStateInputStyle: "",
      socialSecurityNumber: "",
      socialSecurityNumberError: "",
      socialSecurityNumberInputStyle: "",
      ABARoutingNumber: "",
      ABARoutingNumberError: "",
      ABARoutingNumberInputStyle: "",
      bankName: "",
      bankNameError: "",
      bankNameInputStyle: "",
      bankAccountNumber: "",
      bankAccountNumberError: "",
      bankAccountNumberInputStyle: "",
      directDeposit: "",
      lengthOfBankAccount: "",
      bankAccountType: "",
      loanReason: "",
      moreInCreditCardDebt: "",
      moreInUnsecuredDebt: "",
      affordAggregatedMonthlyPayment: "",

      maxSlider: "34",
      progressValue: "2",
      progressView: true,
      popup: false,
      popupNoThankYou: false,
      popupOffer: false,
      previewButtonView: false,
      modal: false,
      deadline: 200000,
      minutes: 0,
      seconds: 0,
      cancelTimer: false
    }
  }
  handlePreview = (e) => {
    var id = e.target.id;
    document.getElementById(id).disabled = true;
    const c = this.state.currentSlideID;
    if (c >= 2) {
      const c1 = parseInt(this.state.currentSlideID) - 1;
      document.getElementById("slide" + c).classList.add("next");
      document.getElementById("slide" + c1).classList.add("current");
      document.getElementById("slide" + c).classList.remove("active");
      setTimeout(function () {
        document.getElementById("slide" + c).classList.remove("next");
        document.getElementById("slide" + c1).classList.add("active");
        document.getElementById("slide" + c1).classList.remove("current");
        document.getElementById("slide" + c1).classList.remove("previous");
        if (c !== 2) {
          document.getElementById(id).disabled = false;
        }
      }, 1000);
      const p = parseInt(this.state.progressValue) - 3;
      this.setState({
        currentSlideID: c1,
        progressValue: p
      });
    }
    if (c === 2) {
      this.setState({
        previewButtonView: false
      });
    }


  };
  handleNext = () => {
    const c = this.state.currentSlideID;
    if (c < this.state.maxSlider) {
      const c1 = parseInt(this.state.currentSlideID) + 1;
      document.getElementById("slide" + c).classList.add("previous");
      document.getElementById("slide" + c1).classList.add("current");
      setTimeout(function () {
        document.getElementById("slide" + c).classList.remove("active");
        document.getElementById("slide" + c1).classList.add("active");
        document.getElementById("slide" + c1).classList.remove("current");
      }, 1000);
      const p = parseInt(this.state.progressValue) + 3;
      this.setState({
        currentSlideID: c1,
        progressValue: p
      });
    }
  };
  slide1OptionChange = e => {
    this.setState({
      loanAmount: e.target.value,
      previewButtonView: true
    });

    const classes = document.getElementsByClassName("slide1-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
    console.log('slide click', e);
  };
  slide2OptionChange = e => {
    this.setState({
      loanDuration: e.target.value
    });
    const classes = document.getElementsByClassName("slide2-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide3EmailAddressOnClick = e => {
    const email = document.getElementById("email");
    if (validator.isEmpty(email.value)) {
      this.setState({
        emailError: "Email address is required",
        emailInputStyle: "error"
      });
    } else {
      if (validator.isEmail(email.value)) {
        this.setState({
          emailError: "",
          emailAddress: email.value,
          emailInputStyle: "success"
        });
        this.handleNext();
      } else {
        this.setState({
          emailError: "Invalid email address",
          emailInputStyle: "error"
        });
      }
    }
  };
  slide3EmailAddressOnChange = e => {
    const email = e.target.value;
    if (validator.isEmpty(email)) {
      this.setState({
        emailError: "Email address is required",
        emailInputStyle: "error"
      });
    } else {
      if (validator.isEmail(email)) {
        this.setState({
          emailError: "",
          emailAddress: email,
          emailInputStyle: "success"
        });
      } else {
        this.setState({
          emailError: "Invalid email address",
          emailInputStyle: "error"
        });
      }
    }
  };
  slide4FirstNameOnChange = e => {
    const firstName = e.target.value;
    if (validator.isEmpty(firstName)) {
      this.setState({
        Error: "First Name is required",
        firstNameInputStyle: "error"
      });
    } else {
      var regexp1 = new RegExp("^[^0-9]+$");
      if (!regexp1.test(firstName)) {
        this.setState({
          firstNameError: "Number not allowed",
          firstNameInputStyle: "error"
        });
      } else {
        this.setState({
          firstNameError: "",
          firstName: firstName,
          firstNameInputStyle: "success"
        });
      }
    }
  };
  slide4LastNameOnChange = e => {
    const lastName = e.target.value;
    if (validator.isEmpty(lastName)) {
      this.setState({
        lastNameError: "Last Name is required",
        lastNameInputStyle: "error"
      });
    } else {
      var regexp1 = new RegExp("^[^0-9]+$");
      if (!regexp1.test(lastName)) {
        this.setState({
          lastNameError: "Number not allowed",
          lastNameInputStyle: "error"
        });
      } else {
        this.setState({
          lastNameError: "",
          lastName: lastName,
          lastNameInputStyle: "success"
        });
      }
    }
  };
  slide4FirstNameLastNameOnClick = e => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");

    if (
      validator.isEmpty(firstName.value) ||
      validator.isEmpty(lastName.value)
    ) {
      if (validator.isEmpty(lastName.value)) {
        this.setState({
          lastNameError: "Last Name is required",
          lastNameInputStyle: "error"
        });
      }
      if (validator.isEmpty(firstName.value)) {
        this.setState({
          firstNameError: "First Name is required",
          firstNameInputStyle: "error"
        });
      }
    } else {
      this.setState({
        firstNameError: "",
        firstName: firstName.value,
        firstNameInputStyle: "success",
        lastNameError: "",
        lastName: lastName.value,
        lastNameInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide5ContactNumberOnClick = e => {
    const contactNumber = this.state.contactNumber;
    if (validator.isEmpty(contactNumber)) {
      this.setState({
        contactNumberError: "Contact Number is required",
        contactNumber: contactNumber,
        contactNumberInputStyle: "error"
      });
    } else {
      if (contactNumber.length > 9) {
        this.setState({
          contactNumberError: "",
          contactNumber: contactNumber,
          contactNumberInputStyle: "success"
        });
        this.handleNext();
      } else {
        this.setState({
          contactNumberError: "This is not a valid contact numner",
          contactNumber: contactNumber,
          contactNumberInputStyle: "error"
        });
      }
    }
  };
  slide5ContactNumberOnChange = (val) => {
    const contactNumber = val.value;
    if (validator.isEmpty(contactNumber)) {
      this.setState({
        contactNumberError: "Contact Number is required",
        contactNumber: contactNumber,
        contactNumberInputStyle: "error"
      });
    } else {
      if (contactNumber.length > 9) {
        this.setState({
          contactNumberError: "",
          contactNumber: contactNumber,
          contactNumberInputStyle: "success"
        });
      } else {
        this.setState({
          contactNumberError: "This is not a valid contact numner",
          contactNumber: contactNumber,
          contactNumberInputStyle: "error"
        });
      }
    }
  };
  slide6OptionChange = e => {
    this.setState({
      contactTime: e.target.value
    });
    const classes = document.getElementsByClassName("slide6-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide7MonthOnChange = e => {
    const month = e.target.value;
    if (validator.isEmpty(month)) {
      this.setState({
        monthError: "Month is required",
        monthInputStyle: "error"
      });
    } else {
      this.setState({
        monthError: "",
        month: month,
        monthInputStyle: "success"
      });
    }
  };
  slide7DayOnChange = e => {
    const day = e.target.value;
    if (validator.isEmpty(day)) {
      this.setState({
        dayError: "Day is required",
        dayInputStyle: "error"
      });
    } else {
      this.setState({
        dayError: "",
        day: day,
        dayInputStyle: "success"
      });
    }
  };
  slide7YearOnChange = e => {
    const year = e.target.value;
    if (validator.isEmpty(year)) {
      this.setState({
        yearError: "Year is required",
        yearInputStyle: "error"
      });
    } else {
      this.setState({
        yearError: "",
        year: year,
        yearInputStyle: "success"
      });
    }
  };
  slide7DOBOnClick = e => {
    const month = document.getElementById("month");
    const day = document.getElementById("day");
    const year = document.getElementById("year");
    if (
      validator.isEmpty(month.value) ||
      validator.isEmpty(day.value) ||
      validator.isEmpty(year.value)
    ) {
      if (validator.isEmpty(month.value)) {
        this.setState({
          monthError: "Month is required",
          monthInputStyle: "error"
        });
      }
      if (validator.isEmpty(day.value)) {
        this.setState({
          dayError: "Day is required",
          dayInputStyle: "error"
        });
      }
      if (validator.isEmpty(year.value)) {
        this.setState({
          yearError: "Year is required",
          yearInputStyle: "error"
        });
      }
    } else {
      this.setState({
        monthError: "",
        month: month.value,
        monthInputStyle: "success",
        dayError: "",
        day: day.value,
        dayInputStyle: "success",
        yearError: "",
        year: year.value,
        yearInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide8OptionChange = e => {
    this.setState({
      activeMilitary: e.target.value
    });
    const classes = document.getElementsByClassName("slide8-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide9zipCodeOnClick = e => {
    const zipCode = document.getElementById("zipCode");
    if (validator.isEmpty(zipCode.value)) {
      this.setState({
        zipCodeError: "Zip Code is required",
        zipCodeInputStyle: "error"
      });
    } else {
      var regexp1 = new RegExp("^[^0-9]+$");
      if (!regexp1.test(zipCode.value)) {
        if (validator.isLength(zipCode.value, { min: 5, max: undefined })) {
          this.setState({
            zipCodeError: "",
            zipCode: zipCode.value,
            zipCodeInputStyle: "success"
          });
          this.handleNext();
        } else {
          this.setState({
            zipCodeError: "Please enter at least 5 characters.",
            zipCodeInputStyle: "error"
          });
        }
      } else {
        this.setState({
          zipCodeError: "Please enter at number only.",
          zipCodeInputStyle: "error"
        });
      }
    }
  };
  slide9zipCodeOnChange = e => {
    const zipCode = e.target.value;
    if (validator.isEmpty(zipCode)) {
      this.setState({
        zipCodeError: "Zip Code is required",
        zipCodeInputStyle: "error"
      });
    } else {
      var regexp1 = new RegExp("^[^0-9]+$");
      if (!regexp1.test(zipCode)) {
        if (validator.isLength(zipCode, { min: 5, max: undefined })) {
          this.setState({
            zipCodeError: "",
            zipCode: zipCode,
            zipCodeInputStyle: "success"
          });
        } else {
          this.setState({
            zipCodeError: "Please enter at least 5 characters.",
            zipCodeInputStyle: "error"
          });
        }
      } else {
        this.setState({
          zipCodeError: "Please enter at number only.",
          zipCodeInputStyle: "error"
        });
      }
    }
  };
  slide10streetAddressOnChange = e => {
    const streetAddres = e.target.value;
    if (validator.isEmpty(streetAddres)) {
      this.setState({
        streetAddressError: "Street Addres is required",
        streetAddressInputStyle: "error"
      });
    } else {
      this.setState({
        streetAddressError: "",
        streetAddress: streetAddres,
        streetAddressInputStyle: "success"
      });
    }
  };
  slide10cityOnChange = e => {
    const city = e.target.value;
    if (validator.isEmpty(city)) {
      this.setState({
        cityError: "City is required",
        cityInputStyle: "error"
      });
    } else {
      this.setState({
        cityError: "",
        city: city,
        cityInputStyle: "success"
      });
    }
  };
  slide10stateOnChange = e => {
    const state = e.target.value;
    if (validator.isEmpty(state)) {
      this.setState({
        stateError: "State is required",
        stateInputStyle: "error"
      });
    } else {
      this.setState({
        stateError: "",
        state: state,
        stateInputStyle: "success"
      });
    }
  };
  slide10HomeAddressOnClick = e => {
    const streetAddress = document.getElementById("streetAddress");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    if (
      validator.isEmpty(streetAddress.value) ||
      validator.isEmpty(city.value) ||
      validator.isEmpty(state.value)
    ) {
      if (validator.isEmpty(streetAddress.value)) {
        this.setState({
          streetAddressError: "Street Addres is required",
          streetAddressInputStyle: "error"
        });
      }
      if (validator.isEmpty(city.value)) {
        this.setState({
          cityError: "City is required",
          cityInputStyle: "error"
        });
      }
      if (validator.isEmpty(state.value)) {
        this.setState({
          stateError: "State is required",
          stateInputStyle: "error"
        });
      }
    } else {
      this.setState({
        streetAddressError: "",
        streetAddress: streetAddress.value,
        streetAddressInputStyle: "success",
        cityError: "",
        city: city.value,
        cityInputStyle: "success",
        stateError: "",
        state: state.value,
        stateInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide11OptionChange = e => {
    this.setState({
      howLongLived: e.target.value
    });
    const classes = document.getElementsByClassName("slide11-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide12OptionChange = e => {
    this.setState({
      ownYourHome: e.target.value
    });
    const classes = document.getElementsByClassName("slide12-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide13OptionChange = e => {
    this.setState({
      incomeSource: e.target.value
    });
    const classes = document.getElementsByClassName("slide13-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide14OptionChange = e => {
    this.setState({
      timeEmployed: e.target.value
    });
    const classes = document.getElementsByClassName("slide14-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide15OptionChange = e => {
    this.setState({
      iGetPaid: e.target.value
    });
    const classes = document.getElementsByClassName("slide15-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide16OptionChange = e => {
    this.setState({
      monthlyGrossIncome: e.target.value
    });
    const classes = document.getElementsByClassName("slide16-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.handleNext();
  };
  slide17nextPayDateOnChange = (date) => {
    if (date !== null) {
      this.setState({
        nextPayDateError: "",
        nextPayDate: date,
        nextPayDateInputStyle: "success"
      });
      //this.handleNext();
    }
  }

  slide17nextPayDateOnClick = e => {
    document.getElementById("nextPayDate").readOnly = true;
    e.preventDefault();
  }
  slide18employerNameOnChange = e => {
    const employerName = e.target.value;
    if (validator.isEmpty(employerName)) {
      this.setState({
        employerNameError: "Employer Name is required",
        employerNameInputStyle: "error"
      });
    } else {
      var regexp1 = new RegExp("^[^0-9]+$");
      if (!regexp1.test(employerName)) {
        this.setState({
          employerNameError: "Number not allowed",
          employerNameInputStyle: "error"
        });
      } else {
        this.setState({
          employerNameError: "",
          employerName: employerName,
          employerNameInputStyle: "success"
        });
      }
    }
  };
  slide18employerNameOnClick = e => {
    const employerName = document.getElementById("employerName");
    if (validator.isEmpty(employerName.value)) {
      this.setState({
        employerNameError: "Employer Name is required",
        employerNameInputStyle: "error"
      });
    } else {
      this.setState({
        employerNameError: "",
        employerName: employerName.value,
        employerNameInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide19employerPhoneNumberOnClick = (e) => {
    const employerPhoneNumber = this.state.employerPhoneNumber;
    if (validator.isEmpty(employerPhoneNumber)) {
      this.setState({
        employerPhoneNumberError: "Employer Phone Number is required",
        employerPhoneNumber: employerPhoneNumber,
        employerPhoneNumberInputStyle: "error"
      });
    } else {
      if (employerPhoneNumber.length > 9) {
        this.setState({
          employerPhoneNumberError: "",
          employerPhoneNumber: employerPhoneNumber,
          employerPhoneNumberInputStyle: "success"
        });
        this.handleNext();
      } else {
        this.setState({
          employerPhoneNumberError: "This is not a valid phone numner",
          employerPhoneNumber: employerPhoneNumber,
          employerPhoneNumberInputStyle: "error"
        });
      }
    }
  };
  slide19employerPhoneNumberOnChange = (val) => {
    const employerPhoneNumber = val.value;
    if (validator.isEmpty(employerPhoneNumber)) {
      this.setState({
        employerPhoneNumberError: "Employer Phone Number is required",
        employerPhoneNumber: employerPhoneNumber,
        employerPhoneNumberInputStyle: "error"
      });
    } else {
      if (employerPhoneNumber.length > 9) {
        this.setState({
          employerPhoneNumberError: "",
          employerPhoneNumber: employerPhoneNumber,
          employerPhoneNumberInputStyle: "success"
        });
      } else {
        this.setState({
          employerPhoneNumberError: "This is not a valid phone numner",
          employerPhoneNumber: employerPhoneNumber,
          employerPhoneNumberInputStyle: "error"
        });
      }
    }
  };
  slide20driversLicenseOrStateIDOnChange = e => {
    const driversLicenseOrStateID = e.target.value;
    if (validator.isEmpty(driversLicenseOrStateID)) {
      this.setState({
        driversLicenseOrStateIDError: "Drivers License or State ID is required",
        driversLicenseOrStateIDInputStyle: "error"
      });
    } else {
      if (driversLicenseOrStateID.length >= 6) {
        this.setState({
          driversLicenseOrStateIDError: "",
          driversLicenseOrStateID: driversLicenseOrStateID,
          driversLicenseOrStateIDInputStyle: "success"
        });
      } else {
        this.setState({
          driversLicenseOrStateIDError: "Please enter at least 6 characters.",
          driversLicenseOrStateIDInputStyle: "error"
        });
      }
    }
  };
  slide20driversLicenseOrStateIDOnClick = e => {
    const ds = document.getElementById("driversLicenseOrStateID");
    const driversLicenseOrStateID = ds.value;
    if (validator.isEmpty(driversLicenseOrStateID)) {
      this.setState({
        driversLicenseOrStateIDError: "Drivers License or State ID is required",
        driversLicenseOrStateIDInputStyle: "error"
      });
    } else {
      if (driversLicenseOrStateID.length >= 6) {
        this.setState({
          driversLicenseOrStateIDError: "",
          driversLicenseOrStateID: driversLicenseOrStateID,
          driversLicenseOrStateIDInputStyle: "success"
        });
        this.handleNext();
      } else {
        this.setState({
          driversLicenseOrStateIDError: "Please enter at least 6 characters.",
          driversLicenseOrStateIDInputStyle: "error"
        });
      }
    }
  };
  slide21licenseStateOnChange = e => {
    const licenseState = e.target.value;
    if (validator.isEmpty(licenseState)) {
      this.setState({
        licenseStateError: "License State is required",
        licenseStateInputStyle: "error"
      });
    } else {
      this.setState({
        licenseStateError: "",
        licenseState: licenseState,
        licenseStateInputStyle: "success"
      });
    }
  };
  slide21licenseStateOnClick = e => {
    const licenseState = document.getElementById("licenseState");
    if (validator.isEmpty(licenseState.value)) {
      this.setState({
        licenseStateError: "License State is required",
        licenseStateInputStyle: "error"
      });
    } else {
      this.setState({
        licenseStateError: "",
        licenseState: licenseState.value,
        licenseStateInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide22socialSecurityNumberOnChange = e => {
    const socialSecurityNumber = e.target.value;
    if (validator.isEmpty(socialSecurityNumber)) {
      this.setState({
        socialSecurityNumberError: "Social Security Number is required",
        socialSecurityNumberInputStyle: "error"
      });
    } else {
      this.setState({
        socialSecurityNumberError: "",
        socialSecurityNumber: socialSecurityNumber,
        socialSecurityNumberInputStyle: "success"
      });
    }
  };
  slide22socialSecurityNumberOnClick = e => {
    const socialSecurityNumber = document.getElementById("socialSecurityNumber");
    if (validator.isEmpty(socialSecurityNumber.value)) {
      this.setState({
        socialSecurityNumberError: "Social Security Number is required",
        socialSecurityNumberInputStyle: "error"
      });
    } else {
      this.setState({
        socialSecurityNumberError: "",
        socialSecurityNumber: socialSecurityNumber.value,
        socialSecurityNumberInputStyle: "success"
      });
      this.handleNext();
    }
  };
  slide23ABARoutingNumberOnClick = (e) => {
    const ABARoutingNumber = this.state.ABARoutingNumber;
    if (validator.isEmpty(ABARoutingNumber)) {
      this.setState({
        ABARoutingNumberError: "ABA Routing Number is required",
        ABARoutingNumber: ABARoutingNumber,
        ABARoutingNumberInputStyle: "error"
      });
    } else {
      if (ABARoutingNumber.length > 8) {
        this.setState({
          ABARoutingNumberError: "",
          ABARoutingNumber: ABARoutingNumber,
          ABARoutingNumberInputStyle: "success"
        });
        this.handleNext();
      } else {
        this.setState({
          ABARoutingNumberError: "Please enter at least 9 characters.",
          ABARoutingNumber: ABARoutingNumber,
          ABARoutingNumberInputStyle: "error"
        });
      }
    }
  };
  slide23ABARoutingNumberOnChange = (e) => {
    const ABARoutingNumber = e.target.value;
    if (validator.isEmpty(ABARoutingNumber)) {
      this.setState({
        ABARoutingNumberError: "ABA Routing Number is required",
        ABARoutingNumber: ABARoutingNumber,
        ABARoutingNumberInputStyle: "error"
      });
    } else {
      console.log(ABARoutingNumber.length);
      if (ABARoutingNumber.length > 8) {
        this.setState({
          ABARoutingNumberError: "",
          ABARoutingNumber: ABARoutingNumber,
          ABARoutingNumberInputStyle: "success"
        });
      } else {
        this.setState({
          ABARoutingNumberError: "Please enter at least 9 characters.",
          ABARoutingNumber: ABARoutingNumber,
          ABARoutingNumberInputStyle: "error"
        });
      }
    }
  };
  slide24bankNameOnChange = e => {
    const bankName = e.target.value;
    if (validator.isEmpty(bankName)) {
      this.setState({
        bankNameError: "Bank Name is required",
        bankNameInputStyle: "error"
      });
    } else {
      this.setState({
        bankNameError: "",
        bankName: bankName,
        bankNameInputStyle: "success"
      });
    }
  }
  slide24bankAccountNumberOnChange = e => {
    const bankAccountNumber = e.target.value;
    if (validator.isEmpty(bankAccountNumber)) {
      this.setState({
        bankAccountNumberError: "Bank Name is required",
        bankAccountNumberInputStyle: "error"
      });
    } else {
      this.setState({
        bankAccountNumberError: "",
        bankAccountNumber: bankAccountNumber,
        bankAccountNumberInputStyle: "success"
      });
    }
  }
  slide24bankingInformationOnClick = e => {
    const bankAccountNumber = document.getElementById("bankAccountNumber");
    const bankName = document.getElementById("bankName");
    if (
      validator.isEmpty(bankAccountNumber.value) ||
      validator.isEmpty(bankName.value)
    ) {
      if (validator.isEmpty(bankAccountNumber.value)) {
        this.setState({
          bankAccountNumberError: "Bank Account Number is required",
          bankAccountNumberInputStyle: "error"
        });
      }
      if (validator.isEmpty(bankName.value)) {
        this.setState({
          bankNameError: "Bank Name is required",
          bankNameInputStyle: "error"
        });
      }
    } else {
      this.setState({
        bankAccountNumberError: "",
        bankAccountNumber: bankAccountNumber.value,
        bankAccountNumberInputStyle: "success",
        bankNameError: "",
        bankName: bankName.value,
        bankNameInputStyle: "success"
      });
      this.handleNext();
    }
  }
  slide25OptionChange = e => {
    this.setState({
      directDeposit: e.target.value
    });

    const classes = document.getElementsByClassName("slide25-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide26OptionChange = e => {
    this.setState({
      lengthOfBankAccount: e.target.value
    });

    const classes = document.getElementsByClassName("slide26-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide27OptionChange = e => {
    this.setState({
      bankAccountType: e.target.value
    });

    const classes = document.getElementsByClassName("slide27-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide28OptionChange = e => {
    this.setState({
      lengthOfBankAccount: e.target.value
    });
    const classes = document.getElementsByClassName("slide28-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide29OptionChange = e => {
    this.setState({
      loanReason: e.target.value
    });
    const classes = document.getElementsByClassName("slide29-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide30OptionChange = e => {
    this.setState({
      moreInCreditCardDebt: e.target.value
    });
    const classes = document.getElementsByClassName("slide30-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide31OptionChange = e => {
    this.setState({
      moreInUnsecuredDebt: e.target.value
    });
    const classes = document.getElementsByClassName("slide31-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide32OptionChange = e => {
    this.setState({
      affordAggregatedMonthlyPayment: e.target.value
    });
    const classes = document.getElementsByClassName("slide32-radio");
    var i;
    for (i = 0; i < classes.length; i++) {
      classes[i].classList.remove("active");
    }
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");

    this.handleNext();
  };
  slide33finishFormOnClick = () => {
    this.setState({
      popup: true
    });
    this.popupAction("next");
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    this.resetTimer();
  }
  popupAction = (val) => {
    var self = this;
    var i = 1;
    setTimeout(function () {
      document.getElementById("popupStep1").classList.add("active");
    }, 500);
    var x = setInterval(function () {
      if (i === 4) {
        clearInterval(x);
        self.setState({
          popup: false,
          progressView: false
        });
        if (val === "next") {
          self.handleNext();
        } else if (val === "offer") {
          self.setState({
            popupOffer: true
          });
          setTimeout(function () {
            window.location.replace('http://www.google.com')
          }, 5000);
        } else {

        }
      } else {
        var j = i + 1;
        document.getElementById("popupStep" + i).classList.add("success");
        if (j < 5) {
          document.getElementById("popupStep" + j).classList.add("active");
        }
        i = i + 1;
        if (i === 4) {
          document.getElementById("popupMsg").classList.add("on");
        }

      }
    }, 2500);
  }
  slide34ClickToContinueOnClick = () => {
    this.setState({
      popup: true
    });
    this.popupAction("offer");
  }
  slide34noThanksOnClick = () => {
    this.setState({
      popupNoThankYou: true
    });
  }
  handleNoThankYou = () => {
    this.setState({
      popupNoThankYou: false
    });
  }
  handleShowOffers = () => {
    this.setState({
      popup: true,
      popupNoThankYou: false
    });
    this.popupAction("offer");
  }
  termandConditionTriggerClick = (e) => {
    e.preventDefault();
    var el = document.getElementById('termandcondition');
    el.click();
  }
  privacyPolicyTriggerClick = (e) => {
    e.preventDefault();
    var el = document.getElementById('privacypolicy');
    el.click();
  }
  ratesFeesonTriggerClick = (e) => {
    e.preventDefault();
    var el = document.getElementById('loanratefees');
    el.click();
  }
  confirmPopupOpen = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="popup">
            <div className="popup-inner small-popup">
              <div className="popup-header">
                <h4>Lender.page says</h4>
              </div>
              <div className="popup-content">
                <p>Time's up. Do you need more time?</p>
                <button className="btn btn-secondary" onClick={() => {
                  this.setState({
                    deadline: 200000,
                    cancelTimer: true
                  });
                  onClose();
                }}>No</button>
                <button className="btn btn-primary" onClick={() => {
                  this.resetTimer();
                  onClose();
                }}>Yes</button>
              </div>
            </div>
          </div>
        )
      }
    })
  }
  toggleEConsent = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentWillMount() {
    this.getTimeUntil(this.state.deadline);
  }
  // componentDidMount() {
  //   setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  //   this.resetTimer();
  // }

  leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  }
  resetTimer = () => {
    var d1 = new Date(),
      d2 = new Date(d1);
    d2.setMinutes(d1.getMinutes() + 10);
    this.setState({ deadline: d2 });
  }
  getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ minutes: 0, seconds: 0 });
      this.confirmPopupOpen();
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      this.setState({ minutes, seconds });
    }
  }

  componentDidMount() {
    const datePicker = document.getElementById("nextPayDate");
    datePicker.setAttribute("readOnly", true);
  }


  render() {
    console.log("this.state", this.state);
    const progress = this.state.progressValue;
    const progressView = this.state.progressView;
    const emailError = this.state.emailError;
    const emailInputStyle = this.state.emailInputStyle;
    const firstNameError = this.state.firstNameError;
    const firstNameInputStyle = this.state.firstNameInputStyle;
    const lastNameError = this.state.lastNameError;
    const lastNameInputStyle = this.state.lastNameInputStyle;
    const contactNumberError = this.state.contactNumberError;
    const contactNumberInputStyle = this.state.contactNumberInputStyle;
    const monthError = this.state.monthError;
    const monthInputStyle = this.state.monthInputStyle;
    const dayError = this.state.dayError;
    const dayInputStyle = this.state.dayInputStyle;
    const yearError = this.state.yearError;
    const yearInputStyle = this.state.yearInputStyle;
    const zipCodeError = this.state.zipCodeError;
    const zipCodeInputStyle = this.state.zipCodeInputStyle;
    const streetAddressError = this.state.streetAddressError;
    const streetAddressInputStyle = this.state.streetAddressInputStyle;
    const cityError = this.state.cityError;
    const cityInputStyle = this.state.cityInputStyle;
    const stateError = this.state.stateError;
    const stateInputStyle = this.state.stateInputStyle;
    const nextPayDateError = this.state.nextPayDateError;
    const nextPayDateInputStyle = this.state.nextPayDateInputStyle;
    const employerNameError = this.state.employerNameError;
    const employerNameInputStyle = this.state.employerNameInputStyle;
    const employerPhoneNumberError = this.state.employerPhoneNumberError;
    const employerPhoneNumberInputStyle = this.state.employerPhoneNumberInputStyle;
    const driversLicenseOrStateIDError = this.state.driversLicenseOrStateIDError;
    const driversLicenseOrStateIDInputStyle = this.state.driversLicenseOrStateIDInputStyle;
    const licenseStateError = this.state.licenseStateError;
    const licenseStateInputStyle = this.state.licenseStateInputStyle;
    const socialSecurityNumberError = this.state.socialSecurityNumberError;
    const socialSecurityNumberInputStyle = this.state.socialSecurityNumberInputStyle;
    const ABARoutingNumberError = this.state.ABARoutingNumberError;
    const ABARoutingNumberInputStyle = this.state.ABARoutingNumberInputStyle;
    const bankNameError = this.state.bankNameError;
    const bankNameInputStyle = this.state.bankNameInputStyle;
    const bankAccountNumberError = this.state.bankAccountNumberError;
    const bankAccountNumberInputStyle = this.state.bankAccountNumberInputStyle;
    const popup = this.state.popup;
    const popupNoThankYou = this.state.popupNoThankYou;
    const popupOffer = this.state.popupOffer;
    const previewButtonView = this.state.previewButtonView;
    const reset = this.state.reset;
    const minutes = this.state.minutes;
    const cancelTimer = this.state.cancelTimer;
    return (
      <div className="banner-section">
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm="8">

              {progressView ? (
                <div className="progress-bar-container">
                  {previewButtonView ? (
                    <Button
                      id="backButton"
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}> back
                  </Button>
                  ) : (
                      ""
                    )}

                  <progress value={progress} max="100" />
                  <div className="progress-value">{progress}%</div>
                </div>
              ) : (
                  ""
                )}
            </Col>
            <Col sm="8">
              <div className="apply-form-container">
                <Form className="apply-form">
                  <div className="steps " id="slide1">
                    <div className="welcome-text">
                      You can get a loan between{" "}
                      <strong>$100 and $35,000</strong>
                      for any reason, whether it be to pay for a vehicle repair,
                      home improvement expense, or even a vacation
                    </div>
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How much do you need?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide1-radio"
                          id="slide1-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide1-radio1"
                            value="$100 - $500"
                            id="slide1-radio1"
                            checked={this.state.loanAmount === "option1"}
                            onChange={this.slide1OptionChange}
                            onClick={this.slide1OptionChange}
                          />
                          $100 - $500
                        </Label>
                        <Label
                          check
                          className="slide1-radio "
                          id="slide1-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide1-radio1"
                            value="$500 - $1000"
                            id="slide1-radio2"
                            checked={this.state.loanAmount === "option2"}
                            onChange={this.slide1OptionChange}
                            onClick={this.slide1OptionChange}
                          />
                          $500 - $1000
                        </Label>
                        <Label
                          check
                          className="slide1-radio "
                          id="slide1-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide1-radio1"
                            value="$1000 - $2500"
                            id="slide1-radio3"
                            checked={this.state.loanAmount === "option3"}
                            onChange={this.slide1OptionChange}
                            onClick={this.slide1OptionChange}
                          />
                          $1000 - $2500
                        </Label>
                        <Label
                          check
                          className="slide1-radio "
                          id="slide1-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide1-radio1"
                            value="$2500 - $5000"
                            id="slide1-radio4"
                            checked={this.state.loanAmount === "option4"}
                            onChange={this.slide1OptionChange}
                            onClick={this.slide1OptionChange}
                          />
                          $2500 - $5000
                        </Label>
                        <Label
                          check
                          className="slide1-radio "
                          id="slide1-radio5-level"
                        >
                          <Input
                            type="radio"
                            name="slide1-radio1"
                            value="$5000 and over"
                            id="slide1-radio5"
                            checked={this.state.loanAmount === "option4"}
                            onChange={this.slide1OptionChange}
                            onClick={this.slide1OptionChange}
                          />
                          $5000 and over
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide2">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How long do you need to pay it back?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide2-radio"
                          id="slide2-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide2-radio1"
                            value="1 - 3 Months"
                            id="slide2-radio1"
                            checked={this.state.loanDuration === "option1"}
                            onChange={this.slide2OptionChange}
                          />
                          1 - 3 Months
                        </Label>
                        <Label
                          check
                          className="slide2-radio"
                          id="slide2-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide2-radio1"
                            value="3 - 6 Months"
                            id="slide2-radio2"
                            checked={this.state.loanDuration === "option2"}
                            onChange={this.slide2OptionChange}
                          />
                          3 - 6 Months
                        </Label>
                        <Label
                          check
                          className="slide2-radio"
                          id="slide2-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide2-radio1"
                            value="6 - 12 Months"
                            id="slide2-radio3"
                            checked={this.state.loanDuration === "option3"}
                            onChange={this.slide2OptionChange}
                          />
                          6 - 12 Months
                        </Label>
                        <Label
                          check
                          className="slide2-radio"
                          id="slide2-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide2-radio1"
                            value="1 - 2 Years"
                            id="slide2-radio4"
                            checked={this.state.loanDuration === "option4"}
                            onChange={this.slide2OptionChange}
                          />
                          1 - 2 Years
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide3">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Email Address
                      </h3>
                      <p>Where to send your loan request confirmation</p>
                      <FormGroup>
                        <Label for="email" className="bold">
                          Email
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="nope"
                          placeholder="Email Address"
                          onChange={this.slide3EmailAddressOnChange}
                          className={emailInputStyle}
                        />
                        {emailError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {emailError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <small>
                        By clicking "Next", you agree to our
                        <span className="anchor" onClick={this.termandConditionTriggerClick} > Terms &amp; Conditions </span>
                        and <span className="anchor" onClick={this.privacyPolicyTriggerClick}> Privacy Policy </span> and
                        to receive important notices and other communications
                        electronically.
                      </small>
                      <Button
                        onClick={this.slide3EmailAddressOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide4">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Your Name
                      </h3>
                      <p>
                        Entering your full legal name may increase your chances
                        of approval
                      </p>
                      <FormGroup>
                        <Label for="firstName" className="bold">
                          First Name
                        </Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="nope"
                          placeholder="First Name"
                          onChange={this.slide4FirstNameOnChange}
                          className={firstNameInputStyle}
                        />
                        {firstNameError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {firstNameError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <FormGroup>
                        <Label for="lastName" className="bold">
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="nope"
                          placeholder="Last Name"
                          onChange={this.slide4LastNameOnChange}
                          className={lastNameInputStyle}
                        />
                        {lastNameError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {lastNameError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>

                      <Button
                        onClick={this.slide4FirstNameLastNameOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide5">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Phone Number
                      </h3>
                      <p>
                        Why do we require? Some lenders will quickly confirm
                        your request by phone.
                      </p>

                      <FormGroup>
                        <Label for="contactNumber" className="bold">
                          Contact Number
                        </Label>
                        <NumberFormat
                          id="contactNumber"
                          placeholder="xxx-xxx-xxxx"
                          onValueChange={this.slide5ContactNumberOnChange}
                          format="###-###-####"
                          className={
                            "form-control " +
                            (contactNumberInputStyle
                              ? contactNumberInputStyle
                              : " ")
                          }
                        />
                        {contactNumberError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {contactNumberError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}

                      </FormGroup>
                      <small className="opt-in">
                        Providing your number is consent to receive calls, texts
                        and pre-recorded messages from{" "}
                        <span className="site-name">FastLoanAdvance</span>, its
                        subsidiaries, agents and/or partners**
                      </small>
                      <Button
                        onClick={this.slide5ContactNumberOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps" id="slide6">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Contact Time
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide6-radio"
                          id="slide6-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide6-radio1"
                            value="Morning"
                            id="slide6-radio1"
                            checked={this.state.contactTime === "option1"}
                            onChange={this.slide6OptionChange}
                          />
                          Morning
                        </Label>
                        <Label
                          check
                          className="slide6-radio"
                          id="slide6-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide6-radio1"
                            value="Noon"
                            id="slide6-radio2"
                            checked={this.state.contactTime === "option2"}
                            onChange={this.slide6OptionChange}
                          />
                          Noon
                        </Label>
                        <Label
                          check
                          className="slide6-radio"
                          id="slide6-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide6-radio1"
                            value="Night"
                            id="slide6-radio3"
                            checked={this.state.contactTime === "option3"}
                            onChange={this.slide6OptionChange}
                          />
                          Night
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps" id="slide7">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        What's your Birthdate?
                      </h3>
                      <FormGroup>
                        <Row>
                          <Col>
                            <Label for="month" className="bold">
                              Month
                            </Label>
                            <Input
                              type="select"
                              name="month"
                              id="month"
                              onChange={this.slide7MonthOnChange}
                              className={monthInputStyle}
                            >
                              <option value="">Choose</option>
                              <option value="01">January</option>
                              <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </Input>

                            {monthError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {monthError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                          <Col>
                            <Label for="day" className="bold">
                              Day
                            </Label>
                            <Input
                              type="select"
                              name="day"
                              id="day"
                              onChange={this.slide7DayOnChange}
                              className={dayInputStyle}
                            >
                              <option value="">Choose</option>
                              <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                              <option value="04">4</option>
                              <option value="05">5</option>
                              <option value="06">6</option>
                              <option value="07">7</option>
                              <option value="08">8</option>
                              <option value="09">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </Input>

                            {dayError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {dayError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                          <Col>
                            <Label for="year" className="bold">
                              Year
                            </Label>
                            <Input
                              type="select"
                              name="year"
                              id="year"
                              onChange={this.slide7YearOnChange}
                              className={yearInputStyle}
                            >
                              <option value="">Choose</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                              <option value="1929">1929</option>
                              <option value="1928">1928</option>
                              <option value="1927">1927</option>
                              <option value="1926">1926</option>
                              <option value="1925">1925</option>
                              <option value="1924">1924</option>
                              <option value="1923">1923</option>
                              <option value="1922">1922</option>
                              <option value="1921">1921</option>
                              <option value="1920">1920</option>
                              <option value="1919">1919</option>
                            </Input>

                            {yearError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {yearError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                        </Row>
                      </FormGroup>

                      <Button
                        onClick={this.slide7DOBOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps" id="slide8">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Are you active military?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide8-radio"
                          id="slide8-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide8-radio1"
                            value="Yes"
                            id="slide8-radio1"
                            checked={this.state.activeMilitary === "option1"}
                            onChange={this.slide8OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide8-radio"
                          id="slide8-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide8-radio1"
                            value="No"
                            id="slide8-radio2"
                            checked={this.state.activeMilitary === "option2"}
                            onChange={this.slide8OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps" id="slide9">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Zip Code
                      </h3>
                      <p>
                        We need to know where you are when requesting a loan.
                      </p>
                      <FormGroup>
                        <Label for="email" className="bold">
                          Zip Code
                        </Label>
                        <Input
                          type="text"
                          pattern="[0-9]{5}"
                          name="zipCode"
                          id="zipCode"
                          placeholder="Zip Code"
                          onChange={this.slide9zipCodeOnChange}
                          className={zipCodeInputStyle}
                        />
                        {zipCodeError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {zipCodeError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>

                      <Button
                        onClick={this.slide9zipCodeOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide10">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Home Address
                      </h3>
                      <FormGroup>
                        <Row>
                          <Col>
                            <Label for="streetAddress" className="bold">
                              Street Address
                            </Label>
                            <Input
                              type="text"
                              name="streetAddress"
                              id="streetAddress"
                              placeholder="Street Address"
                              onChange={this.slide10streetAddressOnChange}
                              className={streetAddressInputStyle}
                            />
                            {streetAddressError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {streetAddressError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                        </Row>
                        <Row className="mt15">
                          <Col>
                            <Label for="city" className="bold">
                              City
                            </Label>
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              placeholder="City"
                              onChange={this.slide10cityOnChange}
                              className={cityInputStyle}
                            />
                            {cityError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {cityError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                          <Col>
                            <Label for="state" className="bold">
                              State
                            </Label>
                            <Input
                              type="select"
                              name="state"
                              id="state"
                              onChange={this.slide10stateOnChange}
                              className={stateInputStyle}
                            >
                              <option value="">Select</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </Input>

                            {stateError !== "" ? (
                              <FormFeedback style={{ display: "block" }}>
                                {stateError}
                              </FormFeedback>
                            ) : (
                                ""
                              )}
                          </Col>
                        </Row>
                      </FormGroup>

                      <Button
                        onClick={this.slide10HomeAddressOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide11">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How long have you lived here?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide11-radio"
                          id="slide11-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide11-radio1"
                            value="1 Year or less"
                            id="slide11-radio1"
                            checked={this.state.howLongLived === "option1"}
                            onChange={this.slide11OptionChange}
                          />
                          1 Year or less
                        </Label>
                        <Label
                          check
                          className="slide11-radio"
                          id="slide11-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide11-radio1"
                            value="2 Years"
                            id="slide11-radio2"
                            checked={this.state.howLongLived === "option2"}
                            onChange={this.slide11OptionChange}
                          />
                          2 Years
                        </Label>
                        <Label
                          check
                          className="slide11-radio"
                          id="slide11-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide11-radio1"
                            value="3 Years"
                            id="slide11-radio3"
                            checked={this.state.howLongLived === "option3"}
                            onChange={this.slide11OptionChange}
                          />
                          3 Years
                        </Label>
                        <Label
                          check
                          className="slide11-radio"
                          id="slide11-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide11-radio1"
                            value="4 Years"
                            id="slide11-radio4"
                            checked={this.state.howLongLived === "option4"}
                            onChange={this.slide11OptionChange}
                          />
                          4 Years
                        </Label>
                        <Label
                          check
                          className="slide11-radio"
                          id="slide11-radio5-level"
                        >
                          <Input
                            type="radio"
                            name="slide11-radio1"
                            value="5 Years and more"
                            id="slide11-radio5"
                            checked={this.state.howLongLived === "option5"}
                            onChange={this.slide11OptionChange}
                          />
                          5 Years and more
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide12">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you own your home?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide12-radio"
                          id="slide12-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide12-radio1"
                            value="Yes"
                            id="slide12-radio1"
                            checked={this.state.ownYourHome === "option1"}
                            onChange={this.slide12OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide12-radio"
                          id="slide12-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide12-radio1"
                            value="No"
                            id="slide12-radio2"
                            checked={this.state.ownYourHome === "option2"}
                            onChange={this.slide12OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps" id="slide13">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Income Source
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide13-radio"
                          id="slide13-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide13-radio1"
                            value="Employment"
                            id="slide13-radio1"
                            checked={this.state.incomeSource === "option1"}
                            onChange={this.slide13OptionChange}
                          />
                          Employment
                        </Label>
                        <Label
                          check
                          className="slide13-radio"
                          id="slide13-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide13-radio1"
                            value="Benefits"
                            id="slide13-radio2"
                            checked={this.state.incomeSource === "option2"}
                            onChange={this.slide13OptionChange}
                          />
                          Benefits
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide14">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Time Employed
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide14-radio"
                          id="slide14-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide14-radio1"
                            value="1 Year or less"
                            id="slide14-radio1"
                            checked={this.state.timeEmployed === "option1"}
                            onChange={this.slide14OptionChange}
                          />
                          1 Year or less
                        </Label>
                        <Label
                          check
                          className="slide14-radio"
                          id="slide14-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide14-radio1"
                            value="2 Years"
                            id="slide14-radio2"
                            checked={this.state.timeEmployed === "option2"}
                            onChange={this.slide14OptionChange}
                          />
                          2 Years
                        </Label>
                        <Label
                          check
                          className="slide14-radio"
                          id="slide14-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide14-radio1"
                            value="3 Years"
                            id="slide14-radio3"
                            checked={this.state.timeEmployed === "option3"}
                            onChange={this.slide14OptionChange}
                          />
                          3 Years
                        </Label>
                        <Label
                          check
                          className="slide14-radio"
                          id="slide14-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide14-radio1"
                            value="4 Years"
                            id="slide14-radio4"
                            checked={this.state.timeEmployed === "option4"}
                            onChange={this.slide14OptionChange}
                          />
                          4 Years
                        </Label>
                        <Label
                          check
                          className="slide14-radio"
                          id="slide14-radio5-level"
                        >
                          <Input
                            type="radio"
                            name="slide14-radio1"
                            value="5 Years and more"
                            id="slide14-radio5"
                            checked={this.state.timeEmployed === "option5"}
                            onChange={this.slide14OptionChange}
                          />
                          5 Years and more
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide15">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        I get paid
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide15-radio"
                          id="slide15-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide15-radio1"
                            value="Weekly"
                            id="slide15-radio1"
                            checked={this.state.timeEmployed === "option1"}
                            onChange={this.slide15OptionChange}
                          />
                          Weekly
                        </Label>
                        <Label
                          check
                          className="slide15-radio"
                          id="slide15-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide15-radio1"
                            value="Bi-Weekly"
                            id="slide15-radio2"
                            checked={this.state.timeEmployed === "option2"}
                            onChange={this.slide15OptionChange}
                          />
                          Bi-Weekly
                        </Label>
                        <Label
                          check
                          className="slide15-radio"
                          id="slide15-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide15-radio1"
                            value="Monthly"
                            id="slide15-radio3"
                            checked={this.state.timeEmployed === "option3"}
                            onChange={this.slide15OptionChange}
                          />
                          Monthly
                        </Label>
                        <Label
                          check
                          className="slide15-radio"
                          id="slide15-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide15-radio1"
                            value="Semi-Monthly"
                            id="slide15-radio4"
                            checked={this.state.timeEmployed === "option4"}
                            onChange={this.slide15OptionChange}
                          />
                          Semi-Monthly
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps" id="slide16">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Monthly Gross Income
                      </h3>
                      <FormGroup>
                        <Row>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio1-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="Less than $1500"
                                id="slide16-radio1"
                                checked={this.state.monthlyGrossIncome === "option1"}
                                onChange={this.slide16OptionChange}
                              />
                              Less than $1500
                            </Label>
                          </Col>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio2-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$1500 - $2000"
                                id="slide16-radio2"
                                checked={this.state.monthlyGrossIncome === "option2"}
                                onChange={this.slide16OptionChange}
                              />
                              $1500 - $2000
                            </Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio3-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$2000 - $2500"
                                id="slide16-radio3"
                                checked={this.state.monthlyGrossIncome === "option3"}
                                onChange={this.slide16OptionChange}
                              />
                              $2000 - $2500
                        </Label>
                          </Col>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio4-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$2500 - $3000"
                                id="slide16-radio4"
                                checked={this.state.monthlyGrossIncome === "option4"}
                                onChange={this.slide16OptionChange}
                              />
                              $2500 - $3000
                        </Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio5-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$3000 - $3500"
                                id="slide16-radio5"
                                checked={this.state.monthlyGrossIncome === "option5"}
                                onChange={this.slide16OptionChange}
                              />
                              $3000 - $3500
                          </Label>
                          </Col>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio6-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$3500 - $4000"
                                id="slide16-radio6"
                                checked={this.state.monthlyGrossIncome === "option6"}
                                onChange={this.slide16OptionChange}
                              />
                              $3500 - $4000
                          </Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio7-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$4000 - $4500"
                                id="slide16-radio7"
                                checked={this.state.monthlyGrossIncome === "option7"}
                                onChange={this.slide16OptionChange}
                              />
                              $4000 - $4500
                          </Label>
                          </Col>
                          <Col sm="6">
                            <Label
                              check
                              className="slide16-radio"
                              id="slide16-radio8-level"
                            >
                              <Input
                                type="radio"
                                name="slide16-radio1"
                                value="$4500 - $5000"
                                id="slide16-radio8"
                                checked={this.state.monthlyGrossIncome === "option8"}
                                onChange={this.slide16OptionChange}
                              />
                              $4500 - $5000
                          </Label>
                          </Col>
                        </Row>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps active" id="slide17">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Next Pay Date
                      </h3>
                      <FormGroup>
                        <Label for="nextPayDate" className="bold">
                          Choose your next payday
                        </Label>
                        <DatePicker
                          name="nextPayDate"
                          id="nextPayDate"
                          placeholder="Next Pay Date"
                          className={nextPayDateInputStyle}
                          selected={this.state.nextPayDate}
                          onChange={this.slide17nextPayDateOnChange}
                          onClick={this.slide17nextPayDateOnClick}
                          autoComplete="off"
                          readonly="readonly"
                        />
                        {nextPayDateError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {nextPayDateError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide17nextPayDateOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps" id="slide18">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Employer Name
                      </h3>
                      <p>
                        Lenders want to know that you're secure in your employment because after all, the money you make is how you're going to be able to repay them.
                      </p>
                      <FormGroup>
                        <Label for="employerName" className="bold">
                          Employer Name
                        </Label>
                        <Input
                          type="text"
                          name="employerName"
                          id="employerName"
                          placeholder="Employer Name"
                          onChange={this.slide18employerNameOnChange}
                          className={employerNameInputStyle}
                        />
                        {employerNameError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {employerNameError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide18employerNameOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide19">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Employer Phone Number
                      </h3>
                      <p>
                        This number is mandatory for most banks. Lenders will never call your employer and disclose that they are from a loan company. If you work for yourself, please use your cell phone.
                      </p>
                      <FormGroup>
                        <Label for="employerPhoneNumber" className="bold">
                          Employer Phone Number
                        </Label>
                        <NumberFormat
                          id="employerPhoneNumber"
                          placeholder="xxx-xxx-xxxx"
                          onValueChange={this.slide19employerPhoneNumberOnChange}
                          format="###-###-####"
                          className={
                            "form-control " +
                            (employerPhoneNumberInputStyle
                              ? employerPhoneNumberInputStyle
                              : " ")
                          }
                        />
                        {employerPhoneNumberError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {employerPhoneNumberError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide19employerPhoneNumberOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide20">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Drivers license or State ID
                      </h3>
                      <p>
                        proof of who you are
                      </p>
                      <FormGroup>
                        <Label for="driversLicenseOrStateID " className="bold">
                          Drivers license or State ID
                        </Label>
                        <Input
                          type="text"
                          name="driversLicenseOrStateID"
                          id="driversLicenseOrStateID"
                          placeholder="Drivers license or State ID"
                          onChange={this.slide20driversLicenseOrStateIDOnChange}
                          className={driversLicenseOrStateIDInputStyle}
                        />
                        {driversLicenseOrStateIDError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {driversLicenseOrStateIDError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide20driversLicenseOrStateIDOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide21">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        License State
                      </h3>
                      <p>
                        further proof of who you are
                      </p>
                      <FormGroup>
                        <Label for="licenseState " className="bold">
                          License State
                        </Label>
                        <Input
                          type="select"
                          name="licenseState"
                          id="licenseState"
                          onChange={this.slide21licenseStateOnChange}
                          className={licenseStateInputStyle}
                        >
                          <option value="" >Select</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </Input>

                        {licenseStateError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {licenseStateError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide21licenseStateOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide22">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Social Security Number
                      </h3>
                      <p>
                        Lenders use your social security number to verify your identity. It is vital that you enter your valid social security number. Lenders will reject applicants whose information they cannot verify.
                      </p>
                      <FormGroup>
                        <Label for="socialSecurityNumber" className="bold">
                          Social Security Number
                        </Label>
                        <Input
                          type="text"
                          name="socialSecurityNumber"
                          id="socialSecurityNumber"
                          placeholder="Social Security Number"
                          onChange={this.slide22socialSecurityNumberOnChange}
                          className={socialSecurityNumberInputStyle}
                        />
                        {socialSecurityNumberError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {socialSecurityNumberError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide22socialSecurityNumberOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide23">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        ABA Routing Number
                      </h3>
                      <p>
                        Where would you like the funds to be deposited? <br />
                        TIP: Banks are significantly more likely to fund checking accounts than savings accounts.
                      </p>
                      <div className="img-tag">
                        <img src={CheckV2} alt="" />
                      </div>
                      <FormGroup>
                        <Label for="ABARoutingNumber" className="bold">
                          ABA Routing Number
                        </Label>
                        <Input
                          type="text"
                          name="ABARoutingNumber"
                          id="ABARoutingNumber"
                          placeholder="ABA Routing Number"
                          onChange={this.slide23ABARoutingNumberOnChange}
                          className={ABARoutingNumberInputStyle}
                        />
                        {ABARoutingNumberError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {ABARoutingNumberError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide23ABARoutingNumberOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide24">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Banking Information
                      </h3>
                      <p>
                        Where would you like the funds to be deposited? <br />
                        TIP: Banks are significantly more likely to fund checking accounts than savings accounts.
                      </p>
                      <FormGroup>
                        <Label for="bankName" className="bold">
                          Bank Name
                        </Label>
                        <Input
                          type="text"
                          name="bankName"
                          id="bankName"
                          placeholder="Bank Name"
                          onChange={this.slide24bankNameOnChange}
                          className={bankNameInputStyle}
                        />
                        {bankNameError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {bankNameError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <div className="img-tag">
                        <img src={CheckV2} alt="" />
                      </div>
                      <FormGroup>
                        <Label for="bankAccountNumber" className="bold">
                          Bank Account Number
                        </Label>
                        <Input
                          type="text"
                          name="bankAccountNumber"
                          id="bankAccountNumber"
                          placeholder="Bank Account Number"
                          onChange={this.slide24bankAccountNumberOnChange}
                          className={bankAccountNumberInputStyle}
                        />
                        {bankAccountNumberError !== "" ? (
                          <FormFeedback style={{ display: "block" }}>
                            {bankAccountNumberError}
                          </FormFeedback>
                        ) : (
                            ""
                          )}
                      </FormGroup>
                      <Button
                        onClick={this.slide24bankingInformationOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide25">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do You Have Direct Deposit?
                      </h3>
                      <p>TIP: Banks are significantly more likely to fund accounts with direct deposit.</p>
                      <FormGroup>
                        <Label
                          check
                          className="slide25-radio"
                          id="slide25-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide25-radio1"
                            value="Yes"
                            id="slide25-radio1"
                            checked={this.state.directDeposit === "option1"}
                            onChange={this.slide25OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide25-radio"
                          id="slide25-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide25-radio1"
                            value="No"
                            id="slide25-radio2"
                            checked={this.state.directDeposit === "option2"}
                            onChange={this.slide25OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide26">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Length of Bank Account
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide26-radio"
                          id="slide26-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide26-radio1"
                            value="One Year or less"
                            id="slide26-radio1"
                            checked={this.state.lengthOfBankAccount === "option1"}
                            onChange={this.slide26OptionChange}
                          />
                          One Year or less
                        </Label>
                        <Label
                          check
                          className="slide26-radio"
                          id="slide26-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide26-radio1"
                            value="2 Years"
                            id="slide26-radio2"
                            checked={this.state.lengthOfBankAccount === "option2"}
                            onChange={this.slide26OptionChange}
                          />
                          2 Years
                        </Label>
                        <Label
                          check
                          className="slide26-radio"
                          id="slide26-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide26-radio1"
                            value="3 Years"
                            id="slide26-radio3"
                            checked={this.state.lengthOfBankAccount === "option3"}
                            onChange={this.slide26OptionChange}
                          />
                          3 Years
                        </Label>
                        <Label
                          check
                          className="slide26-radio"
                          id="slide26-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide26-radio1"
                            value="4 Years"
                            id="slide26-radio4"
                            checked={this.state.lengthOfBankAccount === "option4"}
                            onChange={this.slide26OptionChange}
                          />
                          4 Years
                        </Label>
                        <Label
                          check
                          className="slide26-radio"
                          id="slide26-radio5-level"
                        >
                          <Input
                            type="radio"
                            name="slide26-radio1"
                            value="5 Years"
                            id="slide26-radio5"
                            checked={this.state.lengthOfBankAccount === "option5"}
                            onChange={this.slide26OptionChange}
                          />
                          5 Years
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide27">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Bank Account Type
                      </h3>
                      <p>TIP: Banks are significantly more likely to fund checking accounts than savings accounts</p>
                      <FormGroup>
                        <Label
                          check
                          className="slide27-radio"
                          id="slide27-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide27-radio1"
                            value="Checking"
                            id="slide27-radio1"
                            checked={this.state.bankAccountType === "option1"}
                            onChange={this.slide27OptionChange}
                          />
                          Checking
                        </Label>
                        <Label
                          check
                          className="slide27-radio"
                          id="slide27-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide27-radio1"
                            value="Savings"
                            id="slide27-radio2"
                            checked={this.state.bankAccountType === "option2"}
                            onChange={this.slide27OptionChange}
                          />
                          Savings
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide28">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Length of Bank Account
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide28-radio"
                          id="slide28-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide28-radio1"
                            value="Excellent 700 +"
                            id="slide28-radio1"
                            checked={this.state.lengthOfBankAccount === "option1"}
                            onChange={this.slide28OptionChange}
                          />
                          Excellent 700 +
                        </Label>
                        <Label
                          check
                          className="slide28-radio"
                          id="slide28-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide28-radio1"
                            value="Good 600 - 700"
                            id="slide28-radio2"
                            checked={this.state.lengthOfBankAccount === "option2"}
                            onChange={this.slide28OptionChange}
                          />
                          Good 600 - 700
                        </Label>
                        <Label
                          check
                          className="slide28-radio"
                          id="slide28-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide28-radio1"
                            value="Fair 500 - 600"
                            id="slide28-radio3"
                            checked={this.state.lengthOfBankAccount === "option3"}
                            onChange={this.slide28OptionChange}
                          />
                          Fair 500 - 600
                        </Label>
                        <Label
                          check
                          className="slide28-radio"
                          id="slide28-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide28-radio1"
                            value="Poor < 500"
                            id="slide28-radio4"
                            checked={this.state.lengthOfBankAccount === "option4"}
                            onChange={this.slide28OptionChange}
                          />
                          Poor &#60; 500
                        </Label>
                        <Label
                          check
                          className="slide28-radio"
                          id="slide28-radio5-level"
                        >
                          <Input
                            type="radio"
                            name="slide28-radio1"
                            value="not sure"
                            id="slide28-radio5"
                            checked={this.state.lengthOfBankAccount === "option5"}
                            onChange={this.slide28OptionChange}
                          />
                          not sure
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide29">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Loan Reason
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide29-radio"
                          id="slide29-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide29-radio1"
                            value="Credit Card Debt Relief"
                            id="slide29-radio1"
                            checked={this.state.loanReason === "option1"}
                            onChange={this.slide29OptionChange}
                          />
                          Credit Card Debt Relief
                        </Label>
                        <Label
                          check
                          className="slide29-radio"
                          id="slide29-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide29-radio1"
                            value="Student Loan Relief"
                            id="slide29-radio2"
                            checked={this.state.loanReason === "option2"}
                            onChange={this.slide29OptionChange}
                          />
                          Student Loan Relief
                        </Label>
                        <Label
                          check
                          className="slide29-radio"
                          id="slide29-radio3-level"
                        >
                          <Input
                            type="radio"
                            name="slide29-radio1"
                            value="Debt Consolidation"
                            id="slide29-radio3"
                            checked={this.state.loanReason === "option3"}
                            onChange={this.slide29OptionChange}
                          />
                          Debt Consolidation
                        </Label>
                        <Label
                          check
                          className="slide29-radio"
                          id="slide29-radio4-level"
                        >
                          <Input
                            type="radio"
                            name="slide29-radio1"
                            value="Other"
                            id="slide29-radio4"
                            checked={this.state.loanReason === "option4"}
                            onChange={this.slide29OptionChange}
                          />
                          Other
                        </Label>

                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide30">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you have $10,000 or more in credit card debt?
                      </h3>
                      <p>Give us an estimate, this will not affect your loan request</p>
                      <FormGroup>
                        <Label
                          check
                          className="slide30-radio"
                          id="slide30-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide30-radio1"
                            value="Yes"
                            id="slide30-radio1"
                            checked={this.state.moreInCreditCardDebt === "option1"}
                            onChange={this.slide30OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide30-radio"
                          id="slide30-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide30-radio1"
                            value="No"
                            id="slide30-radio2"
                            checked={this.state.moreInCreditCardDebt === "option2"}
                            onChange={this.slide30OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide31">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you have $10,000 or more in unsecured debt?
                      </h3>
                      <p>Give us an estimate, this will not affect your loan request</p>
                      <FormGroup>
                        <Label
                          check
                          className="slide31-radio"
                          id="slide31-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide31-radio1"
                            value="Yes"
                            id="slide31-radio1"
                            checked={this.state.moreInUnsecuredDebt === "option1"}
                            onChange={this.slide31OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide31-radio"
                          id="slide31-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide31-radio1"
                            value="No"
                            id="slide31-radio2"
                            checked={this.state.moreInUnsecuredDebt === "option2"}
                            onChange={this.slide31OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide32">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Can you afford an aggregated monthly payment of $250?
                      </h3>
                      <FormGroup>
                        <Label
                          check
                          className="slide32-radio"
                          id="slide32-radio1-level"
                        >
                          <Input
                            type="radio"
                            name="slide32-radio1"
                            value="Yes"
                            id="slide32-radio1"
                            checked={this.state.affordAggregatedMonthlyPayment === "option1"}
                            onChange={this.slide32OptionChange}
                          />
                          Yes
                        </Label>
                        <Label
                          check
                          className="slide32-radio"
                          id="slide32-radio2-level"
                        >
                          <Input
                            type="radio"
                            name="slide32-radio1"
                            value="No"
                            id="slide32-radio2"
                            checked={this.state.affordAggregatedMonthlyPayment === "option2"}
                            onChange={this.slide32OptionChange}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide33">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Submit Loan Request
                      </h3>
                      <p className="justify">
                        By clicking “Finish Form” I affirm by electronic signature that (1) I have read, understand, and agree to the
                        &nbsp;<a href="#" onClick={this.privacyPolicyTriggerClick}>Privacy Policy</a>,
                        &nbsp;<a href="javascript:void(0)" onClick={this.toggleEConsent}>E-consent</a>
                        &nbsp;<a href="#" onClick={this.termandConditionTriggerClick} >Terms</a>, and
                        &nbsp;<a href="#" onClick={this.ratesFeesonTriggerClick} >Rates &amp; Fees</a>,
                        and (2) I give my express authorization to share my information with
                        FastLoanAdvance, lenders, and other marketing partners to contact me at the information provided above via phone call, SMS/text message and/or email.
                      </p>
                      <Button
                        onClick={this.slide33finishFormOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Finish Now
                      </Button>
                    </div>
                  </div>
                  <div className="steps " id="slide34">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        SUBRATA, HURRY! GET YOUR CASH BEFORE TIME RUNS OUT!
                      </h3>
                      <p className="mb0" >
                        <span>Session will expire in</span>
                        {cancelTimer ? (<span className="red">Any Second!</span>) : (

                          <span className="red">
                            {this.leading0(this.state.minutes)} {minutes === 0 ? ("Minute") : ("Minutes")}
                            {' '}
                            {this.leading0(this.state.seconds)} Seconds
                        </span>
                        )}
                        <strong className="responsive-text">Submit below to request your loan now!</strong>
                      </p>
                      <div className="small-para">We were unable to connect you with our network of third party lenders for your requested amount. However, we work with several lenders who may approve you for a short term loan up to $35,000. Please note that loan amounts, interest rates and repayment terms will vary by lender. If you would like to apply for a short term loan up to $35,000, please select a new loan amount below and click to continue. You will not need to provide additional information.</div>
                      <FormGroup className="mb0">
                        <Input
                          type="select"
                          name="requestYourLoanAmount"
                          id="requestYourLoanAmount"
                        >
                          <option value="1000">$500 - $1000</option>
                          <option value="1500">$1,001 - $1,500</option>
                          <option value="2000">$1,501 - $2,000</option>
                          <option value="2000">$2,001 - $3,000</option>
                          <option value="4000">$3,001 - $5,000</option>
                          <option value="8000">$5,001 - $10,000</option>
                          <option value="15000">$10,001 - $15,000</option>
                          <option value="20000">$15,001 - $35,000</option>
                        </Input>
                      </FormGroup>

                      <Button
                        onClick={this.slide34ClickToContinueOnClick}
                        type="button"
                        color="primary"
                        className="mt15"
                      >
                        Click to Comtinue
                      </Button>
                      <Button
                        onClick={this.slide34noThanksOnClick}
                        type="button"
                        color="secondary"
                        className="mt15"
                      >
                        No Thanks
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
            <Col sm="8">
              <div className="controll">
                {/* <Button
                  type="button"
                  color="primary"
                  onClick={this.handlePreview}> prev
                </Button> */}
                {/* <Button onClick={this.handleNext}> next</Button> */}
              </div>
              <div className="comment">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAABA0lEQVQokYXQPUoDURQF4G/CYAhiIWos7BJ/EHsb0SaFlZW7EASXooV7ECxV1AWYIjuItjYWAS1EM4qxyB14TgIeuHDevee8897NiqKQ4ADbWI7zC3q4KgVZYjjCJgbIoveDBfRxDrUY7GAjxAVuor6itx4aeRg6eMYKTpIn9nAasw4eyoQPLKJrEl0s4bNMaEU18Yat5A8jrKKNObSyoiju8IQ6hnivGGaT2VqOVxwnT8hCWOVwUYutpBhhF3sVMRR5El9iH4fBG7hP03OTmDHefcn/oFZt4NZ4K+3g/xqamI9qVoe5yY8NcJbwCUOj0hviekoy1HM84hLfU9JKZHF5/xeDFj2Ev5aJFgAAAABJRU5ErkJggg=="
                  alt=""
                />
                WE USE 256 BIT SSL TECHNOLOGY TO ENCRYPT YOUR DATA.
              </div>
            </Col>
          </Row>
        </Container>
        {popup ? (
          <div className="popup">
            <div className="popup-inner">
              <div className="popup-header">
                <h4>Processing Loan Request</h4>
                <p>This will take just a few moments</p>
              </div>
              <div className="popup-content">
                <p>Please wait while the loan request is being processed. The loan request process can take up to 5 minutes, please do not click back or refresh the page.</p>
                <div className="popup-steps">
                  <div className="popup-steps-row" id="popupStep1">Verifying Loan Request</div>
                  <div className="popup-steps-row" id="popupStep2">Accessing Loan Provider Database</div>
                  <div className="popup-steps-row" id="popupStep3">Confirming Availability</div>
                  <div className="popup-msg" id="popupMsg">The next step will take 3 minures</div>
                  <div className="popup-steps-row" id="popupStep4">Retrieving Response</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
            ""
          )}
        {popupNoThankYou ? (
          <div className="popup">
            <div className="popup-inner small-popup">
              <div className="popup-header">
                <p>Our users typically find great success in our short term lending products, the offers are not obligatory, so feel free to check them out.</p>
              </div>
              <div className="popup-content">

                <Button
                  onClick={this.handleShowOffers}
                  type="button"
                  color="primary"
                  className="mt15"
                > Show me the offers!</Button>
                <Button
                  type="button"
                  color="secondary"
                  className="mt15"
                  onClick={this.handleNoThankYou}> No thank you</Button>
              </div>
            </div>
          </div>
        ) : (
            ""
          )}
        {popupOffer ? (
          <div className="popup">
            <div className="popup-inner small-popup">
              <div className="popup-header">
                <h4>WE FOUND YOU AN OFFER!</h4>
              </div>
              <div className="popup-content">
                <img src={Spiner} alt="spiner" />
                <p>Redirecting page to loan lender in 5 seconds.<br />
                  If redirect doesn't work, please click here.</p>
              </div>
            </div>
          </div>
        ) : (
            ""
          )}
        <Modal isOpen={this.state.modal} toggle={this.toggleEConsent} className={this.props.className}>
          <ModalHeader toggle={this.toggleEConsent}>E-consent</ModalHeader>
          <ModalBody>
            <p><strong>PLEASE TAKE NOTICE THAT THIS CONSENT IS DEMANDED BY ONE OR MORE OF THE LENDERS TO WHOM YOU WILL BE REFERRED. IT DOES NOT GOVERN ANY COMMUNICATIONS FROM THE OWNER OF THIS WEBSITE.WE MAKE NO REPRESENTATIONS AS TO WHAT IF ANY COMMUNICATIONS YOU WILL RECEIVE FROM SUCH LENDER OR IF THIS NOTICE IS EFFECTIVE FOR SUCH COMMUNICATIONS. THE OWNER OF THIS WEBSITE GENERALLY AND SPECIFICALLY DISCLAIMS ANY AND ALL LIABILITY FOR USE OF THIS CONSENT DOCUMENT.</strong>
            </p>
            <p><strong>CONSENT FOR ELECTRONIC SIGNATURES, RECORDS, AND DISCLOSURES ("E-Consent")</strong>
            </p>
            <p><i>Please read this information carefully and print a copy and/or retain this information for future reference.</i></p>
            <p><strong>Introduction.</strong> In order to offer you a loan, one or more of the third party lenders need your consent to use and accept electronic signatures, records, and disclosures ("E-Consent"). This form from such lender, notifies you of your rights when receiving electronic disclosures, notices, and information. By clicking on the link assenting to this notice, you acknowledge that you received this E-Consent and that you consent to conduct transactions using electronic signatures, electronic disclosures, electronic records, and electronic contract documents ("Disclosures").</p>
            <p><strong>Option for Paper or Non-Electronic Records.</strong> You may request any Disclosures in paper copy by contacting the third party lender directly. The lenders will provide paper copies at no charge. The lenders will retain all Disclosures as applicable law requires.</p>
            <p><strong>Scope of Consent.</strong> The lender has informed us that this E-Consent applies to all interactions online concerning you and the third party lender and includes those interactions engaged in on any mobile device, including phones, smart-phones, and tablets. By exercising this E-Consent, the third party lender may process your information and interact during all online interactions with you electronically. The lender may also send you notices electronically related to its interactions and transactions. Disclosures may be provided online at our or third party lenders' websites, and may be provided by e-mail.</p>
            <p><strong>Consenting to Do Business Electronically.</strong> Before you decide to do business electronically with the third party lenders, you should consider whether you have the required hardware and software capabilities described below.</p>
            <p><strong>Hardware and Software Requirements.</strong> To access and retain the Disclosures electronically, you will need to use the following computer software and hardware: A PC or MAC compatible computer or other device capable of accessing the Internet, access to an e-mail account, and an Internet Browser software program that supports at least 128 bit encryption, such as Microsoft® Internet Explorer, Netscape® or Mozilla Firefox®. To read some documents, you may need a PDF file reader like Adobe® Acrobat Reader X ® or Foxit®. You will need a printer or a long-term storage device, such as your computer's disk drive, to retain a copy of the Disclosures for future reference. You may send any questions regarding the hardware and software requirements directly to the third party lenders.</p>
            <p><strong>Withdrawing Consent.</strong> Your E-Consent for our third party lenders' consideration of your loan request cannot be withdrawn because it is a one-time transaction.If you are connected with one or more third party lenders, you are free to withdraw your E-Consent with those third party lenders at any time and at no charge. However, if you withdraw this E-Consent before receiving credit, you may be prevented from obtaining credit from that lender.Contact the third party lender directly if you wish to withdraw this E-consent.If you decide to withdraw this E-Consent, the legal effectiveness, validity, and enforceability of prior electronic Disclosures will not be affected.</p>
            <p><strong>Change to Your Contact Information.</strong> You should keep third party lenders informed of any change in your electronic address or mailing address. You may update such information by logging into the third party lender's website or by sending the lender a written update by mail.</p>
            <p><strong>YOUR ABILITY TO ACCESS DISCLOSURES.</strong> BY CLICKING THE LINK, YOU ASSENT TO THE TERMS OF THIS DISCLOSURE . YOU ACKNOWLEDGE THAT YOU CAN ACCESS THE DISCLOSURES IN THE DESIGNATED FORMATS DESCRIBED ABOVE.</p>
            <p><strong>CONSENT.</strong> BY CLICKING THE LINK,YOU ACKNOWLEDGE YOU HAVE READ THIS INFORMATION ABOUT ELECTRONIC SIGNATURES, RECORDS, DISCLOSURES, AND DOING BUSINESS ELECTRONICALLY. YOU CONSENT TO USING ELECTRONIC SIGNATURES, HAVING ALL DISCLOSURES PROVIDED OR MADE AVAILABLE TO YOU IN ELECTRONIC FORM AND TO DOING BUSINESS WITH THE LENDER ELECTRONICALLY. YOU ACKNOWLEDGE THAT YOU MAY REQUEST A PAPER COPY OF THE ELECTRONIC RECORDS AND DISCLOSURES, WHICH WILL BE PROVIDED TO YOU AT NO CHARGE. IF YOU REFRAIN FROM PROCEEDING THEN YOU NEITHER WISH TO USE ELECTRONIC SIGNATURES NOR CONDUCT THIS TRANSACTION ELECTRONICALLY. YOU ALSO ACKNOWLEDGE THAT YOUR CONSENT TO ELECTRONIC DISCLOSURES IS REQUIRED TO RECEIVE SERVICES FROM THIRD PARTY LENDERS OVER THE INTERNET.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleEConsent}>Close</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default Banner;