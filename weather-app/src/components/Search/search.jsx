import { useEffect, useState } from "react";
import { SearchData } from "../../API/search";
import "./search.css"

function Search({ searchResult, setSearchData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchSearch() {
      if (searchResult?.lat && searchResult?.lng) {
        const data = await SearchData(searchResult.lat, searchResult.lng);
        setSearchData(data);
      }
    }
    fetchSearch();
  }, [searchResult, setSearchData]);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="enter location"
      value={query}
      onChange={handleInputChange}
    />
  );
}

export default Search;
