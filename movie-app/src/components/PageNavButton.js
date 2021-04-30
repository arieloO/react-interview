import PageNavSvg from "./PageNavSvg";

const PageNavButton = ({ type, lastPage, setPage, hide }) => {
  // generate style
  const buttonStyle = `page-button ${type}-page`;

  //   handle increment / decrement onClick
  const handlePageChange = () => {
    if (type === "decrement") {
      setPage((page) => (page > 1 ? page - 1 : page));
    }
    if (type === "increment") {
      setPage((page) => (page === lastPage ? page : page + 1));
    }
  };
  return (
    <button
      className={buttonStyle}
      hidden={hide}
      onClick={() => handlePageChange()}
    >
      <PageNavSvg type={type} />
    </button>
  );
};

export default PageNavButton;
