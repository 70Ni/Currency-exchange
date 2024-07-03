import * as React from "react";

import { axisClasses } from "@mui/x-charts/ChartsAxis";
import CurrentGraph from "./Components/Graph/CurrentGraph";
import Flactuation from "./Components/Graph/Flactuation";
import DateSection from "./Components/StatusBar/DateSection";
import "../src/Components/Graph/style.css";
import { fire } from "./dataFilter";
import StatusBar from "./Components/StatusBar/StatusBar";
import "./App.css";

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
        <StatusBar />
        <DateSection />
        <div className="dashboard-graph-wrapper">
          <CurrentGraph />
          <Flactuation />
        </div>
      </div>
    </div>
  );
}
