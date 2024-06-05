import React from "react";
import "./Menu.css";

function Menu({ hidden, newCurrencyUpdate, currencyList }) {
  console.log(hidden, "menu");
  return (
    <div
      className="menu-wrapper"
      style={hidden ? { display: "Block" } : { display: "none" }}
    >
      <div className="menu-content">
        {currencyList.map((currency) => (
          <button
            className="menu-item"
            onClick={() => newCurrencyUpdate(currency)}
          >
            <div className="currency-name">{currency}</div>
            <div className="currency-symbol">#</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
