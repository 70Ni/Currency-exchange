// FluctuationCalculator = () => {
//   let StartDateValue = 0.0034;
//   let EndDateValue = 0.0038;

//   let fluctuation = StartDateValue - EndDateValue;

//   let fluctuationPercentage = fluctuation * 100;

const fluctuationVector = (StartDateValue, EndDateValue) => {
  let values;
  StartDateValue.toFixed(3);
  EndDateValue.toFixed(3);
  if (StartDateValue > EndDateValue) {
    values = "High";
  } else if (StartDateValue === EndDateValue) {
    values = "Same";
  } else values = "Low";
  let fluctuation = StartDateValue - EndDateValue;
  return values;
};

export default fluctuationVector;
