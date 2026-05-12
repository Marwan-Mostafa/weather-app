// For General Control
import { getWeather } from "./api.js"
import { showError, displayWeather, showLoading } from "./ui.js"

const btn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")

let isLoading = false


async function handleWeather() {

    const city = input.value.trim()

    if (!city) {
        showError("Please enter the city")
        return
    }
    if(isLoading) return
    
    isLoading = true

    try {
        showLoading()
        
        const data = await getWeather(city)

        displayWeather(data)

        input.value = ""

    } catch (error) {
        showError(error.message)
    } finally{
        isLoading = false
    }
}


btn.addEventListener("click", handleWeather);

input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        handleWeather()
    }
})