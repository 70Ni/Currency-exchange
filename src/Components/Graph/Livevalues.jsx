import React, { useEffect } from "react";
import "./live.css";
import { useSelector } from "react-redux";

function Livevalues() {
  const defaultCurrency = useSelector((state) => state.online.defcurrency);
  const state = useSelector((state) => state.historic.currencyDetails);
  const currencyValue = useSelector((state) => state.fetchdata?.data?.obj);
  console.log(currencyValue[2].currency, "From the user interface");
  let indexOfvalue;

  let ary = [];
  console.log(currencyValue);

  for (let i = 0; i < currencyValue?.length; i++) {
    // console.log(currencyValue[i].currency === defaultCurrency);
    ary.push(currencyValue[i].currency === defaultCurrency);
  }
  if (defaultCurrency in currencyValue) {
    console.log(currencyValue.defaultCurrency); // Output: John
  }
  indexOfvalue = ary.indexOf(true);

  const currencyExist = currencyValue.find(
    (item) => item.currency === defaultCurrency
  );

  console.log(currencyExist.value);

  const toUpper = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <div className="chart-align">
      <div className="chart-block">
        <div className="live-wraper">
          <div className="sub-section">
            <div className="sub-Header"> {toUpper(state?.currency_name)}</div>
            <div className="sub-Header">$</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country</div>
            <div className="para paraBold">{toUpper(state?.country_name)}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Country iso3</div>
            <div className="para paraBold">{state?.country_iso3}</div>
          </div>
          <div className="det-wrapper">
            <div className="para">Currency</div>
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
            {currencyExist
              ? currencyExist?.value
              : null}
            <span className="currencyname spacer8">
              {currencyValue
                ? currencyExist?.currency
                : "No Value"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livevalues;
