import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class GMEchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 148.39},
            {x: 01-03, y: 152.84},
            {x: 01-04, y: 148.91},
            {x: 01-05, y: 129.37},
            {x: 01-06, y: 131.03},
            {x: 01-07, y: 140.62},
            {x: 01-10, y: 131.15},
            {x: 01-11, y: 130.3},
            {x: 01-12, y: 128.06},
            {x: 01-13, y: 122.48},
            {x: 01-14, y: 116.65},
            {x: 01-18, y: 108.91},
            {x: 01-19, y: 106.57},
            {x: 01-20, y: 102.67},
            {x: 01-21, y: 106.36},
            {x: 01-24, y: 100.15},
            {x: 01-25, y: 99.79},
            {x: 01-26, y: 103.26},
            {x: 01-27, y: 93.52},
            {x: 01-28, y: 97.91}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>GameStop's Stock Prices Past Month</h1>
        <VictoryChart >
          <VictoryLine
            data={this.state.data}
            fixLabelOverlap={true}
            style={{
              data: {
                stroke: "#02B875",
                ticks: {stroke: "grey", size: 1}
              }
            }}
          />
          <VictoryAxis 
            tickCount={6}
            label = "Date"
            />
            <VictoryAxis 
            dependentAxis
            tickCount={6}
            />

        </VictoryChart>
      </div>
    );
  }
}