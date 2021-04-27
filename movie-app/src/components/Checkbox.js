const Checkbox = ({ category, filters, handleCheckbox }) => {
  const checked = filters.includes(category);

  const checkboxStyle = checked
    ? "filter-checkbox checked"
    : "filter-checkbox unchecked";

  return (
    <div className={checkboxStyle} key={category}>
      <input
        type="checkbox"
        value={category}
        onClick={(e) => handleCheckbox(e.target.value)}
      ></input>
      <label>{category}</label>
    </div>
  );
};

export default Checkbox;
