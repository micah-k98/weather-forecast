"strict"

class WeatherService {

    baseUrl = "https://api.weather.gov/points/";

    async getData(lat, long) 
    {
        const response = await fetch(`${this.baseUrl}${lat},${long}`);
        const body = await response.json();

        let finalData = this.getForecast(body)
        return finalData;
    }

    async getForecast(body) {
        const forecastUrl = body.properties.forecast;
        
        const response = await fetch(forecastUrl);
        const forecastBody = await response.json();

        return forecastBody;
    }
}