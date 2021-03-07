// Icons Object
const icons = {
    clear: "☀",
    rain: "️🌧",
    storm: "⛈",
    snow: "🌨",
    mist: "🌫",
    clouds: "☁",
  };
  
  const bgImage = $(".background");
  
  // Time from Moment.js
  $("#time").text(moment().format("LTS"));
  console.log(moment().format("LTS"));
  
  // Greeting Messages according to time
  var greeting;
  console.log(new Date());
  var time = new Date().getHours();
  console.log(time);
  if (time < 12) {
    greeting = "Good morning";
  } else if (time > 12 && time < 16) {
    greeting = "Good afternoon";
  } else if (time > 16 && time < 20) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }
  // console.log(greeting);
  $("#time").append("<p id='greeting'>" + greeting + "</p>");
  
  
  // Random Picture API
  axios({
      method: 'get',
      url: 'https://api.unsplash.com/photos/random/?client_id=5a82fcd2d784f6325665bbc54e7180a784d000af3371baeac6abf1628b2ea627'
  })
  .then(response => {
      console.log(response.data.urls.regular);
      bgImage.css('background-image', `url(${response.data.urls.regular})`);
  })
  .catch(error => {
      console.log(error);
  })
  
  
  //Weather API
  axios({
    method: "get",
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=Jeddah,sa&APPID=14511a53b7c6e5611b51293e1f4c74ff",
  })
    .then((response) => {
      // console.log(response);
      // console.log(response.data.weather[0].main);
      console.log(response.data.main.temp - 273.15);
      var currentTemp = response.data.main.temp - 273.15 + " C";
  
      currentWeather = response.data.weather[0].main.toLowerCase();
      // console.log(currentWeather);
      // console.log(icons.clear);
      currentWeatherIcon = icons[currentWeather];
      // console.log(icons[currentWeather]);
  
      $("#temp").append(currentWeatherIcon);
      $("#temp").append(currentTemp);
    })
    .catch((error) => {
      console.log(error);
    });
  
  //Quotation API
  axios({
    method: "get",
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
  })
    .then((response) => {
      if (response.status == 200) {
        console.log(response);
        console.log(response.data.quoteText);
        $("#quoteText").text(response.data.quoteText);
        $("#quoteAuthor").text(response.data.quoteAuthor);
      } else {
        console.log("Please try again later");
      }
    })
    .catch((error) => {
      console.log(error);
    });