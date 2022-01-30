import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default class GOOGLchart extends Component {
  constructor() {
    super();
    this.state = {
        data: [
            {x: 12-31, y: 2897.04},
            {x: 01-03, y: 2899.83},
            {x: 01-04, y: 2887.99},
            {x: 01-05, y: 2755.5},
            {x: 01-06, y: 2754.95},
            {x: 01-07, y: 2740.34},
            {x: 01-10, y: 2773.39},
            {x: 01-11, y: 2794.72},
            {x: 01-12, y: 2828.61},
            {x: 01-13, y: 2771.74},
            {x: 01-14, y: 2789.61},
            {x: 01-18, y: 2719.96},
            {x: 01-19, y: 2702.33},
            {x: 01-20, y: 2666.15},
            {x: 01-21, y: 2607.03},
            {x: 01-24, y: 2616.08},
            {x: 01-25, y: 2538.7},
            {x: 01-26, y: 2584.66},
            {x: 01-27, y: 2580.1},
            {x: 01-28, y: 2667.02}
        ]
      };
    }
  render() {
      console.log(this.state.data)
    return (
      <div>
        <h1>Google's Stock Prices Past Month</h1>
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