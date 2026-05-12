

export function displayWeather(data) {
    const result = document.getElementById("weatherResult")

    const { city, temp, icon, humidity, wind} = data

    result.innerHTML = `
            <div class="w-140 mx-auto h-80 rounded-2xl bg-white/5 text-white shadow-lg
            flex flex-col items-center justify-around gap-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2">

                <!-- City -->

                <div class="">
                    <p class="mb-2 text-sm uppercase tracking-[0.35em] text-sky-300/70">Current Weather</p>
                    <h2 class="bg-linear-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">${city}</h2>
                </div>

                <!-- Temperature -->

                <div class="flex items-start justify-center text-center gap-1">
                    <span class="bg-linear-to-b from-white to-sky-300 bg-clip-text text-8xl font-black tracking-tight text-transparent">${Math.round(temp)}</span>
                    <span class="text-3xl font-bold text-sky-300 mt-2">°</span>
                </div>


                <!-- Stats -->
                <div class="flex items-center justify-between w-85">
                
                <!-- Humidity -->

                    <div class="flex flex-col justify-center items-center border border-white/10 bg-black/20 p-4 w-40 h-18 rounded-[2rem] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-sky-400/10">
                        <p class="text-md font-semibold uppercase tracking-wider text-gray-400">Humidity</p>
                        <p class="text-[25px] font-bold">${humidity} 
                        <span class="text-md text-sky-300">%</span>
                        </p>
                    </div>

                    <!-- Wind -->

                    <div class="flex flex-col items-center justify-center border border-white/10 bg-black/20 p-4 backdrop-blur-xl w-40 h-18 rounded-[2rem] transition duration-500 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-sky-400/10">
                        <p class="text-md uppercase tracking-wider text-gray-400">Wind Speed</p>
                        <p class=""text-[25px] font-bold">${wind}
                         <span class="text-md text-cyan-300">km/h</span>
                        </p>
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