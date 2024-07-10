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

export const fetchitemData = (online) => async (dispatch) => {
  try {
    if (online) {
      const data = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      ).then(async (respo) => ({
        data: respo[0],
        country: respo[1],
      }));
      dispatch({ type: FETCH_DATA, payload: data.data });
      dispatch({ type: "COUNTRY_DATA", payload: data.country });
    } else {
      dispatch({ type: FETCH_DATA, payload: eur });
      dispatch({ type: "HISTORIC_DATA", payload: histry });
    }
  } catch (error) {
    console.log(error);
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

// online to be global
// Default currency
