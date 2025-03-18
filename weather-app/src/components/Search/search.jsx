import { useEffect } from "react";
import { searchData } from "../../API/search";

function Search({ searchData, setSearchData }) {
  useEffect(() => {
    const getSearch = async function() {
    const data = await searchData(searchResult.lat, searchResult.lng)
    setSearchData(data);
    };
  getSearch();

    
    
  }, [searchData, setSearchData]
 if 


  
 
}

export default Search;
