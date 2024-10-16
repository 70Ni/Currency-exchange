import React from "react";
import "./status.css";
import refresh from "../../Image/refresh.svg";
import { useSelector } from "react-redux";

function StatusBar() {
  let load = useSelector((state) => state.fetchdata);
  return (
    <div className="status-wrapper">
      <div className="headerwrapper">
        <div className="Header-dec">
          <div className="demo-wrapper">
            <span
              className="demotag"
              style={
                load.online
                  ? { visibility: "hidden", transition: "0.8s ease-in" }
                  : load.loading
                  ? {
                      visibility: "hidden",
                      transition: "0.8s ease-in-out",
                    }
                  : {
                      visibility: "visible",
                      transition: "0.8s ease-in-out",
                    }
              }
            >
              Demo version
            </span>
          </div>
          <div className="Header-refresh-wrapper">
            <div className="Header-text">Currency Data</div>
            <img
              src={refresh}
              alt=""
              className="refreshicon"
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      </div>
      <div className="fetch-status-wrapper">
        <div className="fetch-status">
          {load.loading ? "laoding" : load.online ? "Online" : "Historic"}
        </div>
        {load.online ? (
          <div className="status-icon-online"></div>
        ) : (
          <div className="status-icon"></div>
        )}
      </div>
    </div>
  );
}

export default StatusBar;
