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

// let currencyList = [
//   "usd",
//   "eur",
//   "kwd",
//   "gbp",
//   "cad",
//   "chf",
//   "aud",
//   // "nzd",
//   // "aed",
//   // "dkk",
//   // "chf",
//   // "sgd",
//   // "brl",
//   // "brn",
// ];
const base = "eur";
let indexofCurrency;

export const fetchitemData =
  (online, defaultCurrency, currencyList) => async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    let name;
    let valu;
    let dap = [];
    let obj = [];
    let zen;
    let currencyDetails;
    try {
      if (online) {
        const data = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        ).then(async (respo) => {
          //finding index of currency
          for (let i = 0; i <= currencyList.length; i++) {
            indexofCurrency = await Object.keys(respo[0][base]).indexOf(
              currencyList[i]
            );
            // console.log(currencyList.length, "MEMEBERS");

            // storing name and value based on index
            let value = await Object.entries(respo[0][base]);
            dap = await value[indexofCurrency];
            if (dap) {
              name = await dap[0];
              valu = await dap[1];
              obj.push({ value: valu, currency: name });
            }
          }
          let parseCountry = Object.values(respo[1]);
          let matchIndex = parseCountry.findIndex(
            (x) => x.currency_code === defaultCurrency.toLowerCase()
          );
          currencyDetails = parseCountry[matchIndex];
          zen = respo[1];
          return {
            country: respo[1],
            data: respo[0],
            obj,
            currencyDetails,
            base: base,
            online: true,
          };
        });
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
        dispatch({
          type: "HISTORIC_DATA",
          payload: { zen, currencyDetails },
        });
      } else {
        const data = await { online, eur };
        const work = () => {
          for (let i = 0; i <= currencyList?.length; i++) {
            indexofCurrency = Object.keys(eur.eur).indexOf(currencyList[i]);
            // console.log(currencyList.length, "MEMEBERS");
            let value = Object.entries(eur.eur);
            dap = value[indexofCurrency];
            if (dap) {
              name = dap[0];
              valu = dap[1];
              obj.push({ value: valu, currency: name });
            }
          }
          return { obj, online: false };
        };
        const currencyTimeLine = () => {
          let ud = [];
          let xd = [];
          let mo;
          console.log(defaultCurrency, "from the loop");
          for (let i = 6; i <= 31; i++) {
            let typeOfCurrency;
            let curPosition;
            // let mo = data[`2024-03-${i.toString().padStart(2, "0")}`];
            mo = histry[`2024-03-${i.toString().padStart(2, "0")}`];
            let arr = [];
            // check the default currency chagnes
            console.log(defaultCurrency);
            for (let j = 0; j < 14; j++) {
              let valueToFind = defaultCurrency.toUpperCase();
              // console.log(mo[j].currency == valueToFind);
              arr.push(mo[j].currency == valueToFind);
              curPosition = arr.indexOf(true);
            }
            // console.log(mo[3].value,"CAD");
            // console.log(curPosition);
            ud.push(mo[curPosition]?.value?.toFixed(2));
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
//////////////////////fluctuation ////////////

// ----------------->

export const fluctuationData =
  (online, defaultCurrency, dates, currencyList) => async (dispatch) => {
    let d = new Date();
    let startDate = d.toISOString().split("T")[0];

    let yesterday = new Date();

    yesterday.setTime(yesterday.getTime() - 86400000);

    let endDate = yesterday.toISOString().split("T")[0];
    let date;
    console.log(online);
    console.log(dates, "state");
    if (online && dates) {
      date = { startDate: dates.startDate, endDate: dates.endDate };
      console.log(date);
      console.log("fetching from state '''''''''''''''''''");
    } else if (online) {
      date = { startDate: startDate, endDate: endDate };
      console.log("fetching from fun '''''''''''''''''''");
    } else {
      date = { startDate: "2024-03-08", endDate: "2024-03-09" };
      console.log("fetching from hardcode '''''''''''''''''''");
    }

    const fistLink =
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
      date.startDate +
      "/v1/currencies/eur.json";

    const secondLink =
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@" +
      date.endDate +
      "/v1/currencies/eur.json";
    const dateUrls = [fistLink, secondLink];

    try {
      if (online) {
        const data = await Promise.all(
          dateUrls.map((url) =>
            fetch(url)
              .then((res) => res.json())
              .then((res) => res.eur)
          )
        ).then(async (eur) => {
          let curr = defaultCurrency;
          // console.log(eur);
          let b = JSON.stringify(eur[0]);
          let firstDate = JSON.parse(b);
          // console.log(firstDate.eur, "fist");
          let starRate = await firstDate?.[curr];

          let c = JSON.stringify(eur[1]);
          let secondDate = JSON.parse(c);
          // console.log(secondDate["00"], "second");
          // console.log(firstDate.eur, "fist");
          let endRate = await secondDate?.[curr];
          let rateChange = fluctuationVector(endRate, starRate);
          return {
            graphvalues: [
              {
                value: starRate,
                rate: "Start",
              },
              {
                value: endRate,
                rate: "End",
              },
              {
                value: endRate - starRate,
                rate: "Fluc",
              },
            ],
            RateVector: rateChange,
            DateRange: [date.startDate, date.endDate, d.toString()],
          };
        });
        dispatch({ type: "FLUCTUATION_DATA", payload: data });
      } else {
        // let currencyPosition = currencyList?.indexOf(defaultCurrency);
        // let indexofCurrency = currencyPosition;

        // console.log(
        //   currencyList.indexOf(defaultCurrency),
        //   defaultCurrency,
        //   currencyList,
        //   "indexofCurency in the array"
        // );
        let start = "2024-03-02";
        let end = "2024-03-04";
        let itemToFind = defaultCurrency.toUpperCase();
        let index = histry[start].findIndex(
          (cur) => cur.currency === itemToFind
        );
        let findx = histry[start].filter(
          (element) => element.currency === itemToFind
        );
        console.log(findx, "index of cur##########&&&&&&&&&&&&");

        const starRate = histry[start][index].value;
        const endRate = histry[end][index].value;
        console.log(starRate);
        let rateChange = fluctuationVector(endRate, starRate);
        // const data = {
        //   starRate,
        //   endRate,
        //   rateChange,
        // };
        const data = {
          graphvalues: [
            {
              value: starRate,
              rate: "Start",
            },
            {
              value: endRate,
              rate: "End",
            },
            {
              value: starRate - endRate,
              rate: "Fluc",
            },
          ],
          currencyList: currencyList,
          RateVector: rateChange,
          DateRange: [start, end, "30 May, 4:53 am UTC"],
        };
        dispatch({ type: "FLUCTUATION_DATA", payload: data });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "FLUCTUATION_DATA_FAIL", payload: error });
    }
  };

export const baseCurrecny = (defaultCurrency, online) => async (dispatch) => {
  try {
    // await dispatch({
    //   type: "SET_ONLINE_STATUS",
    //   payload: { defaultCurrency, online },
    // });
    await dispatch({
      type: "BASE_CURRENCY",
      payload: { defaultCurrency, online },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR_ONLINE", payload: error });
  }
};
// online to be global
// Default currency
