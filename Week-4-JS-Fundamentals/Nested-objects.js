// Create an object. Values can be strings, numbers, lists, or other objects
var user = {
    username: 'Tom',
    password: 'apples',
    email : 'tmullins@',
    roles : ['senior software developer','user', 'server admin'],   //roles value is an array
    contact: {      //contact value is another object
        phone: 9526490213,
        location: 'Minneapolis'
    },
    salary : [100000, 'Benefits Package']
}

console.log('FUll user info\n' + user) // nested objects display as [object Object]

//print all of the data on one line
console.log('Full user info\n' + JSON.stringify(user))

// On multiple lines with 2 spaces of indentation
console.log('Full user info\n' + JSON.stringify(user, null, 2))

