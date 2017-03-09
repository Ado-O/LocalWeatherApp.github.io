$(document).ready(function() {

    var lat;
    var long;
    $.getJSON("http://ip-api.com/json", function(data2) {
        lat = data2.lat;
        long = data2.lon;

        var city = data2.city;
        var country = data2.country;

        $("#city").html(city);
        $("#country").html(country);



        var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=7c277fcc664e3e7978897fdbe3830700';
        console.log(api);

        $.getJSON(api, function(data) {
            var weatherType = data.weather[0].description;
            var kTemp = data.main.temp;
            var windSpeed = data.wind.speed;

            var fTemp;
            var cTemp;


            var tempSwap = true;

            fTemp = (kTemp * (9 / 5) - 459.67).toFixed(2);
            cTemp = (kTemp - 273).toFixed(1);

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

            windSpeed = (2.237 * (windSpeed)).toFixed(1);
            $("#windSpeed").html(windSpeed + " mph ");

            var month = new Date().getMonth();

            var weatherMain = data.weather[0].main;

            if (month <= 1 || month === 11) { //zima
                if (weatherMain == "Snow") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/winterSnow_qlgv2g.jpg")');
                } else if (weatherMain == "Rain" || weatherMain === "Drizzle") {
                    $('body').css('url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097337/winterRain_kv7drl.jpg")');
                } else {
                    ('body').css('url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/winter_sakpuq.jpg")');
                }
            };
            if (month <= 4) { // proljece
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097328/springCloud_mb39cu.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097333/springRain_euulus.jpg")');
                } else {
                    $('body').css('url("https://cloudinary.com/console/media_library#/dialog/image/upload/spring_p9tcnw")');
                }
            };


            if (month <= 9 && month >= 5) { //ljeto
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097338/summerCloud_yedprb.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097342/summerRain_jbdu4p.jpg")');
                } else {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097341/summer_zgrd5a.jpg")');
                }
            };

            if (month === 10) { // jesen
                if (weatherMain === "Clouds" || weatherMain === "Atmosphere") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097335/autmnCloud_py2far.jpg")');
                } else if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $('body').css('background-image', 'url("http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489097329/autmnRain_xtgmum.jpg")');
                } else {
                    $('body').css('background-image', 'url("https://cloudinary.com/console/media_library#/dialog/image/upload/autmn_pgi91d")');
                }
            };

            if (weatherMain == "Thunderstorm") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Thunderstorm_uwcae4.png');
            } else if (weatherMain == "Drizzle") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Drizzle_qsgcrc.png');

            } else if (weatherMain == "Rain") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Rain_kslmjg.png');

            } else if (weatherMain == "Snow") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Snow_cvef0i.png');

            } else if (weatherMain == "Atmosphere" || weatherMain == "Clouds") {
                $('#icone').attr('src', 'https://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Atmosphere_fz52u7.png');
            } else if (weatherMain == "Clear") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Clear_dxpj6a.png');

            } else if (weatherMain == "Extreme" || weatherMain == "Additional") {
                $('#icone').attr('src', 'http://res.cloudinary.com/dcqcuv3gd/image/upload/v1489098018/Extreme_xdtdod.png');

            };



        });
    });

});
