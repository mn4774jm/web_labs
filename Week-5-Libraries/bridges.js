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


bridge_obj = [
    {'bridge_name': 'Varrazano-Narrows Bridge', 'city_state:': 'New York, NY', 'Span': 'Span: 1298.4 meters', 'coordinates': [40.6066, -74.0447] },
    {'bridge_name': 'Golden Gate Bridge', 'city_state:': 'San Francisco and Marin, CA', 'Span': 'Span: 1280.2 meters', 'coordinates': [37.8199, -122.4783] },
    {'bridge_name': 'Mackinac Bridge', 'city_state:': 'Mackinaw and St. Ignace, MI', 'Span': 'Span: 1158.0 meters', 'coordinates': [45.8174, -84.7278] },
    {'bridge_name': 'George Washington Bridge', 'city_state:': 'New York, NY and New Jersey, NJ', 'Span': 'Span: 1067.0 meters', 'coordinates': [40.8517, -73.9527] },
    {'bridge_name': 'Tacoma Narrows Bridge', 'city_state:': 'Tacoma and Kitsap, WA', 'Span': 'Span: 853.44 meters', 'coordinates': [47.2690, -122.5517] },
];

for (let x = 0; x < bridge_obj.length;x++){
    let campus_marker = L.marker(bridge_obj[x].coordinates).bindPopup(`${bridge_obj[x].bridge_name}<br>${bridge_obj[x]["city_state:"]}<br>${bridge_obj[x].Span}`).addTo(map)

};

let canvas = document.getElementById('bridge_chart');
console.log(canvas);
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [{
            label: 'Number of Votes',
            data: [18, 14, 7, 10],
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
})

