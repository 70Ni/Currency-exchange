import React from "react";
import { BarChart } from "@mui/x-charts";
import { baseCurrecny } from "../../actions/datafetch";
import { useDispatch, useSelector } from "react-redux";

// const online = useDispatch((st) => st?.online.online);

function CurrencyBar({ obj, chartSetting }) {
  const dispatch = useDispatch();
  const onItemClick = (
    event, // The mouse event.
    params // An object that identifies the clicked elements.
  ) => {
    // return console.log(params);
    console.log(params);
    return dispatch(baseCurrecny(params.axisValue, online));
  };
  let online = useSelector((state) => state.online.online);
  let colorObj = [];
  const colorBar = () => {
    let activeColor = "#E16449";
    let pasColor = "#FFA490";
    for (let i = 0; i < obj.length; i++) {
      let indexofcurr = console.log(obj.findIndex((x) => x.curre));
      colorObj.push(activeColor);
    }
  };

  console.log(colorObj);

  colorBar();

  return (
    <BarChart
      dataset={obj}
      borderRadius={4}
      grid={{ vertical: false }}
      leftAxis={null}
      bottomAxis={{ disableTicks: true, disableLine: true }}
      // slotProps={{
      //   bar: {
      //     onClick: (event, dataIndex, seriesId, value) => console.log(value),
      //   },
      // }}
      onAxisClick={onItemClick}
      // ...
      series={[{ color: "#E16449" }]}
      height={242}
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
          // colorMap: {
          //   type: "ordinal",
          //   // values: value,
          //   colors: "#E16449",
          // },
        },
      ]}
      {...chartSetting}
    />
  );
}

export default CurrencyBar;
