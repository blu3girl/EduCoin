import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class KOchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 59.21},
            {x: 01-03, y: 59.3},
            {x: 01-04, y: 60.29},
            {x: 01-05, y: 60.79},
            {x: 01-06, y: 60.47},
            {x: 01-07, y: 60.33},
            {x: 01-10, y: 60.43},
            {x: 01-11, y: 60.45},
            {x: 01-12, y: 60.54},
            {x: 01-13, y: 60.9},
            {x: 01-14, y: 61.39},
            {x: 01-18, y: 60.9},
            {x: 01-19, y: 61},
            {x: 01-20, y: 60.75},
            {x: 01-21, y: 60.45},
            {x: 01-24, y: 59.96},
            {x: 01-25, y: 59.82},
            {x: 01-26, y: 59.6},
            {x: 01-27, y: 59.65},
            {x: 01-28, y: 60.84}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Coca-Cola's Stock Prices Past Month</h1>
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