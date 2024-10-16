import React from "react";
import StatusBar from "../Components/StatusBar/StatusBar";
import DateSection from "../Components/StatusBar/DateSection";
import CurrentGraph from "../Components/Graph/CurrentGraph";
import Flactuation from "../Components/Graph/Flactuation";

function Dashboard() {
  return (
    <div>
      <StatusBar className="testwork" />
      <DateSection />
      <div className="dashboard-graph-wrapper">
        <CurrentGraph />
        <Flactuation />
      </div>
    </div>
  );
}

export default Dashboard;
