const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const city = urlParams.get("city");
console.log(city);

let place = document.querySelector(".city");
place.innerHTML = city;
