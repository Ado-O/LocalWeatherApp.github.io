/*** prvi request ***/
var req1 = new XMLHttpRequest();
req1.open("GET", "https://ip-api.com/json", false);
req1.send(null);
var jsonParse1 = JSON.parse(req1.responseText);

var lat = jsonParse1.lat;
var long = jsonParse1.lon;

// ime grada i drzave uzimam iz prvog requesta
var city = jsonParse1.city;
var country = jsonParse1.country;

document.querySelector("#country").innerHTML = "<strong>" + "Country: " + country + "</strong>";
document.querySelector("#city").innerHTML = "<strong>" + "City: " + city + "</strong>";

/*** drug request ***/
var req2 = new XMLHttpRequest();
req2.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=006fc53c34059f174d74b07c366a0f8f", false);
req2.send(null);
var jsonParse2 = JSON.parse(req2.responseText);

var tempSwap = true;
var kTemp = jsonParse2.main.temp;
var fTemp = ((kTemp) * (9 / 5) - 459.67).toFixed(1);
var cTemp = (kTemp - 273).toFixed(1);

var weatherType = jsonParse2.weather[0].description;
var windSpeed = jsonParse2.wind.speed;

/*** izlaz ***/
document.querySelector("#location").innerHTML = "<strong>" + "Location: " + jsonParse2.name + "</strong>";
document.querySelector("#weatherType").innerHTML = weatherType;
document.querySelector("#windSpeed").innerHTML = windSpeed + "m/s";
document.querySelector("#fTemp").innerHTML = fTemp + "&#176F";

/*** na button mijenja F u C ***/
function myFunction() {
    if (tempSwap === false) {
        document.getElementById("fTemp").innerHTML = fTemp + " &#8457;";
        tempSwap = true;
    } else {
        document.getElementById("fTemp").innerHTML = cTemp + " &#8451;";
        tempSwap = false;
    }
}

/*** mijenja slike ***/
// uzima datum
var month = new Date().getMonth();
// uzima trenutno vremena
var weatherMain = jsonParse2.weather[0].main;

if (month <= 1 || month === 11) { //zima
    if (weatherMain == "Snow") {
        document.body.style.backgroundImage = 'url("imgBK/winterSnow.jpg")';
    } else if (weatherMain == "Rain" || weatherMain === "Drizzle") {
        document.body.style.backgroundImage = 'url("imgBK/winterRain.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("imgBK/winter.jpg")';
    };

} else if (month <= 4) { // proljece
    if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
        document.body.style.backgroundImage = 'url("imgBK/springCloud.jpg")';
    } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
        document.body.style.backgroundImage = 'url("imgBK/springRain.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("imgBK/summer.jpg")';
    };

} else if (month <= 9) { //ljeto
    if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
        document.body.style.backgroundImage = 'url("imgBK/summerCloud.jpg")';
    } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
        document.body.style.backgroundImage = 'url("imgBK/summerRain.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("imgBK/summer.jpg")';
    };

} else if (month === 10) { // jesen
    if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
        document.body.style.backgroundImage = 'url("imgBK/autmnCloud.jpg")';
    } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
        document.body.style.backgroundImage = 'url("imgBK/autmnRain.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("imgBK/autmn.jpg")';
    };
};

/*** dodavanje icone ***/
var icone = document.querySelector("#icone");
switch (weatherMain) {
    case "Thunderstorm":
        icone.setAttribute("src", "Icon/Thunderstorm.png");
        break;
    case "Drizzle":
        icone.setAttribute("src", "Icon/Drizzle.png");
        break;
    case "Rain":
        icone.setAttribute("src", "Icon/Rain.png");
        break;
    case "Snow":
        icone.setAttribute("src", "Icon/Snow.png");
        break;
    case "Atmosphere" || "Clouds":
        icone.setAttribute("src", "Icon/Atmosphere.png");
        break;
    case "Clear":
        icone.setAttribute("src", "Icon/Clear.png");
        break;
    case "Extreme" || "Additional":
        icone.setAttribute("src", "Icon/Extreme.png");
        break;
}
