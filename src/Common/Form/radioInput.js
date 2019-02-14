import React, { Component } from "react";

import { FormGroup, Input, Label, Row, Col } from "reactstrap";

class RadioInput extends Component {
  state = {
    name: ""
  };
  OptionChange = e => {
    const id = e.target.id;
    document.getElementById(id + "-level").classList.add("active");
    this.props.onChange(e, e.target.value, this.props.name);
  };
  render() {
    const localStoreItem = localStorage.getItem(this.props.name);
    const storeData = localStoreItem ? localStoreItem : "";
    const val = this.props.value;
    const id = this.props.id;
    const slideName = this.props.slideName;
    var smVal = "";
    if (slideName === "slide17") {
      smVal = 6;
    } else if (slideName === "slide30") {
      smVal = 6;
    } else {
      smVal = 12;
    }
    return (
      <div>
        <FormGroup>
          <Row>
            {val.map((item, index) => (
              <Col sm={smVal} key={id + index}>
                <Label
                  check
                  className={
                    storeData === item
                      ? "active " + slideName + "-radio"
                      : slideName + "-radio"
                  }
                  id={slideName + "-radio" + index + "-level"}
                >
                  <Input
                    type="radio"
                    name={slideName + "-" + id}
                    value={item}
                    id={slideName + "-radio" + index}
                    checked={this.state.name === "option" + index}
                    onChange={this.OptionChange}
                    onClick={this.OptionChange}
                  />
                  {item}
                </Label>
              </Col>
            ))}
          </Row>
        </FormGroup>
      </div>
    );
  }
}

export default RadioInput;
