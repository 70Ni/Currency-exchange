import React from "react";
import close from "../../Image/close.svg";
import "./datepicker.css";
import Button from "../Menu/Button";

function DatePicker() {
  return (
    <div className="Date-picker-wrapper">
      <div className="date-picker-contain">
        <div className="date-picker-header-wrapper">
          <div className="sub-header">Date Range</div>
          <img src={close} alt="close" className="closeicon" />
        </div>
        <div className="date-range-container">
          <div className="date-input-section">
            <div className="para">start Date</div>
            <input type="date" className="dateinput" />
          </div>
          <div className="date-input-section">
            <div className="para">End Date</div>
            <input type="date" className="dateinput" />
          </div>
        </div>
        <div className="para date-input-section">
          Please select date range from 12 Dec 2024
        </div>
        <div className="button-wrapper">
          {/* <button className="popupbuttons" buttonText={"Apply"}>
            Cancel
          </button> */}
          <button className="popupbuttons" buttonText={"Apply"}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
