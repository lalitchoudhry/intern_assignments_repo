const url = process.env.REACT_APP_WEATHER_API_URL;

export const getWeatherReport = async (city)=>{
    try {
        const response = await fetch(`${url}&q=${city}`)
        .then(async response => await response.json())
        .catch(err => console.log("getWeatherReport response : ", err))

        return response;
    } catch (error) {
        console.log("getWeatherReport : ", error);
    }
}