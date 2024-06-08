FluctuationCalculator = () => {
  let StartDateValue = 0.0034;
  let EndDateValue = 0.0038;

  let fluctuation = StartDateValue - EndDateValue;

  let fluctuationPercentage = fluctuation * 100;

  let fluctuationVector = () => {
    let values = "high";
    if (StartDateValue > EndDateValue) {
      values = "high";
    } else values = "low";
  };

  return (fluctuation, fluctuationPercentage, fluctuationVector());
};
