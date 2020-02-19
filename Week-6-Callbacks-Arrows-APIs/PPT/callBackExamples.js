// Functions can be passed to other functions as arguments

let animals = ['Giraffe', 'Elephant', 'Yak'];
// 'element' represent the item in list, 'index' reps numeric position
animals.forEach(function(element, index){
    console.log(`Animal number ${index+1} is ${element}`)
});

// Add an event listener for click events, with a callback function
// The callback function runs hen the event (clicking the button) happens
button.addEventListener('click', function () {
    alert('You clicked the button!')
    button.innerHTML = 'The button has been clicked'
})