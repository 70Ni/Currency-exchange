import data from "./Components/Api/eur";
let parseData = JSON.stringify(data);
let newParse = JSON.parse(parseData);

// let newParse;
let m;

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    // Parse JSON response
    const jsonData = await response.json();
    // Update state with fetched data
    // const data = await JSON.parse(jsonData);

    fire(jsonData);
    console.log(fire(jsonData));
  } catch (error) {
    console.log(error);
  }
};

const fetch = async () => {
  let file;
  try {
    fetch(
      // `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json`
    )
      .then((response) => {
       file = response.json();
      })
      .then((file) => {
        fire(file);
      });
  } catch (error) {
    console.log(error);
  }
};

// fetch();

// fetchData();

let curr = ["usd", "eur", "gbp"];
const obj = [];

// export const fire = (data) => {
//   //   let currency = data.eur.key;
//   //   const nameKey = Object.keys(data.eur).find((x) => x == "KWD" && "INR");
//   //   return console.log(nameKey);

//   //   const a = Object.keys(data.eur).filter((x, y) => x === "inr");
//   //   const a = Object.entries(data.eur);
//   //   //   return console.log(a);

//   //   //   curr.map((x) => console.log(x));
//   //   for (const key in data.eur) {
//   //     // let c = key == curr.map((x) => x.toString());
//   //     // console.log(key);
//   //     // console.log(c);
//   //   }

//   let indexOfcurrency;
//   for (let i = 0; i < curr.length; i++) {
//     // console.log(curr[i]);
//     indexOfcurrency = Object.keys(data.eur).indexOf(curr[i]);
//     // console.log(indexOfcurrency);
//     let value = Object.entries(data.eur);
//     // console.log(value[indexOfcurrency]);

//     const dap = value[indexOfcurrency];
//     console.log(dap);

//     let name = dap[0];
//     let valu = dap[1];
//     obj.push({ value: valu, currency: name });
//   }
//   // dap.map((value) =>  (
//   //     {...obj,
//   //         obj.name
//   //     }

//   // );
//   // obj.push((obj.name = dap[0]), (obj.currency = dap[1]));
//   console.log(obj);

//   //   const obj = [{}];
//   //   arr.map((value) => ((obj.name = dap[0]), (obj.cur = dap[1])));
//   //   arr.map((value) => obj.push((obj.name = dap[0]), (obj.cur = dap[1])));

//   //   console.log(obj);

//   // for (let i = 0; i >= curr.length; i++) {
//   //   let a = data.eur.map((currency) => currency === i);
//   //   return console.log(a);
//   // }
// };

export const fire = (newParse) => {
  let indexOfcurrency;
  for (let i = 0; i < curr.length; i++) {
    indexOfcurrency = Object.keys(newParse.eur).indexOf("kwd");
    // let value = Object.entries(data.eur);
    console.log(indexOfcurrency === "usd");
    const value = Object.entries(data.eur);
    const dap = value[indexOfcurrency];
    console.log(dap);
    let name = dap[0];
    let valu = dap[1];
    obj.push({ value: valu, currency: name });
  }
};

// fire(data);
// console.log(obj);

// export default obj;
