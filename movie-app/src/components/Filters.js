import Checkbox from "./Checkbox";

const Filters = ({ categories, selectedCategories, setSelectedCategories }) => {
  const handleCheckbox = (value) => {
    setSelectedCategories((filters) => {
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
            selectedCategories={selectedCategories}
            handleCheckbox={handleCheckbox}
          />
        );
      })}
    </div>
  );
};

export default Filters;
