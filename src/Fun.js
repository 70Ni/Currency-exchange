import data from "../src/Components/Api/eur.json";

const curr = [
  "usd",
  "eur",
  "gbp",
  "cny",
  "aud",
  "cad",
  "chf",
  "hkd",
  "sgd",
  "aed",
];
const obj = [];

export const fire = () => {
  //   let currency = data.eur.key;
  //   const nameKey = Object.keys(data.eur).find((x) => x == "KWD" && "INR");
  //   return console.log(nameKey);

  //   const a = Object.keys(data.eur).filter((x, y) => x === "inr");
  //   const a = Object.entries(data.eur);
  //   //   return console.log(a);

  //   //   curr.map((x) => console.log(x));
  //   for (const key in data.eur) {
  //     // let c = key == curr.map((x) => x.toString());
  //     // console.log(key);
  //     // console.log(c);
  //   }

  let indexOfcurrency;
  for (let i = 0; i < curr.length; i++) {
    // console.log(curr[i]);
    indexOfcurrency = Object.keys(data.eur).indexOf(curr[i]);
    // console.log(indexOfcurrency);
    let value = Object.entries(data.eur);
    // console.log(value[indexOfcurrency]);

    const dap = value[indexOfcurrency];
    console.log(dap);

    let name = dap[0];
    let valu = dap[1];
    obj.push({ currency: name, value: valu });
  }
  // dap.map((value) =>  (
  //     {...obj,
  //         obj.name
  //     }

  // );
  // obj.push((obj.name = dap[0]), (obj.currency = dap[1]));
  console.log(obj);

  //   const obj = [{}];
  //   arr.map((value) => ((obj.name = dap[0]), (obj.cur = dap[1])));
  //   arr.map((value) => obj.push((obj.name = dap[0]), (obj.cur = dap[1])));

  //   console.log(obj);

  // for (let i = 0; i >= curr.length; i++) {
  //   let a = data.eur.map((currency) => currency === i);
  //   return console.log(a);
  // }
};

export default obj;
