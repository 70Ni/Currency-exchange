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
// let obj = [];
let base = "eur";
let indexofCurrency;
let name;
let valu;
let date;
let finalObje = {};
let dataOb;
let firstDate;
let fetchurl;
let finalarray = [];
let dateMonth;
const monthFetch = () => {
  let indexofCurrency;
  for (let index = 1; index <= 31; index++) {
    if (index < 10) {
      dateMonth = `2024-04`;
      index = index.toString().padStart(2, "0");
      fetchurl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateMonth}-${index}/v1/currencies/eur.json`;
    }

    // console.log(
    //   `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-${index}/v1/currencies/eur.json`
    // );
    async function fetchData() {
      const response = await fetch(fetchurl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Or response.text() for plain text
      dataOb = await Object.entries(data);
      let obj = [];
      for (let i = 0; i < currencyList.length; i++) {
        indexofCurrency = await Object.keys(data[base]).indexOf(
          currencyList[i]
        );
        let value = await Object.entries(data[base]);
        dap = await value[indexofCurrency];
        if (dap) {
          name = await dap[0];
          valu = await dap[1];
          firstDate = `${dateMonth}-${index}`;
          // date = await dataOb[0][1];
          obj.push({ value: valu, currency: name });
        } //if loop for dap
      } //for loooooooooooop currency
      finalObje[firstDate] = obj;

      // console.log((finalObje[firstDate] = obj));
      // console.log((obj[firstDate] = obj));
      // console.log("HOl;k");
      // console.log(index, "index", currencyList.length, "cuurency");
    }

    // fetchData();
    // fetchData()
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error:", error));
  } ///for loop of date
};

// console.log(finalObje);
// finalObje[firstDate].push(obj);

// if (firstDate === dataOb[0][1]) {
//   finalObje[firstDate] = obj;
// }
export default monthFetch;
