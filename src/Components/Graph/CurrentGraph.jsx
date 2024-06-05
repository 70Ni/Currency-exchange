import { React, useRef, useState, useEffect } from "react";
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
import Menu from "../Menu/Menu";

import { useComponentVisible } from "../../Functions/useComponentVisible";
// export function useComponentVisible(initialIsVisible) {
//   const [isComponentVisible, setIsComponentVisible] =
//     useState(initialIsVisible);
//   const ref = useRef(null);

//   const handleHideDropdown = (event: KeyboardEvent) => {
//     if (event.key === "Escape") {
//       setIsComponentVisible(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setIsComponentVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleHideDropdown, true);
//     document.addEventListener("click", handleClickOutside, true);
//     return () => {
//       document.removeEventListener("keydown", handleHideDropdown, true);
//       document.removeEventListener("click", handleClickOutside, true);
//     };
//   });

//   return { ref, isComponentVisible, setIsComponentVisible };
// }

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

const currencyList = ["INR", "USD", "GPB", "KWD", "ETH"];
function CurrentGraph() {
  const [NewCurrency, setNewCurrency] = useState("");
  console.log(NewCurrency);
  const newCurrencyUpdate = (currency) => {
    return setNewCurrency(currency);
  };

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

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setvis(true);
  //     console.log("Hello there");
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside());
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside());
  //   };
  // }, []);

  ////////////////////////////////////////////
  const NewGraph = {
    value: 12,
    currency: NewCurrency,
  };

  function NewGraphUpdate() {
    dataset.push(NewGraph);
    // dataset.shift();
    const index = dataset[1];
    dataset.splice(1, 1);
    console.log(dataset.length);
  }

  useEffect(() => {
    return NewGraphUpdate();
  }, [NewCurrency]);

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
        </div>
      </div>
    </div>
  );
}

export default CurrentGraph;
