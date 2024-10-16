import React from "react";
import CurrencyImg from "../Image/dollar.png";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="introWrapper">
      <div className="img-section">
        <img src={CurrencyImg} alt="" className="intro-image" />
      </div>
      <div className="introtext-section">
        <div className="heading">Currency Converter</div>
        <div className="para">
          Access up-to-date rates for over 150 currencies worldwide. Rates are
          updated regularly to reflect the latest market changes.
        </div>
        <div className="button-wrpper">
          <Link to="/">
            <div className="Started-Button"> Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
