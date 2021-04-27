import Checkbox from "./Checkbox";

const Filters = ({ categories, filters, setFilters }) => {
  const handleCheckbox = (value) => {
    setFilters((filters) => {
      if (filters.includes(value)) {
        return filters.filter((filter) => filter !== value);
      } else {
        return [...filters, value];
      }
    });
  };

  return (
    <div className="filters">
      {categories.map((category) => {
        return (
          <Checkbox
            key={category}
            category={category}
            filters={filters}
            handleCheckbox={handleCheckbox}
          />
        );
      })}
    </div>
  );
};

export default Filters;
