export async function SearchData(query) {
    const apiUrl_search = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1`;
    try {
        const response = await fetch(apiUrl_search);
        if (!response.ok) throw new Error("Failed to fetch search data");
        const DataSearch = await response.json();
        if (DataSearch.length > 0) {
            return { lat: parseFloat(DataSearch[0].lat), lon: parseFloat(DataSearch[0].lon) };
        }
        return null;
    } catch (error) {
        console.error("Search API Error:", error);
        return null;
    }
}
