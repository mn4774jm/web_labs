let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let timeElement = document.querySelector('#time')

let issMarker // leaflet marker
let update = 10000

//create map
let map = L.map('iss-map').setView([0,0],1); //center at 0,0 and max zoom out
// add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    // access token from mapbox
    accessToken: 'pk.eyJ1IjoiY2xhd2ZvcmQiLCJhIjoiY2s2a3dpbHpzMDh5YTNsbnFtdmdncHN4byJ9.ryriGwWfag6cNvJPS05qLg'
}).addTo(map);

iss() // initial call to function
setInterval(iss, update) // call the iss function every 10 seconds

let issIcon = L.icon({
    iconUrl: 'international-space-station-icon.png',
    iconSize: [28,50],
    popupAnchor: [0,0]
});

function iss() {
    fetch(url)
        // simplified with arrows; only one parameter and one statement; if statement is a return 'return can be omitted
        // function is omitted as are ()
        .then(res => res.json())
        .then(issData => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long

            if (!issMarker) {
                issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map) // create the marker
                let date = Date.value;
                timeElement.innerHTML = `At ${Date()} the ISS is over the following coordinates`
            } else {
                issMarker.setLatLng([lat, long]) // Already exists - move to new location
            }
        })
        .catch(err => {
            console.log(err)
        })
}