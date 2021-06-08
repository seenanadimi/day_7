const rootUrl =
  "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";



function getLocationUrl(lon,lat){
    return `https://www.7timer.info/bin/astro.php?lon=${lon}.2&lat=${lat}.1&ac=0&unit=metric&output=json&tzshift=0`;
};

  

    window.navigator.geolocation.getCurrentPosition(function(success) {
        console.log('success', success)
        fetch(getLocationUrl(90, 23))
          .then((response) => response.json())
          .then((data) => console.log(data));
    }),function(error){
        console.log('err', error)
    }
    