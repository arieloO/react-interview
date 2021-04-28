import { useEffect } from "react";

const PageOption = ({ value, itemsPage, setItemsPage }) => {
  // test if current value is selected to generate style
  const checked = value === itemsPage;
  const checkboxStyle = checked
    ? "page-checkbox checked-page"
    : "page-checkbox ";

  return (
    <div className="page-checkbox-div">
      <label>
        <div className={checkboxStyle}>{value}</div>
        <input
          hidden
          type="checkbox"
          value={value}
          onClick={(e) => {
            console.log("CLICK :", e.target.value);
            setItemsPage(parseInt(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default PageOption;
