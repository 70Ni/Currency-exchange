import { useSelector } from "react-redux";
import Button from "../../Components/Menu/Button";
import "./status.css";

function DateSection() {
  let Dates = useSelector((state) => state?.fluctuation?.DateRange);
  console.log(Dates, "========dates");
  let date;
  if (Dates) {
    date = Dates[2].split("G").splice(0, 1);
  }
  return (
    <div className="date-range-wrapper">
      {/* <div className="current-date">30 May, 4:53 am UTC</div> */}
      {Dates ? <div className="current-date">{date}</div> : null}
      {Dates ? (
        <div className="status-range-selector">
          <div className="st-date-buttons margin-right">
            from
            {<div className="tag tag-border">{Dates[1]}</div>}
          </div>
          <div className="st-date-buttons">
            to
            {<div className="tag tag-border">{Dates[0]}</div>}
          </div>
        </div>
      ) : (
        "No dates found"
      )}
      {/* <Button buttonText={"Go live"} /> */}
    </div>
  );
}

export default DateSection;
