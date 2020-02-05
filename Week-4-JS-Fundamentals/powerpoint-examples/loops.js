
let letters = ['a', 'b', 'c'];

//loop over an array by counting the elements
//useful if you need to know the location in the array
for (let i= 0; i < letters.length; i++){
    console.log(`Element ${i+1} is ${letters[i]}`)
}


let animals = ['Buffalo', 'Elephant', 'Yak']
//--------Imperative-----------
for (let i = 0; i < animals.length;i++){
    console.log('Elemant '+ i +' is '+animals[i])
}

// Another way of looping through an array
// More concise if you don;t need to know the location of the elements
// Notice the function definition in the function call
//--------Functional ------------
animals.forEach(function(element){
    console.log(element)
})

//For loop, repeat a certain number of times
for (let x= 0; x < 10;x++){
    console.log(x)
}

let name = 'JavaScript';

for (let letter = 0; letter < name.length; letter++){
    console.log(name[letter]) // can refer to characters by string index
}

//------------------------------------------------------------------------
// A while loop to double a number and display it
// stop when a number greater than 100 is reached

let maxVal = 100
let number = 1
while (number < maxVal){
    number *= 2
    console.log('number = ' + number)
}


