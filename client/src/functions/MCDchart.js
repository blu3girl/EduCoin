import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class MCDchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 268.07},
            {x: 01-03, y: 268.58},
            {x: 01-04, y: 268.51},
            {x: 01-05, y: 267.19},
            {x: 01-06, y: 269.69},
            {x: 01-07, y: 267.06},
            {x: 01-10, y: 264.41},
            {x: 01-11, y: 262.12},
            {x: 01-12, y: 260.92},
            {x: 01-13, y: 261.41},
            {x: 01-14, y: 257.71},
            {x: 01-18, y: 256.48},
            {x: 01-19, y: 255.22},
            {x: 01-20, y: 253.13},
            {x: 01-21, y: 254.59},
            {x: 01-24, y: 253.61},
            {x: 01-25, y: 250.68},
            {x: 01-26, y: 249.85},
            {x: 01-27, y: 248.74},
            {x: 01-28, y: 256.09}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>McDonald's Stock Prices Past Month</h1>
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