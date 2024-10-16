import { React, useRef, useState, useEffect } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import "../../Components/StatusBar/status.css";
import Livevalues from "../../Components/Graph/Livevalues";
import HistoricData from "./HistoricData";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CurrencyBar from "./CurrencyBar";
import Menu from "../Menu/Menu";

import { useComponentVisible } from "../../Functions/useComponentVisible";
import fluctuationVector from "../../Functions/Fluctuation";
import Flactuation from "./Flactuation";
import { useDispatch, useSelector } from "react-redux";
import {
  baseCurrecny,
  fetchitemData,
  fluctuationData,
} from "../../actions/datafetch";

import country from "../Api/country.json";
let parseCount = Object.values(country);
for (let i = 0; i < parseCount.length; i++) {
  // let c = [];
  // c.push(parseCount[i].currency_code == "kwd");
  // let a = c.indexOf(true);
}
let m = parseCount.findIndex((x) => x.currency_code === "kwd");
let match = parseCount[m];
console.log(match);

function CurrentGraph() {
  const [allCurrency, setallCurrency] = useState();
  // const [dataset, setDataset] = useState([]);
  const [base, setbase] = useState("eur");
  // const [defaultCurrency, setdefaultCurrency] = useState("usd");
  const [currencyList, setcurrencyList] = useState([
    "usd",
    "eur",
    "kwd",
    "gbp",
    "cad",
    "chf",
    "aud",
    // "nzd",
    // "aed",
    // "dkk",
    // "chf",
    // "sgd",
    // "brl",
    // "brn",
  ]);

  let arra = [
    "United State Dollar",
    "eur",
    "kwd",
    "gbp",
    "cad",
    "chf",
    "aud",
    "nzd",
    "aed",
    "dkk",
    "chf",
    "sgd",
    "brl",
    "azn",
  ];

  const newBarUpdate = (e) => {
    currencyList.indexOf(e) === -1
      ? setcurrencyList((p) => [...p, e].slice(1))
      : console.log("exist");
    dispatch(fetchitemData(green, defaultCurrency, currencyList));
    dispatch(baseCurrecny(e, green));
    dispatch(fluctuationData(green, defaultCurrency, null, currencyList));

    // console.log(arra.indexOf(e) === -1);
  };

  console.log(currencyList);

  const [sample, setSample] = useState();
  const dispatch = useDispatch();

  let online = useSelector((state) => state?.online.online);
  let dataset = useSelector((state) => state?.fetchdata?.data?.obj);
  let da = useSelector((state) => state);
  console.log(da);

  let defaultCurrency = useSelector((state) => state?.online?.defcurrency);
  let green = useSelector((state) => state?.online?.online);

  console.log(green);
  const changeBaseCurncy = () => {
    base == "eur" ? setbase("kwd") : setbase("eur");
  };
  useEffect(() => {
    dispatch(fetchitemData(green, defaultCurrency, currencyList));
    dispatch(fluctuationData(green, defaultCurrency, null, currencyList));
  }, [defaultCurrency, green]);

  function setOnline() {
    dispatch(baseCurrecny(defaultCurrency, !green));
  }

  function reFresh() {
    dispatch(fetchitemData(green, defaultCurrency, currencyList));
    dispatch(fluctuationData(green, defaultCurrency, null, currencyList));
  }

  const valueFormatter = (value) => `${value}`;

  const chartSetting = {
    yAxis: [
      {
        label: `rate in ${dataset?.currency}`,
      },
    ],
    series: [{ dataKey: "value", valueFormatter, color: "#E16449" }],
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
          <div className="Header">Currency Graph {defaultCurrency}</div>
  
          <div className="para">
            {green
              ? "Information about the currency’s fluctuation on a day-to-day basis"
              : "This is the currency value stored previously on the file. Use Go live for up to date"}
          </div>
        </div>
        {/* {green && <div className="status-icon-online space-right2"></div>} */}
        <div className="cur-right">
          <div className="flex"></div>
          <div
            className={`Button ${
              green ? "Button-yellow" : "Button-green"
            }  para`}
            onClick={setOnline}
          >
            {green ? "Historic" : "Go Live"}
          </div>
        </div>
      </div>
      <div className="curl-bottom">
        <div className="graph-wrapper">
          <div className="chart-align">
            <div className="sub-section">
              <div className="sub-Header">Currencies</div>
              <div className="tag basetag" onClick={setOnline}>
                Base of 1 {base.toUpperCase()}
                {/* <h1>{dataset ? dataset.country.ad.currency_number : null}</h1> */}
              </div>
            </div>
            <div className="bar-chart-act">
              {dataset ? (
                <CurrencyBar obj={dataset} chartSetting={chartSetting} />
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
                  newCurrencyUpdate={newBarUpdate}
                  currencyList={arra}
                />
              </div>
            </div>
          </div>
          {green ? <Livevalues /> : <HistoricData />}
        </div>
      </div>

      {/* not using redux */}
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
