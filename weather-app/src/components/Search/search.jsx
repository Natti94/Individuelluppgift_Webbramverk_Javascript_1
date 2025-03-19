import { useEffect } from "react";
import { SearchData } from "../../API/search";

function Search({ setSearchData, searchInput }) {
  useEffect(() => {
    const getSearch = async function () {
      const searchData = await SearchData(40.7128, -74.006);
      if (
        searchData &&
        searchData.coord &&
        searchData.coord.lat &&
        searchData.coord.lon
      ) {
        setSearchData([searchData]);
      }
    };
    getSearch();
  }, [setSearchData]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Search(searchInput);
        }}
      >
        <input
          type="search"
          placeholder="Type location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Search;
