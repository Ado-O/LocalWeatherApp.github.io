/*** prvi request ***/
var req1 = new XMLHttpRequest();
req1.open("GET", "http://ip-api.com/json", false);
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
req2.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=006fc53c34059f174d74b07c366a0f8f", false);
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

if (month <= 1 || month == 11) { //zima
    if (weatherMain == "Snow") {
        document.body.style.backgroundImage =
            'url("https://s-media-cache-ak0.pinimg.com/originals/c8/11/e6/c811e6495c3d28c96e48f5a8c51e49fe.jpg")';
    } else if (weatherMain == "Rain" || weatherMain == "Drizzle") {
        document.body.style.backgroundImage =
            'url("http://matchbin-assets.s3.amazonaws.com/public/sites/31/assets/7QQH_snowstorm.jpg")';
    } else {
        document.body.style.backgroundImage =
            'url("http://livehdwallpaper.com/wp-content/uploads/2016/10/Winter-Tree-Wallpapers-HD-images.jpg")';
    };

} else if (month <= 4) { // proljece
    if (weatherMain == "Clouds" || weatherMain == "Atmosphere") {
        document.body.style.backgroundImage =
            'url("http://img3.themebin.com/1920x1200/misty_blue.jpg")';
    } else if (weatherMain == "Rain" || weatherMain == "Drizzle") {
        document.body.style.backgroundImage =
            'url("https://cdn.pixabay.com/photo/2015/11/18/10/46/rain-1048936_960_720.jpg")';
    } else {
        document.body.style.backgroundImage =
            'url("http://1.bp.blogspot.com/-A9X6Oipw7QQ/VQhN8ZSu8aI/AAAAAAAAEvw/I7htTJsfYko/s1600/2981881%2BGreen%2BFields%2BSpring%2BLandscape%2BHD%2BWallpaperz%2B1624441.jpg")';
    };

} else if (month <= 9) { //ljeto
    if (weatherMain == "Clouds" || weatherMain == "Atmosphere") {
        document.body.style.backgroundImage =
            'url("http://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Summer_Waiting_for_the_summer_rain_078345_.jpg")';
    } else if (weatherMain == "Rain" || weatherMain == "Drizzle") {
        document.body.style.backgroundImage =
            'url("http://www.likehdwallpaper.com/wp-content/uploads/Nature/FTP1/2560x1440/Lost%20Summer%20rain%20Wallpapers%202560x1440.jpg")';
    } else {
        document.body.style.backgroundImage =
            'url("http://kula-turist.com/wp-content/uploads/2014/05/ljetovanje.jpg")';
    };

} else if (month == 10) { // jesen
    if (weatherMain == "Clouds" || weatherMain == "Atmosphere") {
        document.body.style.backgroundImage =
            'url("http://vunature.com/wp-content/uploads/2016/11/trees-twigs-landscapes-forests-autumn-leaves-branch-plants-seasons-nature-fall-wallpapers-pc-1920x1080.jpg")';
    } else if (weatherMain == "Rain" || weatherMain == "Drizzle") {
        document.body.style.backgroundImage =
            'url("https://www.walldevil.com/wallpapers/a50/water-rain-autumn-drops-background-fantasy-image.jpg")';
    } else {
        document.body.style.backgroundImage =
            'url("http://www.wallhd4.com/wp-content/uploads/2015/03/autumn-leaves-11.jpeg")';
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