let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');

fetch(url)
    // simplified with arrows; only one parameter and one statement; if statement is a return 'return can be omitted
    // function is omitted as are ()
    .then( res => res.json()  )
    .then( issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
    })
    .catch( err => {
        console.log(err)
    })