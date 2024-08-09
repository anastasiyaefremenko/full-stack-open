const SearchField = ({ searchInput, handleSearchInput }) => (
  <>
    find countries <input onChange={handleSearchInput} value={searchInput} />
  </>
);

export default SearchField;
