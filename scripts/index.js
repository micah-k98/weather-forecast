"strict"

let cities = [
    {
        name: "Phoenix, AZ",
        latitude: 33.446557,
        longtitude: -112.087241
    },
    {
        name: "Boulder, CO",
        latitude: 40.014413,
        longtitude: -105.268853
    },
    {
        name: "San Francisco, CA",
        latitude: 37.774200,
        longtitude: -122.416789
    },
    {
        name: "New York City, NY",
        latitude: 40.713457,
        longtitude: -74.007809
    },
    {
        name: "Charleston, SC",
        latitude: 32.777452,
        longtitude: -79.930789
    },
    {
        name: "Savannah, GA",
        latitude: 32.080911,
        longtitude: -81.077183
    }
]

let citySelect;

document.addEventListener("DOMContentLoaded", () => {

    citySelect = document.getElementById("citySelect");
    
    loadCities();
})

function loadCities() {
    cities.forEach(city => {
        const option = new Option(city.name);
        citySelect.appendChild(option);
    })
}