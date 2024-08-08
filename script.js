





const apiKey = "97f53a4e9b9f0a19474dda69edc4cab8";
const apiUrl = "";

async function checkWeather() {
    const response = await fetch(apiUrl + `$appid=${apiKey}`);
    var data =await response.json();

    console.log(data);
    checkWeather();
}