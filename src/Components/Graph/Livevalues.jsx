import React, { useEffect } from "react";
import "./live.css";
import { useSelector } from "react-redux";

function Livevalues() {
  const defaultCurrency = useSelector((state) => state.online);
  const state = useSelector((state) => state.historic.currencyDetails);
  const currencyValue = useSelector((state) => state.fetchdata?.data?.obj);

  let indexOfvalue;

  let ary = [];
  for (let i = 0; i < currencyValue?.length; i++) {
    console.log(currencyValue[i].currency === defaultCurrency);
    ary.push(currencyValue[i].currency === defaultCurrency);
  }
  indexOfvalue = ary.indexOf(true);

  const CurrencyName = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <div className="chart-align">
      <div className="chart-block">
        <div className="live-wraper">
          <div className="sub-section">
            <div className="sub-Header">
              {" "}
              {CurrencyName(state?.currency_name)}
            </div>
            <div className="sub-Header">$</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country Name</div>
            <div className="para paraBold">{state?.country_name}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country iso3</div>
            <div className="para paraBold">{state?.country_iso3}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Currency Name</div>
            <div className="para paraBold">{state?.currency_name}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Currency code</div>
            <div className="para paraBold">{state?.currency_code}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Currency Number</div>
            <div className="para paraBold">{state?.currency_number}</div>
          </div>
        </div>
        <div className="value-wrper">
          <div className="para valuecalc">1 EUR = </div>
          <div className="currnt-value">
            {currencyValue
              ? currencyValue[indexOfvalue]?.value.toFixed(5)
              : null}
            <span className="currencyname">
              {currencyValue
                ? currencyValue[indexOfvalue]?.currency.toLowerCase()
                : "No Value"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livevalues;
