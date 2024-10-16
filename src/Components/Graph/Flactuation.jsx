import { React, useEffect, useState, useRef } from "react";

import { BarChart, BarPlot } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import DatePicker from "../../Components/DatePicker/DatePicker";
import fluctuationVector from "../../Functions/Fluctuation";
import { useSelector } from "react-redux";
import { colors } from "@mui/material";
import { useComponentVisible } from "../../Functions/useComponentVisible";

// const dataset = [
//   {
//     value: 28,
//     rate: "Start",
//   },

//   {
//     value: 8,
//     rate: "End",
//   },
//   {
//     value: 45,
//     rate: "Fluc",
//   },
// ];

const color = "#d9d9d9";

let condition = false;
if (condition) {
  console.log("Hello");
} else if (!condition) {
  console.log("user module");
}

function Flactuation({ base }) {
  // console.log(base);
  const [date, setDate] = useState({
    startDate: "2024-03-06",
    endDate: "2024-03-07",
    base: base,
  });

  // console.log(date.startDate);
  const [fetchData, setfetchData] = useState("");

  const barGraph = useSelector((state) => state?.fluctuation);
  let bar = barGraph;
  console.log(bar, "=====");
  const dates = useSelector((state) => state?.fluctuation?.DateRange);

  const fistLink =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
    date.startDate +
    "/v1/currencies/eur.json";

  const secondLink =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
    date.endDate +
    "/v1/currencies/eur.json";
  // ----------------->
  const urls = [fistLink, secondLink];
  // useEffect(() => {
  //   let indexofCurrency;
  //   let name;
  //   let valu;
  //   Promise.all(
  //     urls.map((url) =>
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((res) => res.eur)
  //     )
  //   ).then(async (eur) => {
  //     // console.log(eur);
  //     let b = JSON.stringify(eur[0]);
  //     let firstDate = JSON.parse(b);
  //     // console.log(firstDate.eur, "fist");
  //     let firstvalue = firstDate.kwd;

  //     let c = JSON.stringify(eur[1]);
  //     let secondDate = JSON.parse(c);
  //     // console.log(secondDate["00"], "second");
  //     // console.log(firstDate.eur, "fist");
  //     let secondValue = secondDate.kwd;

  //     let rateChange = fluctuationVector(secondValue, firstvalue);

  //     setfetchData({
  //       starRate: firstvalue,
  //       endRate: secondValue,
  //       rateChange: rateChange,
  //     });
  //   });
  // }, []);

  // const [dataset, setDataset] = useState([
  //   {
  //     value: 28,
  //     currency: "usd",
  //     startDate: "01-12-1994"
  //   },

  //   {
  //     value: 28,
  //     currency: "fpk",
  //   },
  //   {
  //     value: 8,
  //     currency: "FRP",
  //   },
  // ]);

  const [color, setcolor] = useState("#d9d9d9");
  const valueFormatter = (value) => `${value}`;

  const chartSetting = {
    yAxis: [
      {
        label: `rate in ${bar?.graphvalues?.rate}`,
      },
    ],
    series: [
      { dataKey: "value", valueFormatter, colors: ["#d9d9d9", "#45239"] },
    ],
    height: 264,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
  };
  const monthDay = (dateIndex) => {
    console.log(dateIndex?.split("-").splice(1, 2).join("-"));
    let c = dateIndex?.split("-").splice(1, 2);
    let d = ([c[0], c[1]] = [c[1], c[0]]);
    let e = d.join("-");
    console.log(e);
    return e;
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [visible, setvisible] = useState(false);

  const useOutsideClick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [callback]);

    return ref;
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick(() => setIsOpen(false));

  const ChangeVisible = (action) => {
    setvisible(action);
  };

  const barColors = ["#FDCF6E", "#DC9A0E", "#FDCF6E"];
  return (
    <div className="current-wrapper Flactuation-wrapper">
      <div className="Header-section">
        <div className="cur-left">
          <div className="Header">Fluctuation</div>
          {/* {dates ? (
            <div className="para">
              {monthDay(dates[0])} - {monthDay(dates[1])}
            </div>
          ) : null} */}
        </div>
        <div className="cur-right">
          <div
            className="Button"
            style={{ display: "block" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close Range" : "Select Range"}
          </div>
        </div>
      </div>
      <div className="sub-section">
        <div className="para">
          Information about the currency’s fluctuation on a day-to-day basis
        </div>
      </div>
      <div className="date-picker-in">
        <div className="datepicker" ref={dropdownRef}>
          {isOpen && (
            <DatePicker
              setIsOpen={setIsOpen}
              ChangeVisible={ChangeVisible}

              // useOutsideClick={useOutsideClick}
            />
          )}
        </div>
      </div>
      <div className="fluc-data-line">
        <div className="fluc-value">
          <div className="fluc-wraper">
            <div className="para">
              Base Value <span className="tag">EUR</span>{" "}
            </div>
          </div>
        </div>
        <div className="fluc-wraper">
          {dates ? (
            <div className="para">
              {monthDay(dates[0])} - {monthDay(dates[1])}
            </div>
          ) : null}
        </div>
      </div>
      <div className="graph-wrapper fluctuation-grp-wrapper">
        <div className="chart-align fluc-chart">
          {bar.graphvalues ? (
            <BarChart
              dataset={bar?.graphvalues}
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
              // axisHighlight={{ y: "none", x: "line" }}
              xAxis={[
                {
                  scaleType: "band",
                  dataKey: "rate",
                  xAxis: "flexStart",
                  tickLabelPlacement: "middle",
                  //underline value here ........s
                  //   tickPlacement,

                  colorMap: {
                    type: "ordinal",
                    // values: value,

                    colors: barColors,
                  },
                },
              ]}
              {...chartSetting}
            />
          ) : bar.message ? (
            <div className="para">"No internet connection"</div>
          ) : (
            "Nothing found"
          )}
        </div>
        <div className="fluc-data-wrapper">
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div
                className="indicator"
                style={{ backgroundColor: "#FDCF6E" }}
              ></div>
              <div className="para">Start Rate</div>
            </div>
            {bar.graphvalues ? (
              <div className="fluc-rate sub-Header">
                {bar?.graphvalues[0]?.value?.toFixed(3)}
              </div>
            ) : null}
          </div>
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div
                className="indicator"
                style={{ backgroundColor: "#DC9A0E" }}
              ></div>
              <div className="para">End Rate</div>
            </div>
            {bar.graphvalues ? (
              <div className="fluc-rate sub-Header">
                {bar?.graphvalues[1]?.value?.toFixed(3)}
              </div>
            ) : null}
          </div>
          <div className="fluc-final-value">
            <div className="fluc-data-line">
              <div className="fluc-value">
                {/* <div className="indicator"></div> */}
                <div className="para">Rate change</div>
              </div>
              {bar ? (
                <div
                  className="tag spacer8 lowHigh"
                  style={
                    bar?.RateVector == "Low"
                      ? { backgroundColor: "#EFBDB2" }
                      : { backgroundColor: "#A9D395" }
                  }
                >
                  {bar?.RateVector}
                </div>
              ) : null}
            </div>
            {bar.graphvalues ? (
              <div
                className="fluc-rate final-fluc-value"
                style={
                  bar?.RateVector == "Low"
                    ? { color: "#4C9C0D" }
                    : { color: "#329B00" }
                }
              >
                {bar?.graphvalues[2]?.value.toFixed(5)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flactuation;
