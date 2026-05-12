

export function displayWeather(data) {
    const result = document.getElementById("weatherResult")

    const { city, temp, icon, humidity, wind } = data

    result.innerHTML = `
            <div class="group relative w-full min-w-100 mx-auto rounded-[2rem] bg-white/5 text-white shadow-lg 
            flex flex-col items-center justify-around gap-4 mt-2 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_80px_rgba(56,189,248,0.2)]">

                <!-- City -->

                <div class="">
                    <p class="mb-2 text-sm uppercase tracking-[0.35em] text-sky-300/70">Current Weather</p>
                    <h2 class="bg-linear-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-3xl sm:text-4xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent">${city}</h2>
                </div>

                <!-- Temperature -->

                <div class="flex items-start justify-center text-center gap-1">
                    <span class="bg-linear-to-b from-white to-sky-300 bg-clip-text text-6xl sm:text-6xl lg:text-8xl font-black tracking-tight text-transparent">${Math.round(temp)}</span>
                    <span class="text-3xl sm:text-4xl font-bold text-sky-300 mt-2">°</span>
                </div>


                <!-- Stats -->
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                
                <!-- Humidity -->

                    <div class="flex flex-col w-40 justify-center items-center border border-white/10 bg-black/20 p-5 sm:p-7 lg:p-10 h-18 rounded-[2rem] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-sky-400/10">
                        <p class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">Humidity</p>
                        <p class="text-[25px] font-bold">${humidity} 
                        <span class="text-md text-sky-300">%</span>
                        </p>
                    </div>

                    <!-- Wind -->

                    <div class="flex flex-col items-center justify-center border border-white/10 bg-black/20 p-5 sm:p-7 lg:p-10 backdrop-blur-xl h-18 rounded-[2rem] transition duration-500 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-sky-400/10">
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
            class="group relative mx-auto mt-8
            w-full min-w-100 overflow-hidden

            rounded-[2rem]
            border border-red-400/20
            bg-red-500/10

            p-5 sm:p-6

            text-red-100

            shadow-[0_10px_40px_rgba(239,68,68,0.18)]

            backdrop-blur-2xl

            transition-all duration-500

            hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(239,68,68,0.25)]"
        >

            <!-- Glow Effect -->

            <div
                class="absolute -top-10 -right-10
                h-40 w-40 rounded-full
                bg-red-500/20 blur-3xl

                transition-all duration-700

                group-hover:scale-125"
            ></div>

            <!-- Content -->

                <!-- Text -->

                <div class="flex-1">

                    <h3
                        class="text-base sm:text-lg
                        font-bold tracking-wide text-red-200"
                    >
                        Something went wrong
                    </h3>

                    <p
                        class="mt-1 text-sm sm:text-base
                        leading-relaxed text-red-100/80"
                    >
                        ${message}
                    </p>

                </div>

            </div>

        </div>
    `
}

export function showLoading() {

    const result = document.getElementById("weatherResult")

    result.innerHTML = `
    
        <div class="mt-8 flex justify-center">

            <div class="w-14 h-14 border-4 border-sky-400 border-t-transparent
                rounded-full animate-spin"></div>
        </div>
    `
}