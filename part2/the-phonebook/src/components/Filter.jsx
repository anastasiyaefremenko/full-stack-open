const Filter = ({ searchInput, handleSearchInputChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={searchInput} onChange={handleSearchInputChange} />
    </div>
  );
};

export default Filter;
