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
let resultTable;

document.addEventListener("DOMContentLoaded", () => {

    //  Create the service(s)
    weatherService = new WeatherService();

    // Set the values for global variables
    citySelect = document.getElementById("citySelect");
    resultTable = document.getElementById("resultTable");

    // Register Events
    citySelect.addEventListener("change", getWeatherData);
    
    // Load data
    loadCities();
})

function loadCities() {
    cities.forEach(city => {
        const option = new Option(city.name);
        citySelect.appendChild(option);
    })
}

async function getWeatherData() {

    const selectedCity = citySelect.value;
    let lat = 0;
    let long = 0;
    
    cities.forEach(city => {
        if (city.name == selectedCity) {
            lat = city.latitude;
            long = city.longtitude;
        }
    })

    let finalData = await weatherService.getData(lat, long);
    console.log(finalData);
    displayResults(finalData);
}

function displayResults(finalData) {
    resultTable .innerText = "";
    tableHeader();

    let periodsArray = finalData.properties.periods;

    periodsArray.forEach(period => {
        const tr = document.createElement("tr");
        tr.classList.add("text-center");

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");

        td1.innerText = period.name;
        td2.innerText = period.temperature;
        td3.innerText = period.temperatureUnit;
        td4.innerText = period.windDirection;
        td5.innerText = period.windSpeed;
        td6.innerText = period.shortForecast;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        resultTable.appendChild(tr);
    })
}

function tableHeader() {
    const tr = document.createElement("tr");
    tr.classList.add("text-center");
    tr.classList.add("fw-medium");

    const tr2 = document.createElement("tr");
    tr2.classList.add("text-center");
    tr2.classList.add("fw-medium");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td4 = document.createElement("td");
    const td6 = document.createElement("td");

    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    const td9 = document.createElement("td");
    const td10 = document.createElement("td");
    const td11 = document.createElement("td");
    const td12 = document.createElement("td");

    td1.innerText = "";
    td2.innerText = "Temperature";
        td2.colSpan = "2";
    td4.innerText = "Wind";
        td4.colSpan = "2";
    td6.innerText = "";
    td7.innerText = "Time of the Day";
    td8.innerText = "Temp";
    td9.innerText = "Unit";
    td10.innerText = "Direction";
    td11.innerText = "Speed"
    td12.innerText = "Short Forecast";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td4);
    tr.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);
    tr2.appendChild(td9);
    tr2.appendChild(td10);
    tr2.appendChild(td11);
    tr2.appendChild(td12);

    resultTable.appendChild(tr);
    resultTable.appendChild(tr2);
}