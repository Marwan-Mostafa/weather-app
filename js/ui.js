

export function displayWeather(data) {
    const result = document.getElementById("weatherResult")

    const { city, temp, description, icon, humidity, wind, feels_like } = data

    result.innerHTML = `
    
            <div class="mt-16 w-full rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/20
                p-8 shadow-2xl animate-fadeIn text-white">

                <div class="flex items-start justify-between">

                    <div>
                        <h2 class="text-4xl font-bold tracking-tight">${city}</h2>

                        <p class="text-sky-300 font-medium text-lg mt-1 capitalize">
                            ${description}
                        </p>
                    </div>

                    <div class="bg-white/10 rounded-2xl p-2 backdrop-blur-lg border border-white/10">
                    
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-20 h-20 object-contain"/>
                    </div>
                </div>

                <div class="my-10 text-center">
                    <div class="relative inline-block">
                        <span class="text-8xl font-black tracking-tighter">
                            ${Math.round(temp)}
                        </span>
                    </div>

                    <p class="text-gray-400 text-lg mt-2 font-light">
                        Feels like <span class="text-white font-semibold">${Math.round(feels_like)}</span>
                    </p>

                </div>


                <div class="grid grid-cols-2 gap-4">
                <div class="bg-black/20 rounded-3xl p-5 border border-white/5 flex flex-col items-center justify-center">
                    <span class="text-gray-400 text-xs uppercase tracking-widest mb-1 font-bold">Humidity</span>
                    <span class="text-2xl font-bold">${humidity}%</span>
                </div>
                
                <div class="bg-black/20 rounded-3xl p-5 border border-white/5 flex flex-col items-center justify-center">
                    <span class="text-gray-400 text-xs uppercase tracking-widest mb-1 font-bold">Wind Speed</span>
                    <span class="text-2xl font-bold">${wind} <small class="text-xs">km/h</small></span>
                </div>
            </div>

            </div>
        `
}

export function showError(message) {
    const result = document.getElementById("weatherResult")
    result.innerHTML = `
        <div
            class="
            mt-6
            bg-red-500/10
            border border-red-500/20
            text-red-300
            p-4
            rounded-2xl
            backdrop-blur-lg
            "
        >
            ${message}
        </div>
    `
}

export function showLoading() {

    const result = document.getElementById("weatherResult")

    result.innerHTML = `
    
        <div class="mt-8 flex justify-center">

            <div
                class="
                w-14
                h-14
                border-4
                border-sky-400
                border-t-transparent
                rounded-full
                animate-spin
                "
            ></div>

        </div>
    `
}