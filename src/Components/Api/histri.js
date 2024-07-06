import { isWednesday } from "date-fns";
import { useEffect } from "react";

const baseLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-14/v1/currencies/`;
const countryLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.1/v1/country.json`;

let linkFetch = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json`;

const urls = [baseLink, countryLink];
// cny , hkd
let currencyList = [
  "usd",
  "eur",
  "kwd",
  "gbp",
  "cad",
  "chf",
  "aud",
  "nzd",
  "aed",
  "dkk",
  "chf",
  "sgd",
  "brl",
  "azn",
];
let dap = [];
let obj = [];
let base = "eur";
let indexofCurrency;
let name;
let valu;
let date;
let finalObje = [];
let dataOb;
let firstDate;

const monthFetch = () => {
  let indexofCurrency;
  for (let index = 14; index <= 24; index++) {
    let fetchl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-${index}/v1/currencies/eur.json`;

    // console.log(
    //   `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-${index}/v1/currencies/eur.json`
    // );
    async function fetchData() {
      const response = await fetch(fetchl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Or response.text() for plain text
      dataOb = await Object.entries(data);

      for (let i = 0; i < currencyList.length; i++) {
        indexofCurrency = await Object.keys(data[base]).indexOf(
          currencyList[i]
        );
        let value = await Object.entries(data[base]);
        dap = await value[indexofCurrency];
        if (dap) {
          name = await dap[0];
          valu = await dap[1];
          firstDate = `2024-03-${index}`;
          // date = await dataOb[0][1];
          return obj.push({ value: valu, currency: name.toUpperCase() });
        } //if loop for dap
      } //for loooooooooooop currency
      // console.log((finalObje[firstDate] = obj));
      // console.log((obj[firstDate] = obj));
      finalObje[firstDate] = obj;
      // console.log("HOl;k");
      console.log(finalObje);
      // console.log(index, "index", currencyList.length, "cuurency");
    }
    fetchData()
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  } ///for loop of date
};

// finalObje[firstDate].push(obj);

// if (firstDate === dataOb[0][1]) {
//   finalObje[firstDate] = obj;
// }
export default monthFetch;
