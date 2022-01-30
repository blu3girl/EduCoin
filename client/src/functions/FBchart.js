import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class FBchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 336.35},
            {x: 01-03, y: 338.54},
            {x: 01-04, y: 336.53},
            {x: 01-05, y: 324.17},
            {x: 01-06, y: 332.46},
            {x: 01-07, y: 331.79},
            {x: 01-10, y: 328.07},
            {x: 01-11, y: 334.37},
            {x: 01-12, y: 333.26},
            {x: 01-13, y: 326.48},
            {x: 01-14, y: 331.9},
            {x: 01-18, y: 318.15},
            {x: 01-19, y: 319.59},
            {x: 01-20, y: 316.56},
            {x: 01-21, y: 303.17},
            {x: 01-24, y: 308.71},
            {x: 01-25, y: 300.15},
            {x: 01-26, y: 294.63},
            {x: 01-27, y: 294.64},
            {x: 01-28, y: 301.71}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Facebook's Stock Prices Past Month</h1>
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