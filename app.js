"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-weather-type")
    .addEventListener("change", weatherTypeSelected);
  document
    .querySelector("#select-temperature")
    .addEventListener("change", tempSelected);
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

function tempSelected() {
  const type = this.value;
  console.log(type);
  setTemp(type);
}

function setTemp(type) {
  const tempDescription = document.querySelector("#temperature-description");

  if (type === "10 degrees") {
    tempDescription.textContent =
      "Looks like it might be spring soon, but not quite yet.";
  } else if (type === "20 degrees") {
    tempDescription.textContent =
      "This is the good part of spring and early summer, enjoy it!";
  } else if (type === "30 degrees") {
    tempDescription.textContent =
      "This might be too warm for some, but at least now we know it's summer for sure.";
  } else if (type === "35 degrees") {
    tempDescription.textContent = "It's a hot one out there. Be careful!";
  }
}
