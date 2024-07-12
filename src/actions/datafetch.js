import { defaultClassPrefix } from "rsuite/esm/internals/utils";
import eur from "../Components/Api/eur.json";
import histry from "../Components/Api/Histo.json";
import fluctuationVector from "../Functions/Fluctuation";
const FETCH_DATA = "FETCH_DATA";
const FETCH_FLUCTUATION = "FETCH_FLUCTUATION";
const ISONLINE = "ISONLINE";

const baseLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-14/v1/currencies/`;
const countryLink = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.1/v1/country.json`;

// let linkFetch = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/kwd.json`;
let linkFetch = baseLink + "eur" + ".json";

const urls = [linkFetch, countryLink];

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
  "brn",
];
const base = "eur";
export const fetchitemData = (online, defaultCurrency) => async (dispatch) => {
  console.log(online, base, "from action params");
  dispatch({ type: "FETCH_DATA_REQUEST" });
  let indexofCurrency;
  let name;
  let valu;
  let dap = [];
  let obj = [];
  try {
    if (online) {
      const data = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      ).then(async (respo) => {
        for (let i = 0; i <= currencyList.length; i++) {
          indexofCurrency = await Object.keys(respo[0][base]).indexOf(
            currencyList[i]
          );
          // console.log(currencyList.length, "MEMEBERS");
          let value = await Object.entries(respo[0][base]);
          dap = await value[indexofCurrency];
          if (dap) {
            name = await dap[0];
            valu = await dap[1];
            obj.push({ value: valu, currency: name.toUpperCase() });
          }
        }
        return {
          country: respo[1],
          data: respo[0],
          graphCurrency: obj,
          base: base,
        };
      });
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      dispatch({ type: "HISTORIC_DATA", payload: data.country });
    } else {
      // const data = await { online, eur };

      const work = () => {
        for (let i = 0; i <= currencyList.length; i++) {
          indexofCurrency = Object.keys(eur.eur).indexOf(currencyList[i]);
          // console.log(currencyList.length, "MEMEBERS");
          let value = Object.entries(eur.eur);
          dap = value[indexofCurrency];
          if (dap) {
            name = dap[0];
            valu = dap[1];
            obj.push({ value: valu, currency: name.toUpperCase() });
          }
        }
        return obj;
      };
      const currencyTimeLine = () => {
        let ud = [];
        let xd = [];

        // for (let i = 3; i <= 31; i++) {
        //   // let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
        //   let mo = histry[`2024-03-${i.toString().padStart(2, "0")}`];
        //   // console.log(mo);
        //   // console.log(mo[3].value,"CAD");
        //   let arr = [];

        //   for (let j = 0; j < 14; j++) {
        //     let valueToFind = defaultCurrency;
        //     // console.log(mo[j].currency == valueToFind);
        //     arr.push(mo[j].currency == valueToFind);
        //     indexofCurrency = arr.indexOf(true);
        //   }
        //   console.log(indexofCurrency);
        //   ud.push(mo[indexofCurrency].value.toFixed(2));
        //   xd.push(i);

        //   // console.log(data[`2024-03-02`][i].value, "data");
        //   // let month = data[`2024-03-${i.toString().padStart(2, "0")}`][1];
        //   // let month = data[`2024-03-05`][i].currency;
        // }

        let mo;
        let indexofCurrency;
        console.log(defaultCurrency,"from the loop");
        for (let i = 6; i <= 31; i++) {
          let typeOfCurrency;
          // let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
          mo = histry[`2024-03-${i.toString().padStart(2, "0")}`];
          let arr = [];
          // check the default currency chagnes
          for (let j = 0; j < 14; j++) {
            let valueToFind = defaultCurrency;
            // console.log(mo[j].currency == valueToFind);
            arr.push(mo[j].currency == valueToFind);
            indexofCurrency = arr.indexOf(true);
          }
          // console.log(mo[3].value,"CAD");
          // console.log(indexofCurrency);
          ud.push(mo[indexofCurrency].value.toFixed(2));
          xd.push(i);

          // console.log(data[`2024-03-02`][i].value, "data");
          // let month = data[`2024-03-${i.toString().padStart(2, "0")}`][1];
          // let month = data[`2024-03-05`][i].currency;
        }
        return {
          filter: { xd, ud },
          data: histry,
          currency: defaultCurrency,
        };
      };
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: work() });
      dispatch({ type: "HISTORIC_DATA", payload: currencyTimeLine() });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_DATA_FAILURE", error: error.message });
  }
};

const date = { startDate: "2024-03-06", endDate: "2024-03-07" };
const fistLink =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
  date.startDate +
  "/v1/currencies/eur.json";

const secondLink =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
  date.endDate +
  "/v1/currencies/eur.json";
// ----------------->
const dateUrls = [fistLink, secondLink];

export const fluctuationData =
  (online, startDate, EndDate) => async (dispatch) => {
    try {
      if (online) {
        const data = await Promise.all(
          dateUrls.map((url) =>
            fetch(url)
              .then((res) => res.json())
              .then((res) => res.eur)
          )
        ).then(async (eur) => {
          // console.log(eur);
          let b = JSON.stringify(eur[0]);
          let firstDate = JSON.parse(b);
          // console.log(firstDate.eur, "fist");
          let firstvalue = firstDate.kwd;

          let c = JSON.stringify(eur[1]);
          let secondDate = JSON.parse(c);
          // console.log(secondDate["00"], "second");
          // console.log(firstDate.eur, "fist");
          let secondValue = secondDate.kwd;
          let rateChange = fluctuationVector(secondValue, firstvalue);

          return {
            starRate: firstvalue,
            endRate: secondValue,
            rateChange: rateChange,
          };
        });

        dispatch({ type: "FLUCTUATION_DATA", payload: data });
      } else {
        let start = "2024-03-02";
        let end = "2024-03-04";
        const starRate = histry[start][2].value;
        const endRate = histry[end][2].value;
        let rateChange = fluctuationVector(endRate, starRate);

        const data = {
          starRate,
          endRate,
          rateChange,
        };
        dispatch({ type: "FLUCTUATION_DATA", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const baseCurrecny = (defaultCurrency) => async (dispatch) => {
  try {
    dispatch({ type: "BASE_CURRENCY", payload: defaultCurrency });
  } catch (error) {
    console.log(error);
  }
};
// online to be global
// Default currency
