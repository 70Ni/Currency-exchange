import { React, useEffect, useState } from "react";

import { BarChart, BarPlot } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import add from "../../Image/Add.svg";
import "./style.css";
import DatePicker from "../../Components/DatePicker/DatePicker";
import fluctuationVector from "../../Functions/Fluctuation";
import { useSelector } from "react-redux";
import { colors } from "@mui/material";

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
  const dates = useSelector((state) => state?.fluctuation[0]?.DateRange);

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
    console.log(dateIndex.split("-").splice(1, 2).join("-"));
    let c = dateIndex.split("-").splice(1, 2);
    let d = ([c[0], c[1]] = [c[1], c[0]]);
    let e = d.join("-");
    console.log(e);
    return e;
  };

  return (
    <div className="current-wrapper Flactuation-wrapper">
      <div className="Header-section">
        <div className="cur-left">
          <div className="Header">Fluctuation</div>
          {dates ? (
            <div className="para">
              {monthDay(dates[0])} - {monthDay(dates[1])}
            </div>
          ) : null}
        </div>
        <div className="cur-right">
          <div className="Button">Select range</div>
        </div>
      </div>
      {/* <div className="date-picker-in">{<DatePicker />}</div> */}
      <div className="sub-section">
        <div className="para">
          Information about the currency’s fluctuation on a day-to-day basis
        </div>
      </div>
      <div className="graph-wrapper fluctuation-grp-wrapper">
        <div className="chart-align fluc-chart">
          {bar ? (
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
                },
              ]}
              {...chartSetting}
            />
          ) : (
            "Nothing found"
          )}
        </div>
        <div className="fluc-data-wrapper">
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div className="para">Base Value :</div>
              <div className="tag">EUR</div>
            </div>
          </div>
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div className="indicator"></div>
              <div className="para">Start Rate</div>
            </div>
            <div className="fluc-rate sub-Header">
              {bar?.graphvalues[0]?.value?.toFixed(3)}
            </div>
          </div>
          <div className="fluc-data-line">
            <div className="fluc-value">
              <div className="indicator"></div>
              <div className="para">End Rate</div>
            </div>
            <div className="fluc-rate sub-Header">
              {bar?.graphvalues[1]?.value?.toFixed(3)}
            </div>
          </div>
          <div className="fluc-final-value">
            <div className="fluc-data-line">
              <div className="fluc-value">
                <div className="indicator"></div>
                <div className="para">Rate change</div>
              </div>
              {bar ? (
                <div className="tag spacer8">{bar?.RateVector}</div>
              ) : null}
            </div>
            <div className="fluc-rate Header final-fluc-value">
              {bar?.graphvalues[2]?.value.toFixed(5)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flactuation;
