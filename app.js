window.addEventListener("load", () => {
  let long; 
  let lat;
  let locationTimezone = document.querySelector('location-timezone');
  let TempDegree = document.querySelector('temp-degree');
  let TempDescription = document.querySelector('temp-description');

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

        console.log(name);
        // const {temp} = data.main.temp;

        // Set DOM element from API
        // TempDegree.textContent = temp;
      })
    })  
  }


})



