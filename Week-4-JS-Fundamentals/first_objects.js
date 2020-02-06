// // create new object
// let user = {username : 'Tom', password : 'peanuts'}
//
// //read data w/ node first_objects.js
// console.log(user.username)
//
// //----------------- Looping and objects ----------------------------

// An object with properties table, chair, couch; values are the color of each
var furniture = {table : 'red', chair : 'blue', couch : 'green'}

//looping for all properties
for (var f in furniture) {
    console.log(f)
    console.log(furniture[f])
}
//
// //----------------- Nested Example ------------------------------
// 'Example does not currently work *********'
// console.log('List of URLS for recipes for the ingredients in a random taco')
//
// urls = []
//
// for (var component in random_taco) {
//     url = random_taco[component].url;
//     //url = random_taco[component]['url] // this works too
//     url.push(url);
// }
//
// console.log(urls)

//----------------------- properties ------------------------------

// var triangle = {a:1,b:2, c:3}
//
// function ColoredTriangle(){
//     this.color = 'red'
// }
//
// ColoredTriangle.prototype = triangle;
//
// var obj = new ColoredTriangle();
//
// for (const prop in obj) {
//     if (obj.hasOwnProperty(prop)){
//         console.log(`obj.${prop} = ${obj[prop]}`)
//     }
// }

//output:
// "obj.color = red"