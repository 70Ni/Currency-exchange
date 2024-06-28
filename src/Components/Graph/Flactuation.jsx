import { React, useState } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";

const dataset = [
  {
    value: 28,
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
];

const colo = "#d9d9d9";

function Flactuation() {
  const [color, setcolor] = useState("#d9d9d9");
  const valueFormatter = (value) => `${value}`;

  const chartSetting = {
    yAxis: [
      {
        label: `rate in ${dataset.currency}`,
      },
    ],
    series: [{ dataKey: "value", valueFormatter, color }],
    height: 264,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };
  return (
    <div className="current-wrapper Flactuation-wrapper">
      <div className="Header-section">
        <div className="cur-left">
          <div className="Header">Fluctuation</div>
          <div className="para">30 May - 31 May</div>
        </div>
        <div className="cur-right">
          <div className="Button">Select range</div>
        </div>
      </div>
      <div className="sub-section">
        <div className="para">
          Information about the currency’s fluctuation on a day-to-day basis
        </div>
      </div>
      <div className="graph-wrapper">
        <div className="chart-align fluc-chart">
          <BarChart
            dataset={dataset}
            borderRadius={4}
            grid={{ vertical: false }}
            leftAxis={null}
            bottomAxis={{ disableTicks: true, disableLine: true }}
            // ...
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
        </div>
        <div className="fluc-data-wrapper">
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div className="indicator"></div>
              <div className="para">Start Rate</div>
            </div>
            <div className="fluc-rate sub-Header">0.3542</div>
          </div>
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div className="indicator"></div>
              <div className="para">Start Rate</div>
            </div>
            <div className="fluc-rate sub-Header">0.3542</div>
          </div>
          <div className="fluc-final-value">
            <div className="fluc-data-line">
              <div className="fluc-value">
                <div className="indicator"></div>
                <div className="para">Start Rate</div>
              </div>
              <div className="tag spacer8">2358</div>
            </div>
            <div className="fluc-rate Header final-fluc-value">0.3542</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flactuation;
