let centralUsCoordinates = [39.8283, -98.5795]; // Array of latitude and longitude
let zoomLevel = 4; // 1 = whole world, 10 = large city, 20 = city blocks

//create map
let map = L.map('bridges_map').setView(centralUsCoordinates, zoomLevel);

// add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    // access token from mapbox
    accessToken: 'pk.eyJ1IjoiY2xhd2ZvcmQiLCJhIjoiY2s2a3dpbHpzMDh5YTNsbnFtdmdncHN4byJ9.ryriGwWfag6cNvJPS05qLg'
}).addTo(map);

//create list of bridge objects
bridge_obj = [
    {'bridge_name': 'Varrazano-Narrows Bridge', 'city_state:': 'New York, NY', 'Span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'bridge_name': 'Golden Gate Bridge', 'city_state:': 'San Francisco and Marin, CA', 'Span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'bridge_name': 'Mackinac Bridge', 'city_state:': 'Mackinaw and St. Ignace, MI', 'Span': '1158.0', 'coordinates': [45.8174, -84.7278] },
    {'bridge_name': 'George Washington Bridge', 'city_state:': 'New York, NY and New Jersey, NJ', 'Span': '1067.0', 'coordinates': [40.8517, -73.9527] },
    {'bridge_name': 'Tacoma Narrows Bridge', 'city_state:': 'Tacoma and Kitsap, WA', 'Span': '853.44', 'coordinates': [47.2690, -122.5517] },
];

let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [28,50],
    popupAnchor: [0,0]
});
//loop through list to create map markers and provide pop-up information
for (let x = 0; x < bridge_obj.length;x++){
    let campus_marker = L.marker(bridge_obj[x].coordinates, {icon: bridgeIcon}).bindPopup(`${bridge_obj[x].bridge_name}<br>${bridge_obj[x]["city_state:"]}<br>${bridge_obj[x].Span}`).addTo(map)

};

//find canvas in html
let canvas = document.getElementById('bridge_chart');
console.log(canvas);
let ctx = canvas.getContext('2d');

//create new chart
chart = new Chart(ctx, {

    type: 'bar',
    data: {

        labels: [],
        datasets: [{
            label: 'Length in Meters',
            data: [],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// loop through bridge objects and push elements to chart lists
for (let x = 0; x < bridge_obj.length;x++){
    chart.data.labels.push(bridge_obj[x].bridge_name);
    chart.data.datasets[0].data.push(bridge_obj[x].Span)
}





