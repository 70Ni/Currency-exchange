import React from "react";
import { BarChart } from "@mui/x-charts";
import { useSelector } from "react-redux";

const onItemClick = (
  event, // The mouse event.
  params // An object that identifies the clicked elements.
) => {
  return console.log(params);
};

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
let dataset = useSelector((state) => state.fetchdata.data);

function CurrencyBar() {
  return (
    <BarChart
      dataset={dataset}
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
