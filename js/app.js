const inputCity = document.getElementById("input-search");
const infoWeather = document.getElementById("info-weather");


const requestApi = async (cityName) => {
    const APIKEY = "1b6835e5c161fe6451309bc31cf09054";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
    infoWeather.innerText = "Searching for the weather features...";
    infoWeather.classList.add("loading");

    try {
        const response = await fetch(api);
        const data = await response.json();
        weatherFeatures(data);
        

    }
    catch (error){
         console.log(error);
    }
};



inputCity.addEventListener("keyup",event => {
    if(event.key == "Enter" & inputCity.value != ""){
        console.log("you r searching")
        requestApi(inputCity.value)
    }
});

weatherFeatures = (features) => {
    console.log(features)
}

