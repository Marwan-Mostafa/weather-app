// For General Control
import { getWeather } from "./js/api.js"
import { showError, displayWeather, showLoading } from "./js/ui.js"

const btn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")

let isLoading = false


async function handleWeather() {

    const city = input.value.trim()

    if (!city) {
        showError("Please enter a city name")
        return
    }
    if(isLoading) return
    
    isLoading = true

    try {
        showLoading(true)
        
        const data = await getWeather(city)

        displayWeather(data)

        input.value = ""

    } catch (error) {
        showError(error.message)
    } finally{
        isLoading = false
        showLoading(false)
    }
}


btn.addEventListener("click", handleWeather)

input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        handleWeather()
    }
})