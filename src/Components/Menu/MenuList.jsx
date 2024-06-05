import React from "react";

function MenuList({ currency }) {
  return (
    <div className="menu-item">
      onClick={() => console.log("Hello there")}
      <div className="currency-name">{currency}</div>
      <div className="currency-symbol">#</div>
    </div>
  );
}

export default MenuList;
