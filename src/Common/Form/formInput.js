import React, { Component } from "react";
import { FormGroup, Input, Label, Button, FormFeedback, Row, Col } from "reactstrap";
import validator from "validator";
import { Link } from "react-router-dom";
import generator from "generate-password";
import axios from 'axios';
import config from "../../config.json";
class FormInput extends Component {
  state = {
    inputs: [],
    ids: [],
    passwordSuggestion: "",
    passwordSuggestionWrapper: false,
  };
  inputOnChange = e => {
    const placeholder = e.target.placeholder ? e.target.placeholder : e.target.name; //condition required for select as select have no placeholder
    const name = e.target.name;
    const input = e.target.value ? e.target.value : "";
    const type = e.target.type;

    if (validator.isEmpty(input)) {
      this.setState({
        [name + "Error"]: placeholder + " is required",
        [name]: input,
        [name + "Style"]: "error"
      });
    } else {
      if (type === "email") {
        if (validator.isEmail(input)) {
          // this.setState({
          //   [name + "Error"]: "",
          //   [name]: input,
          //   [name + "Style"]: "success"
          // });

          var url = 'https://api.neverbounce.com/v4/single/check';
          // var headerConf = {
          //   headers: {
          //     'Access-Control-Allow-Origin': '*',
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json;charset=utf-8'
          //   }
          // };
          // axios.post(url, headerConf)
          //   .then(function (response) {
          //     console.log(response);
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //   });
          //let url = 'https://api.github.com/users/'+user+'/repos';


          fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "no-cors", // no-cors, cors, *same-origin
            credentials: 'same-origin',
            body: JSON.stringify({ key: config.neverbounce_api_key, email: input }),
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));



        } else {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: ""
          });
        }
      } else if (type === "password") {
        if (validator.isLength(input, { min: 6, max: 15 })) {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "success"
          });
        } else {
          this.setState({
            [name + "Error"]: "Please enter at least 6 characters and max 15 characters.",
            [name]: input,
            [name + "Style"]: "error"
          });
        }
      } else {
        this.setState({
          [name + "Error"]: "",
          [name]: input,
          [name + "Style"]: ""
        });
      }

    }
    this.props.onChange(e, input, name);
  };
  buttonOnClick = e => {
    var idArray = this.state.ids;
    var i = 0;
    do {
      var id = document.getElementById(idArray[i]);
      var input = id.value ? id.value : "";
      var placeholder = id.placeholder;
      var name = id.name;
      var type = id.type;

      if (validator.isEmpty(input)) {
        this.setState({
          [name + "Error"]: placeholder + " is required",
          [name]: input,
          [name + "Style"]: "error"
        });
        return;
      } else {
        if (type === "email") {
          if (validator.isEmail(input)) {
            this.setState({
              [name + "Error"]: "",
              [name]: input,
              [name + "Style"]: "success"
            });
          } else {
            this.setState({
              [name + "Error"]: "Invalid " + placeholder,
              [name]: input,
              [name + "Style"]: "error"
            });
            return;
          }
        } else if (type === "password") {
          if (validator.isLength(input, { min: 6, max: 15 })) {
            this.setState({
              [name + "Error"]: "",
              [name]: input,
              [name + "Style"]: "success"
            });
          } else {
            this.setState({
              [name + "Error"]: "Please enter at least 6 characters and max 15 characters.",
              [name]: input,
              [name + "Style"]: "error"
            });
          }
        } else {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "success"
          });
        }

      }

      i++;
    } while (i < idArray.length);
    this.props.inputOnClick(e);
  };
  componentDidMount() {
    const inputs = Array.from(this.props.inputProps);
    this.setState({
      inputs: inputs
    });

    var arr = [];
    var i = 0;
    do {
      const inputLocalStorage = localStorage.getItem([inputs[i].id]);
      this.setState({
        [inputs[i].id]: inputLocalStorage ? inputLocalStorage : "",
        [inputs[i].id + "Error"]: "",
        [inputs[i].id + "Style"]: ""
      });
      arr[i] = inputs[i].id;
      i++;
    } while (i < inputs.length);
    this.setState({
      ids: arr
    });
    //password
    this.passwordResetOnClick();
    document.body.addEventListener("click", this.bodyOnClick);
  }
  bodyOnClick = e => {
    var class_name = e.target.classList[0];
    if (
      class_name === "password-suggestion" ||
      class_name === "ps-password" ||
      class_name === "ps-reset" ||
      class_name === "ps-label"
    ) {
    } else {
      this.setState({
        passwordSuggestionWrapper: false
      });
    }
  };
  inputOnClick = e => {
    e.stopPropagation();
    var idArray = this.state.ids;
    var id = document.getElementById(idArray[0]);
    var type = id.type;
    if (type === "password") {
      this.setState({
        passwordSuggestionWrapper: true
      });
    }
  };
  passwordMuskOnClick = e => {
    e.stopPropagation();
    this.setState({
      password: this.state.passwordSuggestion,
      passwordSuggestionWrapper: false,
      passwordError: "",
      passwordStyle: "success"
    });
    this.props.onChange(e, this.state.passwordSuggestion, "password");
  };

  passwordResetOnClick = () => {
    this.setState({
      passwordSuggestion: generator.generate({
        length: 15,
        numbers: true,
        symbols: true,
        uppercase: true
      })
    });
  };

  render() {
    const inputSlide = this.props.inputSlide;
    const passwordSuggestion = this.state.passwordSuggestion;
    const passwordSuggestionWrapper = this.state.passwordSuggestionWrapper;
    var smVal = "";
    if (inputSlide === "slide25") {
      smVal = 12;
    } else if (inputSlide === "slide11") {
      smVal = 6;
    } else if (inputSlide === "slide8") {
      smVal = 4;
    } else if (inputSlide === "slide5") {
      smVal = 12;
    }

    return (
      <Row>
        {this.state.inputs.map((item, index) => (

          item.type === "select" ? (
            <Col sm={smVal} key={"k" + index}>
              <FormGroup >
                <Label key={"lk" + index} for={item.placeholder} className="bold">
                  {item.placeholder}
                </Label>
                <Input
                  key={"ik" + index}
                  type={item.type}
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  onChange={this.inputOnChange}
                  className={this.state[item.id + "Style"]}
                  value={this.state[item.id]}
                >
                  <option value="">Choose</option>
                  {item.data.map((d, i) => {
                    return (
                      <option key={i} value={d} >{d}</option>
                    );
                  })}
                </Input>
                {/* selected={d === this.state[item.id]} */}
                {this.state[item.id + "Error"] !== "" ? (
                  <FormFeedback style={{ display: "block" }}>
                    {this.state[item.id + "Error"]}
                  </FormFeedback>
                ) : (
                    ""
                  )}
              </FormGroup>
            </Col>
          ) : (
              <Col sm={(item.placeholder === "Street Address") ? "12" : smVal} key={"lk" + index}>
                <FormGroup key={"k" + index}>
                  <Label for={item.placeholder} className="bold">
                    {item.placeholder}
                  </Label>
                  <Input
                    key={"ik" + index}
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    autoComplete="nope"
                    placeholder={item.placeholder}
                    onChange={this.inputOnChange}
                    onClick={this.inputOnClick}
                    className={this.state[item.id + "Style"]}
                    value={this.state[item.id]}
                  />
                  {this.state[item.id + "Error"] !== "" ? (
                    <FormFeedback style={{ display: "block" }}>
                      {this.state[item.id + "Error"]}
                    </FormFeedback>
                  ) : (
                      ""
                    )}
                </FormGroup>
              </Col>
            )
        ))}
        {/* email */}
        {inputSlide === "slide3" ? (
          <Col sm="12">
            <small>
              By clicking "Next", you agree to our{" "}
              <Link to="/terms-of-use">Terms &amp; Conditions</Link> and{" "}
              <Link to="/privacy-policy">Privacy Policy</Link> and to receive
              important notices and other communications electronically.
          </small>
          </Col>
        ) : (
            ""
          )}
        {/* password */}

        {
          passwordSuggestionWrapper ? (
            <Col sm="12">
              <div className="password-suggestion" >
                <span
                  className="ps-password"
                  onClick={this.passwordMuskOnClick}
                >
                  {passwordSuggestion}
                </span>
                <span
                  className="ps-reset"
                  onClick={this.passwordResetOnClick}
                />
                <span className="ps-label">Suggested</span>
              </div>
            </Col>
          ) : (
              ""
            )}
        <Col sm="12">
          <FormGroup>
            <Button
              onClick={this.buttonOnClick}
              type="button"
              color="primary"
              className="mt15"
            >
              Next
          </Button>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default FormInput;
