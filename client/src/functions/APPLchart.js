import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class APPLchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 177.57},
            {x: 01-03, y: 182.01},
            {x: 01-04, y: 179.7},
            {x: 01-05, y: 174.92},
            {x: 01-06, y: 172},
            {x: 01-07, y: 172.17},
            {x: 01-10, y: 172.19},
            {x: 01-11, y: 175.08},
            {x: 01-12, y: 175.53},
            {x: 01-13, y: 172.19},
            {x: 01-14, y: 173.07},
            {x: 01-18, y: 169.8},
            {x: 01-19, y: 166.23},
            {x: 01-20, y: 164.51},
            {x: 01-21, y: 162.41},
            {x: 01-24, y: 161.62},
            {x: 01-25, y: 159.78},
            {x: 01-26, y: 159.69},
            {x: 01-27, y: 159.22},
            {x: 01-28, y: 170.33}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Apple's Stock Prices Past Month</h1>
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