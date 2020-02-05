// Create an object. Use JSON syntax to specify variables and their values
let user = {username: 'Zoe', password: 'Kittens'}

// read data
console.log(user.username) // prints Zoe

// read data - another way
console.log(user['username']) // prints Zoe

// change data
user.password = 'zebras'
console.log(`New password is ${user.password}`)

//or
user['password'] = 'armadillo'
console.log(`User password is ${user.password}`)

// Add another attribute = even though it's not defined in our object
//adds attributes to existing objects
user.email = 'zoe@zoe.com'

console.log(user.email) // zoe@zoe.com

