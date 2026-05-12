
const API_KEY = "643421c688364413889183021261105"
const BASE_URL = "https://api.weatherapi.com/v1/current.json";


export async function getWeather(city) {
    if(!city){
        throw new Error("City is Required")
    }
    
    const controller = new AbortController()
    const timeout = setTimeout(()=> controller.abort(), 8000)

    try{
        const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}`;

        const response = await fetch(url, {signal: controller.signal})

        clearTimeout(timeout)

        if(!response.ok){
            const errorData = await response.json().catch(()=> null)

            const message = errorData?.error?.message || "Failed to fetch weather data";

            throw new Error(message);
        }
        const data = await response.json()
        return {
            city: data.location.name,
            country: data.location.country,
            temp:data.current.temp_c,
            humidity: data.current.humidity,
            icon: `http:${data.current.condition.icon}`,
            wind: data.current.wind_kph,
    }
        } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request timeout. Please try again.");
        }
        throw new Error(error.message || "Something went wrong");
        }
}