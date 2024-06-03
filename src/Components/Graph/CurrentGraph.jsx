import { React, useState } from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import HistoricData from "./HistoricData";

const dataset = [
  {
    value: 80,
    currency: "USD",
  },

  {
    value: 28,
    currency: "fpk",
  },
  {
    value: 8,
    currency: "FRP",
  },
  {
    value: 20,
    currency: "dLM",
  },
  {
    value: 42,
    currency: "D",
  },
  {
    value: 2,
    currency: "MLB",
  },

  {
    value: 42,
    currency: "ISHL",
  },
];

const colo = "#d9d9d9";
function CurrentGraph() {
  const [color, setcolor] = useState("#d9d9d9");
  const valueFormatter = (value) => `${value}`;

  const chartSetting = {
    yAxis: [
      {
        label: `rate in ${dataset.currency}`,
      },
    ],
    series: [{ dataKey: "value", valueFormatter, color }],
    height: 242,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };

  return (
    <div className="current-wrapper">
      <div className="Header-section">
        <div className="cur-left">
          <div className="Header">Currency Graph</div>
          <div className="para">
            Information about the currency’s fluctuation on a day-to-day basis
          </div>
        </div>
        <div className="cur-right">
          <div className="Button para">Select Range</div>
        </div>
      </div>
      <div className="curl-bottom">
        <div className="graph-wrapper">
          <div className="chart-align">
            <div className="sub-section">
              <div className="subHeader">Currencies</div>
              <div className="tag">Base of 1 USD</div>
            </div>
            <div className="bar-chart-act">
              <BarChart
                dataset={dataset}
                borderRadius={4}
                grid={{ vertical: false }}
                leftAxis={null}
                bottomAxis={{ disableTicks: true, disableLine: true }}
                // ...
                height={242}
                // width={300}
                margin={{
                  left: 0,
                  right: 0,
                  top: 20,
                  bottom: 20,
                }}
                xAxis={[
                  {
                    scaleType: "band",
                    dataKey: "currency",
                    //underline value here ........s
                    //   tickPlacement,
                  },
                ]}
                {...chartSetting}
              />
              <img src={add} alt="" className="addIcon" />
            </div>
          </div>
          <HistoricData />
        </div>
      </div>
    </div>
  );
}

export default CurrentGraph;
