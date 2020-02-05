let animals = ['duck', 'bear', 'squirrel']

console.log(animals)

//access animals by index
console.log(animals[0])
let first_animal =animals[0]

// Modify elements in index
animals[2] = 'mouse'
console.log(animals)

//-----------------------------------------------------
// Creating Arrays
let text = 'hello world'

//Array variable (like a list in python
let quiz_scores = [100, 78, 93, 81, 100, 99]
console.log(quiz_scores)

//Another array. Can mix types if needed
let my_array = [5, 6, 'cake', 1234.124, text]

//print whole array
console.log(my_array)

//read individual elements
console.log(my_array[0]) //array indexes start at 0. This prints 5
console.log(my_array[2]) //prints 'cake'
console.log(my_array[-10]) //non-existent index: prints 'undefined'
console.log(my_array[10]) //non-existent index: prints 'undefined'

// Can modify elements by index
my_array[2] = 'pizza'
console.log(my_array)

//----------------------- Array Manipulation ----------------------

birds = ['Parrot', 'Chicken', 'Dodo', 'Owl']

birds[1] = 'Eagle' //replace 1 element with 'Eagle'
birds[5] = 'Sparrow' // JS lets you do this. There is no element 5, but sparrow is added at position 5
                    // and undefined elements are added to fill the gaps.

console.log(birds)

birds[4] = 'Jay' // fill in the blank element
console.log(birds)

let firstBird = birds[0] // Read data a copy of data from the array
let thirdBird = birds[2]
console.log(firstBird, thirdBird)

let lastBird = birds.pop() //removes last item and returns it
console.log(lastBird, birds)
birds.push('Seagull') // Push adds new element to end of array
console.log(birds)

firstBird = birds.shift() // remove and returns first element
console.log(firstBird, birds)
birds.unshift('Wren') // add element to start of array
console.log(birds)

//How many elements in an array?
let numberOfBirds = birds.length
console.log(numberOfBirds)

//Where is an element in the array? Return index if found, -1 if not
console.log(birds.indexOf('Owl')) //3
console.log(birds.indexOf('Penguin')) // -1

//loop over an array
for (let j=0; j< birds.length; j++){
    console.log('Bird ' + j + ' is ' + birds[j])
}

birds.reverse() // reverse order of elements
console.log(birds)

birds.sort() // arrange array in ascending order.

console.log(birds)

let allBirds = birds.join() // join all elements into a string, separated by commas

let allBirdsWithSeparator = birds.join(' % ') // join all elements with custom sep

console.log(allBirds)
console.log(allBirdsWithSeparator)