export async function searchData(setSearch) {
    const apiUrl_location = "https://nominatim.openstreetmap.org";
    try {
        const responseLocation = await fetch(apiUrl_location);
        const DataSearch = await responseLocation.json();
        if (DataSearch.lat && DataSearch.lon) {
            setSearch([DataSearch[0].lat, DataSearch[0].lon]);
        }
    } catch (error) {
        console.error("error fetching location data", error);
    }
}