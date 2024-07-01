import { React, useRef, useState, useEffect } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import "../../Components/StatusBar/status.css";
import HistoricData from "./HistoricData";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CurrencyBar from "./CurrencyBar";
import Menu from "../Menu/Menu";

import { useComponentVisible } from "../../Functions/useComponentVisible";
import fluctuationVector from "../../Functions/Fluctuation";
// import obj, { fire } from "../../dataFilter";

// const currencyList = ["United State Dollar", "USD", "GPB", "KWD", "ETH"];
function CurrentGraph() {
  const [allCurrency, setallCurrency] = useState();
  const [dataset, setDataset] = useState("");
  const [base, setbase] = useState("eur");
  const [sample, setSample] = useState();

  // console.log(urls.map((x) => console.log(x)));

  const changeBaseCurncy = () => {
    base == "eur" ? setbase("kwd") : setbase("eur");
  };
  const baseLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/`;
  const countryLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.1/v1/country.json`;

  // let linkFetch = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/kwd.json`;
  let linkFetch = baseLink + base + ".json";

  let currencyList = ["usd", "eur", "gbp", "kwd"];
  let dap = [];
  let obj = [];

  const urls = [linkFetch, countryLink];
  // useEffect(() => {
  //   let indexofCurrency;
  //   fetch(linkFetch)
  //     .then(async (resp) => await resp.json())
  //     .then(async (rep) => await setallCurrency(rep))
  //     .then(async (val) => {
  //       for (let i = 0; i <= currencyList.length; i++) {
  //         indexofCurrency = await Object.keys(allCurrency[base]).indexOf(
  //           currencyList[i]
  //         );
  //         let value = await Object.entries(val[base]);
  //         dap = value[indexofCurrency];
  //         let name = dap[0];
  //         let valu = dap[1];
  //         obj.push({ value: valu, currency: name.toUpperCase() });
  //         setDataset(obj);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [base]);

  useEffect(() => {
    let indexofCurrency;
    let name;
    let valu;
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
      async (respo) => {
        for (let i = 0; i <= currencyList.length; i++) {
          indexofCurrency = await Object.keys(respo[0][base]).indexOf(
            currencyList[i]
          );
          // console.log(currencyList.length, "MEMEBERS");
          let value = await Object.entries(respo[0][base]);
          dap = await value[indexofCurrency];
          if (dap) {
            name = await dap[0];
            valu = await dap[1];
            obj.push({ value: valu, currency: name.toUpperCase() });
          }

          setDataset({
            data: respo[0],
            country: respo[1],
            graphCurrency: obj,
          });
        }

        // console.log(members, "MME");
      }
    );
    return () => {};
  }, []);
  console.log(dataset, "SAMPLE");
  // console.log(dataset, "FIlter");
  // console.log(allCurrency, "All");

  const [NewCurrency, setNewCurrency] = useState("");
  const newCurrencyUpdate = (e) => {
    let newBar = [];
    let newIndex = null;
    newIndex = Object.keys(allCurrency[base]).indexOf(e);
    console.log(newIndex, "NEW INDEX");

    let value = Object.entries(allCurrency[base]);
    let dap = value[newIndex];
    let name = dap[0];
    let valu = dap[1];
    newBar.push({ value: valu, currency: name.toUpperCase() });
    // setDataset((prevPerson) => {
    //   prevPerson,
    //   // newBar
    //   ////////////////end here
    // })
  };

  let c = fluctuationVector(8, 3);
  // console.log(c);
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
              <div className="tag basetag" onClick={() => changeBaseCurncy()}>
                Base of 1 {base.toUpperCase()}
                <h1>{dataset ? dataset.country.ad.currency_number : null}</h1>
              </div>
            </div>
            <div className="bar-chart-act">
              {dataset ? (
                <CurrencyBar
                  obj={dataset?.graphCurrency}
                  chartSetting={chartSetting}
                />
              ) : (
                "nothing found"
              )}
              <div className="menu-section">
                <img
                  src={add}
                  alt=""
                  className="addIcon"
                  onClick={(e) => setIsComponentVisible(true)}
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
