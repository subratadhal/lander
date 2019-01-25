import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import validator from "validator";
import {
    FormGroup,
    Input,
    Label
} from "reactstrap";

class RadioInput extends Component {
    state = {
        name: ''
    }
    OptionChange = e => {
        const classes = document.getElementsByClassName("slide1-radio");
        var i;
        for (i = 0; i < classes.length; i++) {
            classes[i].classList.remove("active");
        }
        const id = e.target.id;
        document.getElementById(id + "-level").classList.add("active");
        this.props.onChange(e, e.target.value, this.props.name);
    };
    render() {
        const val = this.props.value;
        const id = this.props.id;
        const slideName = this.props.slideName;

        return (
            <div>
                <FormGroup>
                    {val.map((item, index) => (
                        <Label
                            check
                            className={(localStorage.getItem(this.props.name) === item) ? 'active ' + slideName + '-radio' : slideName + '-radio'}
                            id={slideName + '-radio' + index + '-level'}
                            key={id+index}
                        >
                            <Input
                                type="radio"
                                name={slideName + '-' + id}
                                value={item}
                                id={slideName + '-radio' + index}
                                checked={this.state.name === "option" + index}
                                onChange={this.OptionChange}
                                onClick={this.OptionChange}
                            />
                            {item}
                        </Label>
                    ))}
                </FormGroup>
            </div >
        );
    }
}

export default RadioInput;
