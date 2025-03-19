export async function SearchData(lat, lon) {
    const apiKey = import.meta.env.VITE_SEARCH_API_KEY;
    const apiUrl_search = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${apiKey}`;
    try {
        const responseSearch = await fetch(apiUrl_search);
        const DataSearch = await responseSearch.json();
        return DataSearch;
    } catch (error) {
        console.error("error fetching search data", error);
        return null;
    }
}
