import React, { Component } from "react";
import { FormGroup, Label, Button, FormFeedback } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class FormDatePicker extends Component {
  state = {
    inputs: [],
    ids: [],
    nextPayDateError: "",
    nextPayDate: "",
    nextPayDateStyle: ""
  };
  inputOnChange = (date) => {
    if (date !== null) {
      this.setState({
        nextPayDateError: "",
        nextPayDate: date,
        nextPayDateStyle: "success"
      });
    }
    this.props.onChange(date, date, "nextPayDate");
  };
  buttonOnClick = e => {
    this.props.inputOnClick(e);
  };
  componentDidMount() {
    //Datepicker keyboard disable in mobile
    setTimeout(function () {
      const datePicker = document.getElementById("nextPayDate");
      datePicker.setAttribute("readOnly", true);
    }, 1000);
    const inputs = Array.from(this.props.inputProps);

    var toDay = new Date();
    if (!localStorage.getItem("nextPayDate")) {
      localStorage.setItem("nextPayDate", toDay);
    }
    this.setState({
      inputs: inputs
    });

    var arr = [];
    var i = 0;
    var storeDate = new Date(localStorage.getItem("nextPayDate"));
    do {
      this.setState({
        [inputs[i].id]: storeDate ? storeDate : toDay,
        [inputs[i].id + "Error"]: "",
        [inputs[i].id + "Style"]: ""
      });
      arr[i] = inputs[i].id;
      i++;
    } while (i < inputs.length);
    this.setState({
      ids: arr
    });

  }

  render() {
    return (
      <div>
        {this.state.inputs.map((item, index) => (
          <FormGroup key={"k" + index}>
            <Label key={"lk" + index} for={item.placeholder} className="bold">
              Choose your next payday
            </Label>
            <DatePicker
              key={"ik" + index}
              name={item.name}
              id={item.id}
              placeholder="Next Pay Date"
              className={this.state[item.id + "Style"]}
              onChange={this.inputOnChange}
              autoComplete="nope"
              selected={this.state.nextPayDate}
              startDate={this.state.nextPayDate}
            />
            {this.state[item.id + "Error"] !== "" ? (
              <FormFeedback style={{ display: "block" }}>
                {this.state[item.id + "Error"]}
              </FormFeedback>
            ) : (
                ""
              )}
          </FormGroup>
        )
        )}

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
      </div>
    );
  }
}

export default FormDatePicker;
