import Button from "../../Components/Menu/Button";
import "./status.css";
function DateSection() {
  return (
    <div className="date-range-wrapper">
      <div className="current-date">30 May, 4:53 am UTC</div>
      <div className="status-range-selector">
        <div className="st-date-buttons margin-right">
          from
          <div className="tag">12-12-24</div>
        </div>
        <div className="st-date-buttons">
          to
          <div className="tag">12-12-24</div>
        </div>
      </div>
      {/* <Button buttonText={"Go live"} /> */}
    </div>
  );
}

export default DateSection;
