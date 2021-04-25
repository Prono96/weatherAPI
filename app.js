window.addEventListener("load", () => {
  let long; 
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat =  position.coords.latitude;

      // Api key
      const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4b537fedef0fb24b53173d1ec82cedfe`;

      // Return fetch API
      fetch(api)
      .then((response) => {
        return response.json();
      })
    })
  }


})



