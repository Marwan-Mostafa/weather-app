// For General Control
import {getWeather} from "./js/api.js"
import {showError, displayWeather} from "./js/ui.js"

const btn = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")


btn.addEventListener("click", async ()=> {
    const city = input.value.trim()

    if(!city) return

    try {
        const data = await getWeather(city)
    } catch (error){
        showError(error.message)
    };
})