import { React, useRef, useState, useEffect } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import "../../Components/StatusBar/status.css";
import HistoricData from "./HistoricData";

import file from "../Api/eur.json";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CurrencyBar from "./CurrencyBar";
import Menu from "../Menu/Menu";

import { useComponentVisible } from "../../Functions/useComponentVisible";
// import obj, { fire } from "../../dataFilter";

// const currencyList = ["United State Dollar", "USD", "GPB", "KWD", "ETH"];
function CurrentGraph() {
  const [state, setState] = useState();
  const linkFetch =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";

  let currencyList = ["usd", "eur", "gbp"];
  let dap;
  let obj = [];
  let indexofCurrency;
  useEffect(() => {
    fetch(linkFetch)
      .then((resp) => resp.json())
      .then((val) => {
        for (let i = 0; i <= currencyList.length; i++) {
          indexofCurrency = Object.keys(val?.eur).indexOf(currencyList[i]);
          const value = Object.entries(val?.eur);
          dap = value[indexofCurrency];
          console.log(dap);
          let name = dap[0];
          let valu = dap[1];
          obj.push({ value: valu, currency: name });
          setState(obj);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <CurrencyBar obj={state} chartSetting={chartSetting} />
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
