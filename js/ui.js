// For the Data (UI Layer)


export function displayWeather(data){
    const result = document.getElementById("weatherResult")

    result.innerHTML = `
        <h2 class="text-xl font-bold">${data.name}</h2>
        <p class="text-gray-400">${data.weather[0].description}</p>
        <p class="text-3xl mt-2">${data.main.temp}</p>
    `
}

export function showError(message){
    const result = document.getElementById("weatherResult")
    result.innerHTML = `<p class="text-red-500">${message}</p>`
}