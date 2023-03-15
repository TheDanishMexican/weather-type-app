"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listener for select on HTML
    document.querySelector("#select-weather-type").addEventListener("change", weatherTypeSelected);
}

function weatherTypeSelected() {
    const type = this.value;
    console.log(type);
    setWeather(type);
}

function setWeather(type) {
    const weatherDescription = document.querySelector("#weather-description");

    if (type === "sunny") {
        weatherDescription.textContent =
            "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if (type === "rainy") {
        weatherDescription.textContent =
            "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    } else if (type === "snowing") {
        weatherDescription.textContent =
            "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    } else if (type === "overcast") {
        weatherDescription.textContent =
            "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    } else {
        weatherDescription.textContent = "No weather type selected.";
    }
}
