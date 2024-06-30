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

const currencyList = ["United State Dollar", "USD", "GPB", "KWD", "ETH"];
// const dataset = null;
function CurrentGraph() {
  const [dataset, setDataset] = useState(null);

  let cur;

  const [state, setState] = useState();
  const linkFetch =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";
  // "https://jsonplaceholder.typicode.com/todos/1";
  const getData = async () => {
    // await fetch(linkFetch)
    const response = await fetch(linkFetch).then((resp) => {
      resp.json();
    });
    return response;
  };
  let curr = ["usd", "eur", "gbp"];
  let dap;
  let i = 0;
  let obj = [];
  let indexofCurrency;
  useEffect(() => {
    fetch(linkFetch)
      .then((resp) => resp.json())
      .then((val) => {
        for (let i = 0; i <= curr.length; i++) {
          indexofCurrency = Object.keys(val?.eur).indexOf(curr[i]);
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
    ////////////////////////////////
    // getData().then((data) => {
    //   setstate({ data: data });
    //   console.log(state, "fomr state");
    // });
    ///////////////////////////
    // fetch(linkFetch)
    //   .then((response) => response.json())
    //   .then((users) => {
    //     setState({ robots: users });
    //   });
  }, []);
  console.log(state,"state");

  // useEffect(() => {
  //   // Function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from the API
  //       const response = await fetch(
  //         "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json"
  //       )
  //         .then(async (fetch) => await (cur = fetch.json()))
  //         .then(() => {
  //           setDataset(cur);
  //         });
  //       // Check if request was successful
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       // let data = await response.json();
  //       // let parse = await JSON.stringify(data);
  //       // let par = await JSON.parse(data);
  //       // Parse JSON response
  //       // console.log(daa, "json");
  //       // const jsonstring = JSON.stringify(jsonData);
  //       // const jsonParse = JSON.parse(jsonstring);
  //       // Update state with fetched data
  //       // setDataset(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Call fetchData function when component mounts
  //   fetchData();
  //   // Clean up function (optional)
  //   // return () => {
  //   //   // Any cleanup code goes here
  //   //   // 2.uncomment this <==================================
  //   //   // setweatherData(details);
  //   // };
  // }, []);

  ///////////////////////////////////
  // console.log(dataset, "state");
  ///////////////////////////
  // console.log(dataset.eur, "Date found");
  // console.log(Object.entries(dataset.eur));
  /////////////////////////

  // console.log(file);
  // if (dataset) {
  //   let c = fire(dataset);
  //   console.log(c);
  // }

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
              {/* <CurrencyBar obj={obj} chartSetting={chartSetting} /> */}
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
