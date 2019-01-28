import React, { Component } from "react";
import { FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";
import validator from "validator";
import { Link } from "react-router-dom";

class FormInput extends Component {
  state = {
    inputs: [],
    ids: []
  };
  inputOnChange = e => {
    console.log("e", e);
    const placeholder = e.target.placeholder;
    const name = e.target.name;
    console.log("name", name);
    const input = e.target.value ? e.target.value : "";
    const type = e.target.type;
    console.log("type", type);

    if (validator.isEmpty(input)) {
      this.setState({
        [name + "Error"]: placeholder + " is required",
        [name]: input,
        [name + "Style"]: "error"
      });
    } else {
      if (type === "email") {
        if (validator.isEmail(input)) {
          console.log("sd");
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: "success"
          });
        } else {
          this.setState({
            [name + "Error"]: "",
            [name]: input,
            [name + "Style"]: ""
          });
        }
      } else {
        this.setState({
          [name + "Error"]: "",
          [name]: input,
          [name + "Style"]: ""
        });
      }
      this.props.onChange(e, input, name);
    }
    console.log("input", input);
    //this.props.onChange(e, input, name);
  };
  inputOnClick = e => {
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

    console.log("return not execute");
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
    console.log("inputs", inputs);
  }
  render() {
    console.log(this.state);
    const inputSlide = this.props.inputSlide;
    return (
      <div>
        {this.state.inputs.map((item, index) => (
          <FormGroup key={"k" + index}>
            <Label key={"lk" + index} for={item.placeholder} className="bold">
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
        ))}

        {inputSlide === "slide3" ? (
          <small>
            By clicking "Next", you agree to our{" "}
            <Link to="/terms-of-use">Terms &amp; Conditions</Link> and{" "}
            <Link to="/privacy-policy">Privacy Policy</Link> and to receive
            important notices and other communications electronically.
          </small>
        ) : (
          ""
        )}
        <FormGroup>
          <Button
            onClick={this.inputOnClick}
            type="button"
            color="primary"
            className="mt15"
          >
            Next
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default FormInput;
