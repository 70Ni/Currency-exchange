import React from "react";
import "./live.css";

function Livevalues() {
  return (
    <div className="chart-align">
      <div className="chart-block">
        <div className="live-wraper">
          <div className="sub-section">
            <div className="sub-Header">United State Dollar</div>
            <div className="sub-Header">$</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">Afganistan</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">Afganistan</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">Afganistan</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">Afganistan</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">Afganistan</div>
          </div>
        </div>
        <div className="value-wrper">
          <div className="para valuecalc">1 usd = </div>
          <div className="currnt-value">
            0.024 <span className="currencyname">usd</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livevalues;
