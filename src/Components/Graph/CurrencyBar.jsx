import React from "react";
import { BarChart } from "@mui/x-charts";

let data = [
  {
    value: 1.08498675,
    currency: "usd",
  },
  {
    value: 1,
    currency: "eur",
  },
  {
    value: 0.85459559,
    currency: "gbp",
  },
  {
    value: 1.08498675,
    currency: "usd",
  },
  {
    value: 1,
    currency: "eur",
  },
  {
    value: 0.85459559,
    currency: "gbp",
  },
];

const onItemClick = (
  event, // The mouse event.
  params // An object that identifies the clicked elements.
) => {
  return console.log(params);
};

function CurrencyBar({ obj, chartSetting }) {
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
        },
      ]}
      {...chartSetting}
    />
  );
}

export default CurrencyBar;
