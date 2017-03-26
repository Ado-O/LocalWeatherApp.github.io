$(document).ready(function() {
    //poziv prvi request
    $.getJSON("https://ipapi.co/json/", function(data2) {
        var latitude = data2.latitude;
        var longitude = data2.longitude;

        //pozivanje city i country iz prvog requesta
        var city = data2.city;
        var country = data2.region;

        $("#city").html(city);
        $("#country").html(country);

        var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=7c277fcc664e3e7978897fdbe3830700';

        //poziv drugi request
        $.getJSON(api, function(data) {
            var weatherType = data.weather[0].description;
            var kTemp = data.main.temp;
            var windSpeed = data.wind.speed;

            var tempSwap = true;
            var fTemp = (kTemp * (9 / 5) - 459.67).toFixed(2);
            var cTemp = (kTemp - 273).toFixed(1);

            $("#weatherType").html(weatherType);
            $("#fTemp").html(fTemp + " &#8457; ");

            //button
            $("button").click(function() {
                if (tempSwap === false) {
                    $("#fTemp").html(fTemp + " &#8457; ");
                    tempSwap = true;
                } else {
                    $("#fTemp").html(cTemp + " &#8451; ");
                    tempSwap = false;
                }
            });

            //windSpeed
            windSpeed = (2.237 * (windSpeed)).toFixed(1);
            $("#windSpeed").html(windSpeed + " mph ");

            /*** konstrukcija za background img ***/
            //dodavanje date i weather radi dobivanja u kojem se mjesecu nalazi korisnik i koje je weather trenutno
            var month = new Date().getMonth();
            var weatherMain = data.weather[0].main;

            if (month <= 1 || month === 11) { //zima
                if (weatherMain == "Snow") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/winterSnow_qlgv2g.jpg")');
                } else if (weatherMain == "Rain" || weatherMain === "Drizzle") {
                    $('body').css('url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097337/winterRain_kv7drl.jpg")');
                } else {
                    ('body').css('url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/winter_sakpuq.jpg")');
                }
            };
            if (month <= 4) { // proljece
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097328/springCloud_mb39cu.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097333/springRain_euulus.jpg")');
                } else {
                    $('body').css('background-image', 'url("https://wallpapercave.com/wp/Eqhm7HZ.jpg")');
                }
            };
            if (month <= 9 && month >= 5) { //ljeto
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097338/summerCloud_yedprb.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/summerRain_jbdu4p.jpg")');
                } else {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097341/summer_zgrd5a.jpg")');
                }
            };
            if (month === 10) { // jesen
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097335/autmnCloud_py2far.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097329/autmnRain_xtgmum.jpg")');
                } else {
                    $('body').css('background-image', 'url("https://cloudinary.com/console/media_library#/dialog/image/upload/autmn_pgi91d")');
                }
            };

            /*** konstrukcija za icon ***/
            switch (weatherMain) {
                case "Thunderstorm":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Thunderstorm_uwcae4.png');
                    break;
                case "Drizzle":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Drizzle_qsgcrc.png');
                    break;
                case "Rain":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Rain_kslmjg.png');
                    break;
                case "Snow":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Snow_cvef0i.png');
                    break;
                case "Clouds":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Atmosphere_fz52u7.png');
                    break;
                case "Atmosphere":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Atmosphere_fz52u7.png');
                    break;
                case "Clear":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Clear_dxpj6a.png');
                    break;
                case "Additional":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Extreme_xdtdod.png');
                    break;
                case "Extreme":
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Extreme_xdtdod.png');
                    break;
                default:
                    $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Clear_dxpj6a.png');;
            }


        });
    });

});