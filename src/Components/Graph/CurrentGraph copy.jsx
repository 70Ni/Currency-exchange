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
import Button from "../../Components/Menu/Button";
import Livevalues from "./Livevalues";

// import { DatePicker, DateRangeInput } from "rsuite";
// import { DateRangePicker } from "rsuite";
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
//     console.log(isComponentVisible)
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

// const dataset = obj;
// console.log(obj);
/////////////original data ////////

// const dataset = [
//   {
//     value: 80,
//     currency: "USD",
//   },

//   {
//     value: 28,
//     currency: "fpk",
//   },
//   {
//     value: 8,
//     currency: "FRP",
//   },
//   {
//     value: 20,
//     currency: "dLM",
//   },
//   {
//     value: 42,
//     currency: "D",
//   },
//   {
//     value: 2,
//     currency: "MLB",
//   },

//   {
//     value: 42,
//     currency: "ISHL",
//   },
// ];

const currencyList = ["United State Dollar", "USD", "GPB", "KWD", "ETH"];
// const dataset = null;
function CurrentGraph() {
  const [dataset, setDataset] = useState(null);

  // setDataset = obj;
  // const dataset = obj;

  useEffect(() => {
    setDataset(obj);
  }, []);

  console.log(dataset, "state");

  const [NewCurrency, setNewCurrency] = useState("");
  console.log(NewCurrency);
  const newCurrencyUpdate = (currency) => {
    return setNewCurrency(currency);
  };

  // const [color, setcolor] = useState("#d9d9d9");
  const colour = "#E16449";
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

  ////////////////////////////////////////////
  const NewGraph = {
    value: 12,
    currency: NewCurrency,
  };

  // function NewGraphUpdate() {
  //   dataset.push(NewGraph);
  //   // dataset.shift();
  //   const index = dataset[1];
  //   dataset.splice(1, 1);
  //   console.log(dataset.length);
  // }

  // useEffect(() => {
  //   return NewGraphUpdate();
  // }, [NewCurrency]);

  console.log(dataset);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  console.log(state[0].startDate.getMonth() + 1);

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
              {/* <DatePicker /> */}
              {/* <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                // preview={{
                //   startDate: new Date("2023-05-24"),
                //   endDate: "2023-09-24",
                // }}
                rangeColors="#d5df3b"
                // inputRanges={{
                //   label: "days up to today",
                //   range: () => ({
                //     startDate: new Date("2023-05-24"),
                //     endDate: new Date("2023-04-24"),
                //   }),
                // }}
              /> */}
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
          {/* <HistoricData /> */}
          <Livevalues />
          {/* <DateRange /> */}
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
