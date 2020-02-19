let animals = ["Bird", 'Whale', 'Zebra'];

/* Function callbacks vs. arrow functions
These two pieces of code are identical
 */

// using callback function
animals.forEach(function(animal){
    console.log(animal)
});

// Using a callback function, written in arrow notation
// This is equivalent to the code above, but is more concise
animals.forEach( (animal) => {
    console.log(animal)
});

// if there is only one parameter to the callback function, can omit the parentheses
animals.forEach( (animal) => {
    console.log(animal)
});

//If there is only one statement in the callback function, can omit the  { } too
animals.forEach( (animal) =>
    console.log(animal)
);

// Or can be even more concise - remember this only works
// for a single line in the callback
animals.forEach( (animal) => console.log(animal) );

// Essentially omit function and add fat arrow after parameter