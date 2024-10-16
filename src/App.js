import * as React from "react";

import { axisClasses } from "@mui/x-charts/ChartsAxis";
import CurrentGraph from "./Components/Graph/CurrentGraph";
import Flactuation from "./Components/Graph/Flactuation";
import DateSection from "./Components/StatusBar/DateSection";
import "../src/Components/Graph/style.css";
import Intro from "../src/Pages/Intro";
import { fire } from "./dataFilter";
import StatusBar from "./Components/StatusBar/StatusBar";
import "./App.css";

import mon from "../src/Components/Api/eur.json";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

// console.log(mon.eur["inr"]);
// console.log(mon.eur["kwd"]);
// let e = mon.map(([x]) => {
//   console.log(x.eur);
// });
let c = "lamp";
let variable = new String();

// let a = Object.values(typeof mon.eur.inr);

// console.log(typeof(mon.eur[5]),"RU");

// if (typeof(mon.eur) === Number) {
//   console.log("Hello");
//   mon.eur.map((x) => console.log(x), "MAP");
// }
// let arr = mon;
// arr = delete mon.eur[("00", "0x0", "1000sats", "1inch")];
// console.log(arr);
const mappedObject = {};

// Iterate over each key-value pair in the original object
for (const [key, value] of Object.entries(mon.eur)) {
  // Construct the new key by prefixing "eur_" to the original key
  const newKey = "eur_" + key.toLowerCase();

  // Store the value in the mapped object under the new key
  mappedObject[newKey] = value;
  // console.log(mappedObject.filter((x) => x));
}

// Output the mapped object
// console.log(mappedObject);

let m = Object.entries(mon.eur);
// console.log(m)

let k = m.filter((x, i) => x[0] == "kwd");
// console.log(a);
// let prse = JSON.stringify(mon);
// let str = JSON.parse(prse);
// let ob = Object.entries(mon);
// console.log(ob[1][0], "sUser mappings");
// let d = prse.map((x) => console.log(x.eur));

// console.log(mon);

// useEffect(() => {
//   // Function to fetch data
//   const fetchData = async () => {
//     try {
//       // Fetch data from the API
//       const response = await fetch(
//         `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.30/v1/country.json`
//       );
//       // Check if request was successful
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       // Parse JSON response
//       const jsonData = await response.json();
//       // Update state with fetched data
//       setweatherData(jsonData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   // Call fetchData function when component mounts
//   fetchData();
//   // Clean up function (optional)
//   return () => {
//     // Any cleanup code goes here
//     // 2.uncomment this <==================================
//     // setweatherData(details);
//   };
// }, []);

export default function Apps() {
  return (
    <div className="App">
      <div className="dashboard-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/getting-started" element={<Intro />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    // <div style={{ marginBottom: "0px" }}>
    //   <div style={{ position: "sticky", top: "0px" }}>Sticky Notes here</div>
    //   <div style={{ paddingBottom: "2000px" }}>Hello</div>
    // </div>
  );
}
