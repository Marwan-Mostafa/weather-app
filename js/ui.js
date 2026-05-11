

export function displayWeather(data){
    const result = document.getElementById("weatherResult")

    const {city, temp, description, icon, humidity, wind, feels_like} = data

    result.innerHTML =`
    
            <div
                class="
                mt-8
                w-full
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                p-6

                shadow-[0_10px_40px_rgba(0,0,0,0.25)]

                animate-fadeIn
                "
            >

                <div class="flex items-center justify-between">

                    <div>
                        <h2 class="text-3xl font-bold text-white">
                            ${city}
                        </h2>

                        <p class="text-gray-300 capitalize mt-1">
                            ${description}
                        </p>
                    </div>

                    <img
                        src="https://openweathermap.org/img/wn/${icon}@2x.png"
                        alt="weather icon"
                        class="w-24 h-24"
                    />
                </div>

                <div class="mt-6">

                    <h1 class="text-6xl font-black text-white">
                        ${Math.round(temp)}°
                    </h1>

                    <p class="text-gray-300 mt-2">
                        Feels like ${Math.round(feels_like)}°
                    </p>

                </div>


                <div class="grid grid-cols-2 gap-4 mt-8">

                    <div class="bg-white/10 rounded-2xl p-4">
                        <p class="text-gray-400 text-sm">
                            Humidity
                        </p>

                        <h3 class="text-2xl font-bold text-white mt-1">
                            ${humidity}%
                        </h3>
                    </div>

                    <div class="bg-white/10 rounded-2xl p-4">
                        <p class="text-gray-400 text-sm">
                            Wind Speed
                        </p>

                        <h3 class="text-2xl font-bold text-white mt-1">
                            ${wind} km/h
                        </h3>
                    </div>
                </div>

            </div>
        `
}

export function showError(message){
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