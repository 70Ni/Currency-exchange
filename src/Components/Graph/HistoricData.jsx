import React, { useEffect, useState } from "react";
import historic from "../../Components/Api/Historic.json";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Livevalues from "./Livevalues";
import monthFetch from "../Api/histri";
import data from "../Api/Histo.json";
import { useSelector } from "react-redux";

for (let i = 2; i <= 31; i++) {
  // let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
  let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
  for (let j = 0; j < 14; j++) {
    // console.log(mo[j].value);
  }
  // console.log(data[`2024-03-02`][i].value, "data");
  // let month = data[`2024-03-${i.toString().padStart(2, "0")}`][1];
  // let month = data[`2024-03-05`][i].currency;
}

const color = "#f5f5f5";
export default function HistoricData() {
  // const [uData, setUdata] = useState([]);
  // const [xLabels, setxLabels] = useState([]);

  let ud = [];
  let xd = [];
  let mo;
  let indexofCurrency;

  for (let i = 2; i <= 31; i++) {
    let typeOfCurrency;
    // let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
    mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
    let arr = [];
    for (let j = 0; j < 14; j++) {
      let valueToFind = "KWD";
      // console.log(mo[j].currency == valueToFind);
      arr.push(mo[j].currency == valueToFind);
      indexofCurrency = arr.indexOf(true);
    }
    // console.log(mo[3].value,"CAD");
    ud.push(mo[indexofCurrency].value.toFixed(2));
    xd.push(i);

    // console.log(data[`2024-03-02`][i].value, "data");
    // let month = data[`2024-03-${i.toString().padStart(2, "0")}`][1];
    // let month = data[`2024-03-05`][i].currency;
  }

  // historic.map((x, i) => {
  //   let j = i + 7;
  //   ud.push(x[`2024-03-${j.toString().padStart(2, "0")}`][0].value.toFixed(2));
  //   xd.push(`${j}`);
  //   // console.log(ud, "outside");
  // });

  // useEffect(() => {
  //   setUdata(ud);
  //   setxLabels(xd);
  // }, [setUdata]);

  const timeline = useSelector((lineData) => lineData.historic.filter);
  console.log(timeline);
  let uData = timeline.ud;
  let xLabels = timeline.xd;
  return (
    <div className="chart-align">
      <div className="chart-block">
        <div className="sub-section">
          <div className="sub-Header">United State Dollar</div>
          <div className="sub-Header">$</div>
        </div>
        {uData ? (
          <LineChart
            margin={{
              left: 0,
              right: 0,
              top: 20,
              bottom: 20,
            }}
            // width={300}
            leftAxis={null}
            bottomAxis={{ disableTicks: true, disableLine: true }}
            // ...

            height={242}
            series={[
              {
                curve: "linear",
                data: uData,
                // label: "uv",
                area: true,
                showMark: false,
                color,
              },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                display: "none",
              },
              "& .MuiLineElement-root": {
                strokeDasharray: "4 2",
                strokeWidth: 2,
              },
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
