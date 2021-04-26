const Filters = ({ categories, filters, setFilters }) => {
  return (
    <div className="filters">
      <select type="select">
        {categories.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filters;
