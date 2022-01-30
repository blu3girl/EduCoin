import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class TSLAchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 1056.78},
            {x: 01-03, y: 1199.78},
            {x: 01-04, y: 1149.59},
            {x: 01-05, y: 1088.12},
            {x: 01-06, y: 1064.7},
            {x: 01-07, y: 1026.96},
            {x: 01-10, y: 1058.12},
            {x: 01-11, y: 1064.4},
            {x: 01-12, y: 1106.22},
            {x: 01-13, y: 1031.56},
            {x: 01-14, y: 1049.61},
            {x: 01-18, y: 1030.51},
            {x: 01-19, y: 995.65},
            {x: 01-20, y: 996.27},
            {x: 01-21, y: 943.9},
            {x: 01-24, y: 930},
            {x: 01-25, y: 918.4},
            {x: 01-26, y: 937.41},
            {x: 01-27, y: 829.1},
            {x: 01-28, y: 846.35}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Tesla's Stock Prices Past Month</h1>
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