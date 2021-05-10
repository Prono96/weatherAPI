window.addEventListener("load", () => {
  let long; 
  let lat;
  let locationTimezone = document.querySelector('.location-timezone');
  let TempDegree = document.querySelector('.temp-degree');
  let TempDescription = document.querySelector('.temp-description');
  let tempIcon = document.querySelector('.weather-icon');
  let iconFile;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat =  position.coords.latitude;

      // Cors for cross origin resources system 
      const proxy = "https://cors-anywhere.herokuapp.com/"

      // Api key
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=10.306720&lon=9.844930&appid=4b537fedef0fb24b53173d1ec82cedfe`;

      // Return fetch API
      fetch(api)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const {name} = data;
        const {feels_like} = data.main;
        const {id, description} = data.weather[0];
        const {icon} = data.weather[0];

        //Fetching data to UI
        locationTimezone.textContent = name;
        TempDegree.textContent = Math.round(feels_like - 273);
        TempDescription.textContent = description;
        // tempIcon.textContent = icon;
        
        // Modification of weather Icons 
        
        if(id < 250) {
          tempIcon.src = 'icons/storm.png'
        } else if(id < 350){
          tempIcon.src = 'icons/drizzle.png'
        } else if(id < 550){
          tempIcon.src = 'icons/rainy.png'
        } else if(id < 630){
          tempIcon.src = 'icons/snow.png'
        } else if(id < 800){
          tempIcon.src = 'icons/atmosphere.png'
        } else if(id === 800){
          tempIcon.src = 'icons/atmosphere.png'
        } else if(id > 800){
          tempIcon.src = 'icons/cloud.png'
        }




        console.log(data);
        // const {temp} = data.main.temp;

        // Set DOM element from API
        // TempDegree.textContent = temp;
      })
    })  
  }


})



