import React, { Component } from "react";
import DonutChart from 'react-donut-hole'

class DonutChartWrapper extends Component {


    render() {
        const segments = [
            { key: 'Loan', value: this.props.value, color: '#95c11f' },
            { key: 'Blank', value: 100 - this.props.value, color: '#ddd' }
        ]

        return (
            <DonutChart className="donut-chart"
                segments={segments}
                filters={[]}
                segmentStyle="flat"
                lineWidth={2}
                animationDuration={'0.5s'}
                dropShadow={false}
            >
                <div>{this.props.value}%</div>
            </DonutChart >
        );
    }
}

export default DonutChartWrapper;