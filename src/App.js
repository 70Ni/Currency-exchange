import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import CurrentGraph from "./Components/Graph/CurrentGraph";
import Flactuation from "./Components/Graph/Flactuation";
import "../src/Components/Graph/style.css";
import Menu from "./Components/Menu/Menu";
function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {}

const dataset = [
  {
    value: 28,
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
    currency: "LLM",
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
    currency: "PRM",
  },
];

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [
    {
      label: `rate in ${dataset.currency}`,
    },
  ],
  series: [
    { dataKey: "value", label: `rate in ${dataset.currency}`, valueFormatter },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState("middle");

  return (
    <div className="dashboard-wrapper">
      <CurrentGraph />
      <Flactuation />
    </div>
  );
}
