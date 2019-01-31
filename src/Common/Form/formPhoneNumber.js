import React, { Component } from "react";
import { FormGroup, Label, Button, FormFeedback } from "reactstrap";
import validator from "validator";
import NumberFormat from "react-number-format";
class FormPhoneNumber extends Component {
    state = {
        inputs: [],
        ids: []
    };
    inputOnChange = v => {
        const name = this.state.inputs[0].name;
        const input = v.value;
        const placeholder = this.state.inputs[0].placeholder;

        if (validator.isEmpty(input)) {
            this.setState({
                [name + "Error"]: placeholder + " is required",
                [name]: input,
                [name + "Style"]: "error"
            });
        } else {
            if (input.length > 9) {
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
        }
        this.props.onChange("0", input, name);
    };
    buttonOnClick = e => {
        var idArray = this.state.ids;
        var i = 0;
        do {
            var id = document.getElementById(idArray[i]);

            var inputWithSpace = id.value.replace(/-/g, '');
            var input = inputWithSpace.replace(/ /g, '');
            var placeholder = this.state.inputs[0].placeholder;
            var name = id.name;
            if (validator.isEmpty(input)) {
                this.setState({
                    [name + "Error"]: placeholder + " is required",
                    [name]: input,
                    [name + "Style"]: "error"
                });
            } else {
                if (input.length > 9) {
                    this.setState({
                        [name + "Error"]: "",
                        [name]: input,
                        [name + "Style"]: "success"
                    });
                    this.props.inputOnClick(e);
                } else {
                    this.setState({
                        [name + "Error"]: "This is not a valid " + placeholder,
                        [name]: input,
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
        const inputSlide = this.props.inputSlide;
        return (
            <div>
                {this.state.inputs.map((item, index) => (
                    <FormGroup key={"k" + index}>
                        <Label key={"lk" + index} for={item.placeholder} className="bold">
                            {item.placeholder}
                        </Label>
                        <NumberFormat
                            key={"ik" + index}
                            id={item.id}
                            name={item.name}
                            autoComplete="nope"
                            placeholder="xxx-xxx-xxxx"
                            format="###-###-####"
                            onValueChange={this.inputOnChange}
                            className={
                                "form-control " +
                                (this.state[item.id + "Style"]
                                    ? this.state[item.id + "Style"]
                                    : " ")
                            }
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
                {inputSlide === "slide6" ? (
                    <small className="opt-in">
                        Providing your number is consent to receive calls, texts
                        and pre-recorded messages from{" "}
                        <span className="site-name">Lender.page</span>, its
                        subsidiaries, agents and/or partners**
                    </small>
                ) : (
                        ""
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

export default FormPhoneNumber;
