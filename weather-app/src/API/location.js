export async function LocationData() {
    const apiUrl_location = "https://ipwho.is/";
    try {
        const responseLocation = await fetch(apiUrl_location);
        const DataLocation = await responseLocation.json();
        return DataLocation;
    } catch (error) {
        console.error("error fetching location data", error);
        return null;
    }
}