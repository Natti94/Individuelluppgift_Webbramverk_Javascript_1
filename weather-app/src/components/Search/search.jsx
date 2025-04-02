import { useState } from "react";
import { SearchData } from "../../../backend/Services/Search/search";
import "./search.css";

function Search({ setSearchInput, setMarkedPosition }) {
  const [query, setQuery] = useState("");
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    const data = await SearchData(query);
    if (data) {
      setSearchInput(data);
      setMarkedPosition(data);
    } else {
      setSearchInput(null);
      setMarkedPosition(null);
    }
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        className="search"
        type="text"
        placeholder="search me...            🔍"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
