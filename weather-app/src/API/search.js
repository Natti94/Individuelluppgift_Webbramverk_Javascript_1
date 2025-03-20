export async function SearchData(setSearch) {
    const apiUrl_search = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1`;
    try {
        const responseLocation = await fetch(apiUrl_search);
        const DataSearch = await responseLocation.json();
        if (DataSearch.lat && DataSearch.lon) {
            setSearch([DataSearch[0].lat, DataSearch[0].lon]);
        }
    } catch (error) {
        console.error("error fetching location data", error);
    }
}