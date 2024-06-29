import { React, useRef, useState, useEffect } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import "../../Components/StatusBar/status.css";
import HistoricData from "./HistoricData";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import Menu from "../Menu/Menu";

import { useComponentVisible } from "../../Functions/useComponentVisible";
import obj from "../../Fun";

const currencyList = ["United State Dollar", "USD", "GPB", "KWD", "ETH"];
// const dataset = null;
function CurrentGraph() {
  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    setDataset(obj);
  }, []);

  console.log(dataset, "state");

  const [NewCurrency, setNewCurrency] = useState("");
  console.log(NewCurrency);
  const newCurrencyUpdate = (currency) => {
    return setNewCurrency(currency);
  };

  const colour = "#d9d9d9";
  const valueFormatter = (value) => `${value}`;

  const chartSetting = {
    yAxis: [
      {
        label: `rate in ${dataset?.currency}`,
      },
    ],
    series: [{ dataKey: "value", valueFormatter, colour }],
    height: 242,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);
  // console.log(state[0].startDate.getMonth() + 1);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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
          <div className="Button para">Go Live</div>
        </div>
      </div>
      <div className="curl-bottom">
        <div className="graph-wrapper">
          <div className="chart-align">
            <div className="sub-section">
              <div className="sub-Header">Currencies</div>
              <div className="tag">Base of 1 USD</div>
            </div>
            <div className="bar-chart-act">
              <BarChart
                dataset={obj}
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
                  },
                ]}
                {...chartSetting}
              />
              <div className="menu-section">
                <img
                  src={add}
                  alt=""
                  className="addIcon"
                  onClick={() => setIsComponentVisible(true)}
                />
                <Menu
                  ref={ref}
                  hidden={isComponentVisible}
                  newCurrencyUpdate={newCurrencyUpdate}
                  currencyList={currencyList}
                />
              </div>
            </div>
          </div>
          <HistoricData />
          {/* <Livevalues /> */}
        </div>
      </div>
    </div>
  );
}

export default CurrentGraph;

//collect a month json file
//filter data to graph

//request data based on date range - fluctuation
//request data based on date

//color theme
//dark mode
