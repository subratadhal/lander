import React, { Component } from "react";
import {
    Tooltip
} from "reactstrap";

class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        const text = this.props.item
        return (
            <span>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                    {text}
                </Tooltip>
            </span>
        );
    }
}

export default TooltipItem;