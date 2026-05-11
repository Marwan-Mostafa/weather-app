// For API call (API Layer)

const API_KEY = "The key"

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)

    if(!response.ok){
        throw new Error("City Not Found")
    }

    const data = await response.json()
    return data
}