import React from "react";

import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890, 2390,
  3490,
];
const xLabels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "h",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
];
const color = "#f5f5f5";
export default function HistoricData() {
  return (
    <div className="chart-align">
      <div className="chart-block">
        <div className="sub-section">
          <div className="subHeader">United State Dollar</div>
          <div className="subHeader">$</div>
        </div>
        <LineChart
          margin={{
            left: 0,
            right: 0,
            top: 20,
            bottom: 20,
          }}
          // width={300}
          leftAxis={null}
          bottomAxis={{ disableTicks: true, disableLine: true }}
          // ...


          
          height={242}
          series={[
            {
              curve: "linear",
              data: uData,
              label: "uv",
              area: true,
              showMark: false,
              color,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: "none",
            },
            "& .MuiLineElement-root": {
              strokeDasharray: "4 2",
              strokeWidth: 2,
            },
          }}
        />
      </div>
    </div>
  );
}
