import React, { Component } from "react";
import { FormGroup, Input, Label, Button, FormFeedback, InputGroup, InputGroupAddon } from "reactstrap";
import validator from "validator";
import TooltipItem from "../Tooltip/tooltipitem";
class FormSSN extends Component {
    state = {
        inputs: [],
        ids: [],
        tooltips: [
            {
                id: 0,
                text:
                    "By providing a phone number, you are agreeing that LendingTree, its Network Lenders, and/or partners may contact you at this number, or another number that you later provide. You also agree to receive calls and messages from automated dialing systems and/or by pre-recorded message, and text messages (where applicable) at these numbers. Normal cell phone charges may apply if you provide a cellular number. You may continue with our services without providing a phone number by calling x-xxx-xxx-xxxx."
            }
        ],
    };
    inputOnChange = e => {
        const placeholder = e.target.placeholder ? e.target.placeholder : e.target.name; //condition required for select as select have no placeholder
        const name = e.target.name;
        const input = e.target.value ? e.target.value : "";
        if (validator.isEmpty(input)) {
            this.setState({
                [name + "Error"]: placeholder + " is required",
                [name]: input,
                [name + "Style"]: "error"
            });
        } else {
            if (validator.isNumeric(input)) {
                if (input.length === 4) {
                    this.setState({
                        [name + "Error"]: "",
                        [name]: input,
                        [name + "Style"]: "success"
                    });
                    this.props.onChange(e, input, name);
                } else if (input.length > 4) {
                    this.setState({
                        [name + "Error"]: "Max 4 digit",
                        [name + "Style"]: "success"
                    });
                } else {
                    this.setState({
                        [name + "Error"]: "",
                        [name]: input,
                        [name + "Style"]: ""
                    });
                    this.props.onChange(e, input, name);
                }
            } else {
                this.setState({
                    [name + "Error"]: "Only numeric",
                    [name + "Style"]: "error"
                });
            }
        }

    };
    buttonOnClick = e => {
        var idArray = this.state.ids;
        var i = 0;
        do {
            var id = document.getElementById(idArray[i]);
            var input = id.value ? id.value : "";
            var placeholder = id.placeholder;
            var name = id.name;
            if (validator.isEmpty(input)) {
                this.setState({
                    [name + "Error"]: placeholder + " is required",
                    [name]: input,
                    [name + "Style"]: "error"
                });
            } else {
                if (validator.isNumeric(input)) {
                    if (input.length === 4) {
                        this.setState({
                            [name + "Error"]: "",
                            [name]: input,
                            [name + "Style"]: "success"
                        });
                        this.props.inputOnClick(e);
                    } else if (input.length > 4) {
                        this.setState({
                            [name + "Error"]: "Max 4 digit",
                            [name + "Style"]: "success"
                        });
                    } else {
                        this.setState({
                            [name + "Error"]: "Not a valid input",
                            [name]: input,
                            [name + "Style"]: "error"
                        });
                    }
                } else {
                    this.setState({
                        [name + "Error"]: "Only numeric",
                        [name + "Style"]: "error"
                    });
                }
            }

            i++;
        } while (i < idArray.length);
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
    }

    render() {
        return (
            <div>
                {this.state.inputs.map((item, index) => (
                    <FormGroup key={"k" + index}>
                        <InputGroup className={this.state[item.id + "Style"]}>
                            <Label key={"lk" + index} for={item.placeholder} className="bold">
                                {item.placeholder} {" "}
                                <span
                                    className="tooltip-icon"
                                    id={"Tooltip-" + this.state.tooltips[0].id}
                                >
                                    ?
                                </span>
                            </Label>
                            <TooltipItem
                                key={this.state.tooltips[0].id}
                                item={this.state.tooltips[0].text}
                                id={this.state.tooltips[0].id}
                            />
                            <div className="from-center">
                                <Input
                                    key={"ik" + index}
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    autoComplete="nope"
                                    placeholder="xxxx"
                                    onChange={
                                        this.inputOnChange
                                    }
                                    value={this.state[item.id]}
                                />
                                <InputGroupAddon addonType="prepend">
                                    <span className="password-icon" />
                                </InputGroupAddon>
                            </div>
                            {this.state[item.id + "Error"] !== "" ? (
                                <FormFeedback
                                    className="feedback-center"
                                    style={{ display: "block" }}
                                >
                                    {this.state[item.id + "Error"]}
                                </FormFeedback>
                            ) : (
                                    ""
                                )}
                        </InputGroup>
                    </FormGroup>
                ))}
                <FormGroup className="center-content">
                    <Button
                        onClick={this.buttonOnClick}
                        type="button"
                        color="primary"
                        className="mt15 smaill"
                    >
                        Next
                    </Button>
                </FormGroup>
            </div>
        );
    }
}

export default FormSSN;
