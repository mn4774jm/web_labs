/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

//logged to console template strings for longitude and latitude nested object elements
console.log(`Latitude: ${iss_location.iss_position.latitude}`)
console.log(`Longitude: ${iss_location.iss_position.longitude}\n`)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};
rates.CHF = 1.1787;
let Australian_exchange = rates.AUD;
let euro_to_aud = Australian_exchange * 100;
let aud_fixed = euro_to_aud.toFixed(2);
console.log(`100 Euros is roughly equivalent to ${aud_fixed} Australian dollars\n`);

//call method to check current high rate and log to console
let high_current = rate_check();

let high_country_functional = getKeyByValue(rates, high_current)
console.log(`${high_country_functional} has current highest exchange rate is ${high_current} to 1 Euro\n`);

//created method for checking highest conversion rate
//initialize highest_recorded rate variable, loop through rates and store new value if higher than last iteration
function rate_check() {
    let highest_recorded_rate = 0;
    for (let r in rates) {
        if (highest_recorded_rate < rates[r]) {
            highest_recorded_rate = rates[r]
        }
    }
    return highest_recorded_rate
}
// experimenting with functional programming; The below code was found at
// https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
// by user UncleLaz
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
];

//loop through each item in list until the object element name is equal to 'Gary ...'
//print name using string template
for (let n = 0; n < cats_and_owners.length; n++){
    if (cats_and_owners[n].name === 'Gary Oldman'){
        console.log(`${cats_and_owners[n].name}'s Cat's name is ${cats_and_owners[n].cat}\n`)
    }
}
//added new object to end of list
cats_and_owners.push({name: 'Taylor Swift', cat: 'Meridith'})

//log each object in list using forEach method
cats_and_owners.forEach(function (element) {
    console.log(element)
})
console.log()


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]

};
// forEach method used to search through the obj and second obj in list and nested forEach to find firstname/surname
//template string used to display names in readable way
nobel_prize_winners_2017.prizes.forEach(function (element) {
    element.laureates.forEach(function (element2) {
        console.log(`${element2.firstname} ${element2.surname}`)
    })

});console.log();

//nested for each to list the ids for each of the laureates
nobel_prize_winners_2017.prizes.forEach(function (element) {
    if (element.category === 'physics'){
        for (let p in element.laureates)
            console.log(element.laureates[p].id)
    }
});console.log();

//forEach to find the category names
nobel_prize_winners_2017.prizes.forEach(function (element) {
    console.log(element.category)
});console.log();


//created a counter and forEach loop that adds 1 in each iteration
let count = 0;
nobel_prize_winners_2017.prizes.forEach(function () {
    count += 1
});
console.log(`Number of prize categories: ${count}\n`);

//initialized counter for total laureates, for each method used and used length on laureates for each category and
// added to total count
let laureate_count = 0;
nobel_prize_winners_2017.prizes.forEach(function (element){
    laureate_count += element.laureates.length
});
console.log(`Total number of laureates: ${laureate_count}\n`);



