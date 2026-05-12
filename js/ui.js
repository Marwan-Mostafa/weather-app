

export function displayWeather(data) {
    const result = document.getElementById("weatherResult")

    const { city, temp, icon, humidity, wind} = data

    result.innerHTML = `
            <div class="">

                <!-- City -->

                <div class="">
                    <p class="">
                        Current Weather
                    </p>

                    <h2 class="">
                        ${city}
                    </h2>
                </div>

                <!-- Temperature -->
                <div class="">
                    <span class="">
                        ${Math.round(temp)}
                    </span>
                    <span class="">°</span>
                </div>

                <!-- Stats -->
                <div class="">

                    <!-- Humidity -->
                    <div class="">
                        <p class="">Humidity</p>
                        <p class="">
                            ${humidity} <span class="text-sky-400">%</span>
                        </p>
                    </div>

                    <!-- Wind -->
                    <div class="">
                        <p class="">Wind</p>
                        <p class="">
                            ${wind} <span class="">km/h</span>
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