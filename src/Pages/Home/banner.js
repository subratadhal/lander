import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CheckV2 from "../../Images/check-v2.png";
import Spiner from "../../Images/big-spinner.gif";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import RadioInput from "../../Common/Form/radioInput";
import FormInput from "../../Common/Form/formInput";
import FormDatePicker from "../../Common/Form/formDataPicker";
import FormPhoneNumber from "../../Common/Form/formPhoneNumber";
import FormSSN from "../../Common/Form/formSSN";
import radioData from "../../JsonData/radioButtonsData.json";
import inputData from "../../JsonData/inputData.json";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import cookie from "cookie";
class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanAmount: "option3",
      loanDuration: "0",
      currentSlideID: "1",
      email: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      contactTime: "",
      month: "",
      day: "",
      year: "",
      activeMilitary: "",
      zipCode: "",
      streetAddress: "",
      city: "",
      state: "",
      howLongLived: "",
      ownYourHome: "",
      incomeSource: "",
      timeEmployed: "",
      iGetPaid: "",
      monthlyGrossIncome: "",
      nextPayDate: "",
      employerName: "",
      employerPhoneNumber: "",
      driversLicenseOrStateID: "",
      licenseState: "",
      socialSecurityNumber: "",
      ABARoutingNumber: "",
      bankName: "",
      bankAccountNumber: "",
      directDeposit: "",
      lengthOfBankAccount: "",
      bankAccountType: "",
      creditScore: "",
      loanReason: "",
      moreInCreditCardDebt: "",
      moreInUnsecuredDebt: "",
      affordAggregatedMonthlyPayment: "",
      password: "",

      maxSlider: "34",
      progressValue: "1",
      progressView: true,
      popup: false,
      popupNoThankYou: false,
      popupOffer: false,
      modal: false,
      deadline: 200000,
      minutes: 0,
      seconds: 0,
      cancelTimer: false
    };
  }
  handlePreview = e => {
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
      }, 100);
      const p = parseInt(this.state.progressValue) - 3;
      this.setState({
        currentSlideID: c1,
        progressValue: p
      });
      localStorage.setItem("currentSlideID", c1);
      window.history.pushState({ currentSlideID: c1 }, c1);
    }
  };
  handleNext = e => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    const c = parseInt(this.state.currentSlideID);
    const m = parseInt(this.state.maxSlider);
    if (c < m) {
      const c1 = parseInt(this.state.currentSlideID) + 1;
      console.log('c1', c1);
      document.getElementById("slide" + c).classList.add("previous");
      document.getElementById("slide" + c1).classList.add("current");
      setTimeout(function () {
        document.getElementById("slide" + c).classList.remove("active");
        document.getElementById("slide" + c1).classList.add("active");
        document.getElementById("slide" + c1).classList.remove("current");
      }, 100);
      const p = parseInt(this.state.progressValue) + 3;
      this.setState({
        currentSlideID: c1,
        progressValue: p
      });
      localStorage.setItem("currentSlideID", c1);
      window.history.pushState({ currentSlideID: c1 }, c1);
      console.log("handleNext currentSlideID ->", c1);
    }
  };
  setSlider = () => {
    console.log("setSlider run");
    var currentSlideID = localStorage.getItem("currentSlideID");
    var previousSlide = currentSlideID - 1;
    if (currentSlideID > 1) {
      document.getElementById("slide1").classList.remove("active");
      document.getElementById("slide" + currentSlideID).classList.add("active");
      this.setState({
        currentSlideID: currentSlideID,
        progressValue: 3 * previousSlide + 1
      });
      var i = currentSlideID;
      do {
        i = i - 1;
        document
          .getElementById("slide" + i.toString())
          .classList.add("previous");
      } while (i > 1);
    }
  };

  slide34finishFormOnClick = () => {
    this.setState({
      popup: true
    });
    this.popupAction("next");
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    this.resetTimer();
  };
  popupAction = val => {
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

          // setTimeout(function() {
          //   self.props.history.push("/offers");
          // }, 5000);
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
  };
  slide35ClickToContinueOnClick = () => {
    this.setState({
      popup: true
    });
    this.popupAction("offer");
  };
  slide35noThanksOnClick = () => {
    this.setState({
      popupNoThankYou: true
    });
  };
  handleNoThankYou = () => {
    this.setState({
      popupNoThankYou: false
    });
  };
  handleShowOffers = () => {
    this.setState({
      popup: true,
      popupNoThankYou: false
    });
    this.popupAction("offer");
  };
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
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      deadline: 200000,
                      cancelTimer: true
                    });
                    onClose();
                  }}
                >
                  No
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.resetTimer();
                    onClose();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  toggleEConsent = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  componentWillMount() {
    this.getTimeUntil(this.state.deadline);
    document.removeEventListener("keydown", this.escFunction, false);
  }
  handlePrevious = (e, self) => {
    const c = this.state.currentSlideID;
    if (document.getElementById("slide" + c)) {
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
        }, 1000);
        const p = parseInt(this.state.progressValue) - 3;
        this.setState({
          currentSlideID: c1,
          progressValue: p
        });
        localStorage.setItem("currentSlideID", c1);
        window.history.replaceState({ currentSlideID: c1 }, c1);
        console.log("state currentSlideID ->", c1);
      }
    } else {
      if (document.getElementById("slide" + c) !== null) {
        setTimeout(function () {
          self.handlePrevious(e, self);
        }, 2000);
      }
    }
  };

  dateConvert = str => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  };

  componentDidMount() {
    //post application--------------------------------------
    let loanApplicationNumber =
      "loanapp" + Math.floor(Math.random() * 1000000000);
    let dob =
      localStorage.getItem("day") +
      "/" +
      localStorage.getItem("month") +
      "/" +
      localStorage.getItem("year");
    const mgi = localStorage.getItem("monthlyGrossIncome").split(" ");
    const monthlyGrossIncome = mgi.pop().replace("$", "");
    const la = localStorage.getItem("loanAmount").split(" ");
    const actualloanamount = la[0].replace("$", "");
    const loanAmount = parseInt(actualloanamount);
    var activeMilitary = localStorage.getItem("activeMilitary");
    if (activeMilitary === "Yes") {
      activeMilitary = 1;
    } else {
      activeMilitary = 0;
    }
    var ownHome = localStorage.getItem("ownYourHome");
    if (ownHome === "Yes") {
      ownHome = 1;
    } else {
      ownHome = 0;
    }
    var directDeposit = localStorage.getItem("directDeposit");
    if (directDeposit === "Yes") {
      directDeposit = 1;
    } else {
      directDeposit = 0;
    }
    var getPaid = localStorage.getItem("iGetPaid");
    if (getPaid === "Weekly") {
      getPaid = "WEEKLY";
    } else if (getPaid === "Bi-Weekly") {
      getPaid = "BIWEEKLY";
    } else if (getPaid === "Monthly") {
      getPaid = "MONTHLY";
    } else if (getPaid === "Semi-Monthly") {
      getPaid = "TWICEMONTHLY";
    }
    var lba = localStorage.getItem("lengthOfBankAccount").split(" ");
    const lengthOfBankAccount = parseInt(lba[0]);
    const ld = localStorage.getItem("howLongLived").split(" ");
    const livingDuration = parseInt(ld[0]);

    let applicationData = {
      customerId: localStorage.getItem("email"),
      loanApplicationNumber: loanApplicationNumber,
      loanAmount: loanAmount,
      loanPeriod: localStorage.getItem("loanDuration"),
      emailAddress: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      phoneNumber: localStorage.getItem("contactNumber"),
      contactTime: localStorage.getItem("contactTime"),
      birthDate: dob,
      activeMilitary: activeMilitary,
      zipCode: localStorage.getItem("zipCode"),
      streetAddress: localStorage.getItem("streetAddress"),
      city: localStorage.getItem("city"),
      state: localStorage.getItem("state"),
      livingDuration: livingDuration,
      ownHome: ownHome,
      incomeSource: localStorage.getItem("incomeSource").toUpperCase(),
      timeEmployed: localStorage.getItem("timeEmployed"),
      getPaid: getPaid,
      monthlyGrossIncome: monthlyGrossIncome,
      nextPayDate: this.dateConvert(localStorage.getItem("nextPayDate")),
      employerName: localStorage.getItem("employerName"),
      employerPhoneNumber: localStorage.getItem("employerPhoneNumber"),
      idProof: localStorage.getItem("driversLicenseOrStateID"),
      licenseState: localStorage.getItem("licenseState"),
      ssn: localStorage.getItem("socialSecurityNumber"),
      abaRoutingNumber: localStorage.getItem("ABARoutingNumber"),
      bankName: localStorage.getItem("bankName"),
      bankAccountNumber: localStorage.getItem("bankAccountNumber"),
      directDeposit: directDeposit,
      lengthOfBankAccount: lengthOfBankAccount,
      bankAccountType: localStorage.getItem("bankAccountType").toUpperCase(),
      creditScore: localStorage.getItem("creditScore").toUpperCase(),
      loanReason: localStorage
        .getItem("loanReason")
        .toUpperCase()
        .replace(" ", ""),
      creditCardDebt: localStorage.getItem("moreInCreditCardDebt"),
      unsecureDebt: localStorage.getItem("moreInUnsecuredDebt"),
      aggregatedMonthlyPayment: localStorage.getItem(
        "affordAggregatedMonthlyPayment"
      ),
      loanSubmission: ""
    };

    console.log(applicationData);

    //-----------------------------------

    let self = this;
    document.addEventListener("keydown", this.escFunction, false);

    //Browser back button
    window.onpopstate = function (event) {
      const currentState = event.state;
      if (currentState) {
        self.handlePrevious(event, self);
        console.log("currentState", currentState);
      }
    };
    this.setSlider();
  }
  leading0 = num => {
    return num < 10 ? "0" + num : num;
  };
  resetTimer = () => {
    var d1 = new Date(),
      d2 = new Date(d1);
    d2.setMinutes(d1.getMinutes() + 10);
    this.setState({ deadline: d2 });
  };
  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ minutes: 0, seconds: 0 });
      this.confirmPopupOpen();
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      this.setState({ minutes, seconds });
    }
  };
  escFunction = event => {
    if (event.keyCode === 9) {
      event.preventDefault();
    }
  };
  radioOnChange = (e, v, n) => {
    this.setState({
      [n]: v
    });
    localStorage.setItem("" + n, v);
    this.handleNext(e);
  };
  inputOnChange = (e, v, n) => {
    this.setState({
      [n]: v
    });
    localStorage.setItem("" + n, v);
  };
  inputOnClick = e => {
    this.handleNext(e);
  };

  render() {
    console.log("banner state->", this.state);
    const progress = this.state.progressValue;
    const progressView = this.state.progressView;
    const firstName = this.state.firstName;
    const popup = this.state.popup;
    const popupNoThankYou = this.state.popupNoThankYou;
    const popupOffer = this.state.popupOffer;
    const minutes = this.state.minutes;
    const cancelTimer = this.state.cancelTimer;
    return (
      <div className="banner-section">
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm="8">
              {progressView ? (
                <div className="progress-bar-container">
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
                  <div className="steps active" id="slide1">
                    <div className="welcome-text">
                      You can get a loan between{" "}
                      <strong>$100 and $35,000</strong> for any reason, whether
                      it be to pay for a vehicle repair, home improvement
                      expense, or even a vacation
                    </div>
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How much do you need?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio1"].value}
                        name={radioData[0]["radio1"].name}
                        id={radioData[0]["radio1"].id}
                        slideName={radioData[0]["radio1"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide2">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How long do you need to pay it back?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio2"].value}
                        name={radioData[0]["radio2"].name}
                        id={radioData[0]["radio2"].id}
                        slideName={radioData[0]["radio2"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide3">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Email Address
                      </h3>
                      <p>Where to send your loan request confirmation</p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[0]["email"]}
                        inputSlide={inputData[0]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide4">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Create a Password
                      </h3>

                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[1]["password"]}
                        inputSlide={inputData[1]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide5">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Your Name
                      </h3>
                      <p>
                        Entering your full legal name may increase your chances
                        of approval
                      </p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[2]["name"]}
                        inputSlide={inputData[2]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide6">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Phone Number
                      </h3>
                      <p>
                        Why do we require? Some lenders will quickly confirm
                        your request by phone.
                      </p>
                      <FormPhoneNumber
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[12]["contactNumber"]}
                        inputSlide={inputData[12]["slide"]}
                      />
                    </div>
                  </div>
                  {/* <div className="steps" id="slide7">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Contact Time
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio3"].value}
                        name={radioData[0]["radio3"].name}
                        id={radioData[0]["radio3"].id}
                        slideName={radioData[0]["radio3"].slideName}
                      />
                    </div>
                  </div> */}
                  <div className="steps" id="slide7">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        What's your Birthdate?
                      </h3>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[3]["dob"]}
                        inputSlide={inputData[3]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps" id="slide8">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Are you active military?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio4"].value}
                        name={radioData[0]["radio4"].name}
                        id={radioData[0]["radio4"].id}
                        slideName={radioData[0]["radio4"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps" id="slide9">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Zip Code
                      </h3>
                      <p>
                        We need to know where you are when requesting a loan.
                      </p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputCurrentProps={this.state}
                        inputProps={inputData[4]["zipCode"]}
                        inputSlide={inputData[4]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide10">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Home Address
                      </h3>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputCurrentProps={this.state}
                        inputProps={inputData[5]["contactAddress"]}
                        inputSlide={inputData[5]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide11">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        How long have you lived here?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio5"].value}
                        name={radioData[0]["radio5"].name}
                        id={radioData[0]["radio5"].id}
                        slideName={radioData[0]["radio5"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide12">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you own your home?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio6"].value}
                        name={radioData[0]["radio6"].name}
                        id={radioData[0]["radio6"].id}
                        slideName={radioData[0]["radio6"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps" id="slide13">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Income Source
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio7"].value}
                        name={radioData[0]["radio7"].name}
                        id={radioData[0]["radio7"].id}
                        slideName={radioData[0]["radio7"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide14">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Time Employed
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio8"].value}
                        name={radioData[0]["radio8"].name}
                        id={radioData[0]["radio8"].id}
                        slideName={radioData[0]["radio8"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide15">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        I get paid
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio9"].value}
                        name={radioData[0]["radio9"].name}
                        id={radioData[0]["radio9"].id}
                        slideName={radioData[0]["radio9"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps" id="slide16">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Monthly Gross Income
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio10"].value}
                        name={radioData[0]["radio10"].name}
                        id={radioData[0]["radio10"].id}
                        slideName={radioData[0]["radio10"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide17">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Next Pay Date
                      </h3>
                      <FormDatePicker
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[6]["payDate"]}
                        inputSlide={inputData[6]["payDate"]}
                      />
                    </div>
                  </div>
                  <div className="steps" id="slide18">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Employer Name
                      </h3>
                      <p>
                        Lenders want to know that you're secure in your
                        employment because after all, the money you make is how
                        you're going to be able to repay them.
                      </p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[7]["employerName"]}
                        inputSlide={inputData[7]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide19">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Employer Phone Number
                      </h3>
                      <p>
                        This number is mandatory for most banks. Lenders will
                        never call your employer and disclose that they are from
                        a loan company. If you work for yourself, please use
                        your cell phone.
                      </p>
                      <FormPhoneNumber
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[13]["employerPhoneNumber"]}
                        inputSlide={inputData[13]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide20">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Drivers license or State ID
                      </h3>
                      <p>proof of who you are</p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[8]["driversLicenseOrStateID"]}
                        inputSlide={inputData[8]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide21">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        License State
                      </h3>
                      <p>further proof of who you are</p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[9]["licenseState"]}
                        inputSlide={inputData[9]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide22">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Social Security Number
                      </h3>
                      <p>
                        Lenders use your social security number to verify your
                        identity. It is vital that you enter your valid social
                        security number. Lenders will reject applicants whose
                        information they cannot verify.
                      </p>
                      <FormSSN
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[14]["socialSecurityNumber"]}
                        inputSlide={inputData[14]["slide"]}
                      />

                    </div>
                  </div>
                  <div className="steps " id="slide23">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        ABA Routing Number
                      </h3>
                      <p>
                        Where would you like the funds to be deposited? <br />
                        TIP: Banks are significantly more likely to fund
                        checking accounts than savings accounts.
                      </p>
                      <div className="img-tag">
                        <img src={CheckV2} alt="" />
                      </div>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[10]["ABARoutingNumber"]}
                        inputSlide={inputData[10]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide24">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Banking Information
                      </h3>
                      <p>
                        Where would you like the funds to be deposited? <br />
                        TIP: Banks are significantly more likely to fund
                        checking accounts than savings accounts.
                      </p>
                      <FormInput
                        inputOnClick={this.inputOnClick}
                        onChange={this.inputOnChange}
                        inputProps={inputData[11]["bankingInformation"]}
                        inputSlide={inputData[11]["slide"]}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide25">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do You Have Direct Deposit?
                      </h3>
                      <p>
                        TIP: Banks are significantly more likely to fund
                        accounts with direct deposit.
                      </p>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio11"].value}
                        name={radioData[0]["radio11"].name}
                        id={radioData[0]["radio11"].id}
                        slideName={radioData[0]["radio11"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide26">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Length of Bank Account
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio12"].value}
                        name={radioData[0]["radio12"].name}
                        id={radioData[0]["radio12"].id}
                        slideName={radioData[0]["radio12"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide27">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Bank Account Type
                      </h3>
                      <p>
                        TIP: Banks are significantly more likely to fund
                        checking accounts than savings accounts
                      </p>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio13"].value}
                        name={radioData[0]["radio13"].name}
                        id={radioData[0]["radio13"].id}
                        slideName={radioData[0]["radio13"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide28">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Credit Score
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio14"].value}
                        name={radioData[0]["radio14"].name}
                        id={radioData[0]["radio14"].id}
                        slideName={radioData[0]["radio14"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide29">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Loan Reason
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio15"].value}
                        name={radioData[0]["radio15"].name}
                        id={radioData[0]["radio15"].id}
                        slideName={radioData[0]["radio15"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide30">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you have $10,000 or more in credit card debt?
                      </h3>
                      <p>
                        Give us an estimate, this will not affect your loan
                        request
                      </p>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio16"].value}
                        name={radioData[0]["radio16"].name}
                        id={radioData[0]["radio16"].id}
                        slideName={radioData[0]["radio16"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide31">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Do you have $10,000 or more in unsecured debt?
                      </h3>
                      <p>
                        Give us an estimate, this will not affect your loan
                        request
                      </p>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio17"].value}
                        name={radioData[0]["radio17"].name}
                        id={radioData[0]["radio17"].id}
                        slideName={radioData[0]["radio17"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide32">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Can you afford an aggregated monthly payment of $250?
                      </h3>
                      <RadioInput
                        onChange={this.radioOnChange}
                        value={radioData[0]["radio18"].value}
                        name={radioData[0]["radio18"].name}
                        id={radioData[0]["radio18"].id}
                        slideName={radioData[0]["radio18"].slideName}
                      />
                    </div>
                  </div>
                  <div className="steps " id="slide33">
                    <Button
                      type="button"
                      color="primary"
                      onClick={this.handlePreview}
                      className="preview-button"
                    />
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        Submit Loan Request
                      </h3>
                      <p className="justify">
                        By clicking “Finish Form” I affirm by electronic
                        signature that (1) I have read, understand, and agree to
                        the &nbsp;
                        <Link to="/privacy-policy">Privacy Policy</Link>, &nbsp;
                        <a
                          href="javascript:void(0)"
                          onClick={this.toggleEConsent}
                        >
                          E-consent
                        </a>
                        &nbsp;<Link to="/terms-of-use">Terms</Link>, and &nbsp;
                        <Link to="/rates-and-fees">Rates &amp; Fees</Link>, and
                        (2) I give my express authorization to share my
                        information with Lender.page, lenders, and other
                        marketing partners to contact me at the information
                        provided above via phone call, SMS/text message and/or
                        email.
                      </p>

                      <FormGroup>
                        <Button
                          onClick={this.slide34finishFormOnClick}
                          type="button"
                          color="primary"
                          className="mt15"
                        >
                          Finish Now
                        </Button>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="steps " id="slide34">
                    <div className="inner-steps">
                      <h3 id="" className="title current">
                        {firstName} HURRY! GET YOUR CASH BEFORE TIME RUNS OUT!
                      </h3>
                      <p className="mb0">
                        <span>Session will expire in</span>
                        {cancelTimer ? (
                          <span className="red">Any Second!</span>
                        ) : (
                            <span className="red">
                              {this.leading0(this.state.minutes)}{" "}
                              {minutes === 0 ? "Minute" : "Minutes"}{" "}
                              {this.leading0(this.state.seconds)} Seconds
                          </span>
                          )}
                        <strong className="responsive-text">
                          Submit below to request your loan now!
                        </strong>
                      </p>
                      <div className="small-para">
                        We were unable to connect you with our network of third
                        party lenders for your requested amount. However, we
                        work with several lenders who may approve you for a
                        short term loan up to $35,000. Please note that loan
                        amounts, interest rates and repayment terms will vary by
                        lender. If you would like to apply for a short term loan
                        up to $35,000, please select a new loan amount below and
                        click to continue. You will not need to provide
                        additional information.
                      </div>
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
                      <FormGroup>
                        <Button
                          onClick={this.slide35ClickToContinueOnClick}
                          type="button"
                          color="primary"
                          className="mt15"
                        >
                          Click to Comtinue
                        </Button>
                        <Button
                          onClick={this.slide35noThanksOnClick}
                          type="button"
                          color="secondary"
                          className="mt15"
                        >
                          No Thanks
                        </Button>
                      </FormGroup>
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
                <p>
                  Please wait while the loan request is being processed. The
                  loan request process can take up to 5 minutes, please do not
                  click back or refresh the page.
                </p>
                <div className="popup-steps">
                  <div className="popup-steps-row" id="popupStep1">
                    Verifying Loan Request
                  </div>
                  <div className="popup-steps-row" id="popupStep2">
                    Accessing Loan Provider Database
                  </div>
                  <div className="popup-steps-row" id="popupStep3">
                    Confirming Availability
                  </div>
                  <div className="popup-msg" id="popupMsg">
                    The next step will take 3 minures
                  </div>
                  <div className="popup-steps-row" id="popupStep4">
                    Retrieving Response
                  </div>
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
                <p>
                  Our users typically find great success in our short term
                  lending products, the offers are not obligatory, so feel free
                  to check them out.
                </p>
              </div>
              <div className="popup-content">
                <Button
                  onClick={this.handleShowOffers}
                  type="button"
                  color="primary"
                  className="mt15"
                >
                  {" "}
                  Show me the offers!
                </Button>
                <Button
                  type="button"
                  color="secondary"
                  className="mt15"
                  onClick={this.handleNoThankYou}
                >
                  {" "}
                  No thank you
                </Button>
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
                <p>
                  Redirecting page to loan lender in 5 seconds.
                  <br />
                  If redirect doesn't work, please click here.
                </p>
              </div>
            </div>
          </div>
        ) : (
            ""
          )}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleEConsent}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleEConsent}>E-consent</ModalHeader>
          <ModalBody>
            <p>
              <strong>
                PLEASE TAKE NOTICE THAT THIS CONSENT IS DEMANDED BY ONE OR MORE
                OF THE LENDERS TO WHOM YOU WILL BE REFERRED. IT DOES NOT GOVERN
                ANY COMMUNICATIONS FROM THE OWNER OF THIS WEBSITE.WE MAKE NO
                REPRESENTATIONS AS TO WHAT IF ANY COMMUNICATIONS YOU WILL
                RECEIVE FROM SUCH LENDER OR IF THIS NOTICE IS EFFECTIVE FOR SUCH
                COMMUNICATIONS. THE OWNER OF THIS WEBSITE GENERALLY AND
                SPECIFICALLY DISCLAIMS ANY AND ALL LIABILITY FOR USE OF THIS
                CONSENT DOCUMENT.
              </strong>
            </p>
            <p>
              <strong>
                CONSENT FOR ELECTRONIC SIGNATURES, RECORDS, AND DISCLOSURES
                ("E-Consent")
              </strong>
            </p>
            <p>
              <i>
                Please read this information carefully and print a copy and/or
                retain this information for future reference.
              </i>
            </p>
            <p>
              <strong>Introduction.</strong> In order to offer you a loan, one
              or more of the third party lenders need your consent to use and
              accept electronic signatures, records, and disclosures
              ("E-Consent"). This form from such lender, notifies you of your
              rights when receiving electronic disclosures, notices, and
              information. By clicking on the link assenting to this notice, you
              acknowledge that you received this E-Consent and that you consent
              to conduct transactions using electronic signatures, electronic
              disclosures, electronic records, and electronic contract documents
              ("Disclosures").
            </p>
            <p>
              <strong>Option for Paper or Non-Electronic Records.</strong> You
              may request any Disclosures in paper copy by contacting the third
              party lender directly. The lenders will provide paper copies at no
              charge. The lenders will retain all Disclosures as applicable law
              requires.
            </p>
            <p>
              <strong>Scope of Consent.</strong> The lender has informed us that
              this E-Consent applies to all interactions online concerning you
              and the third party lender and includes those interactions engaged
              in on any mobile device, including phones, smart-phones, and
              tablets. By exercising this E-Consent, the third party lender may
              process your information and interact during all online
              interactions with you electronically. The lender may also send you
              notices electronically related to its interactions and
              transactions. Disclosures may be provided online at our or third
              party lenders' websites, and may be provided by e-mail.
            </p>
            <p>
              <strong>Consenting to Do Business Electronically.</strong> Before
              you decide to do business electronically with the third party
              lenders, you should consider whether you have the required
              hardware and software capabilities described below.
            </p>
            <p>
              <strong>Hardware and Software Requirements.</strong> To access and
              retain the Disclosures electronically, you will need to use the
              following computer software and hardware: A PC or MAC compatible
              computer or other device capable of accessing the Internet, access
              to an e-mail account, and an Internet Browser software program
              that supports at least 128 bit encryption, such as Microsoft®
              Internet Explorer, Netscape® or Mozilla Firefox®. To read some
              documents, you may need a PDF file reader like Adobe® Acrobat
              Reader X ® or Foxit®. You will need a printer or a long-term
              storage device, such as your computer's disk drive, to retain a
              copy of the Disclosures for future reference. You may send any
              questions regarding the hardware and software requirements
              directly to the third party lenders.
            </p>
            <p>
              <strong>Withdrawing Consent.</strong> Your E-Consent for our third
              party lenders' consideration of your loan request cannot be
              withdrawn because it is a one-time transaction.If you are
              connected with one or more third party lenders, you are free to
              withdraw your E-Consent with those third party lenders at any time
              and at no charge. However, if you withdraw this E-Consent before
              receiving credit, you may be prevented from obtaining credit from
              that lender.Contact the third party lender directly if you wish to
              withdraw this E-consent.If you decide to withdraw this E-Consent,
              the legal effectiveness, validity, and enforceability of prior
              electronic Disclosures will not be affected.
            </p>
            <p>
              <strong>Change to Your Contact Information.</strong> You should
              keep third party lenders informed of any change in your electronic
              address or mailing address. You may update such information by
              logging into the third party lender's website or by sending the
              lender a written update by mail.
            </p>
            <p>
              <strong>YOUR ABILITY TO ACCESS DISCLOSURES.</strong> BY CLICKING
              THE LINK, YOU ASSENT TO THE TERMS OF THIS DISCLOSURE . YOU
              ACKNOWLEDGE THAT YOU CAN ACCESS THE DISCLOSURES IN THE DESIGNATED
              FORMATS DESCRIBED ABOVE.
            </p>
            <p>
              <strong>CONSENT.</strong> BY CLICKING THE LINK,YOU ACKNOWLEDGE YOU
              HAVE READ THIS INFORMATION ABOUT ELECTRONIC SIGNATURES, RECORDS,
              DISCLOSURES, AND DOING BUSINESS ELECTRONICALLY. YOU CONSENT TO
              USING ELECTRONIC SIGNATURES, HAVING ALL DISCLOSURES PROVIDED OR
              MADE AVAILABLE TO YOU IN ELECTRONIC FORM AND TO DOING BUSINESS
              WITH THE LENDER ELECTRONICALLY. YOU ACKNOWLEDGE THAT YOU MAY
              REQUEST A PAPER COPY OF THE ELECTRONIC RECORDS AND DISCLOSURES,
              WHICH WILL BE PROVIDED TO YOU AT NO CHARGE. IF YOU REFRAIN FROM
              PROCEEDING THEN YOU NEITHER WISH TO USE ELECTRONIC SIGNATURES NOR
              CONDUCT THIS TRANSACTION ELECTRONICALLY. YOU ALSO ACKNOWLEDGE THAT
              YOUR CONSENT TO ELECTRONIC DISCLOSURES IS REQUIRED TO RECEIVE
              SERVICES FROM THIRD PARTY LENDERS OVER THE INTERNET.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleEConsent}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Banner);
