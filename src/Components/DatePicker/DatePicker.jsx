import React, { useState } from "react";
import close from "../../Image/close.svg";
import "./datepicker.css";
import Button from "../Menu/Button";
import { setDate } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { fluctuationData } from "../../actions/datafetch";
import { useComponentVisible } from "../../Functions/useComponentVisible";

import useOutsideClick from "../Graph/CurrentGraph";

function DatePicker({ visible, ChangeVisible, setIsOpen }) {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.online);
  const [date, setdate] = useState("");
  const fetchByDate = () => {
    dispatch(fluctuationData(state.online, state.defaultCurrency, date));
    setIsOpen();
  };

  return (
    <div
      className="Date-picker-wrapper"
      // style={visible ? { display: "block" } : { display: "none" }}
      // hidden={isComponentVisible}
    >
      <div className="date-picker-contain">
        <div className="date-picker-header-wrapper">
          <div className="sub-header">Date Range</div>
          <img
            src={close}
            alt="close"
            className="closeicon"
            onClick={() => setIsOpen()}
          />
        </div>
        <div className="date-range-container">
          <div className="date-input-section">
            <div className="para">start Date</div>
            <input
              type="date"
              className="dateinput"
              onChange={(e) =>
                setdate((prevSt) => ({ ...prevSt, startDate: e.target.value }))
              }
            />
          </div>
          <div className="date-input-section">
            <div className="para">End Date</div>
            <input
              type="date"
              className="dateinput"
              onChange={(e) => setdate({ ...date, endDate: e.target.value })}
            />
          </div>
        </div>
        <div className="para date-input-section">
          Please select date range from 12 Dec 2024
        </div>
        <div className="button-wrapper">
          {/* <button className="popupbuttons" buttonText={"Apply"}>
            Cancel
          </button> */}
          <button className="popupbuttons" onClick={() => fetchByDate()}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
