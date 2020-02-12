// Find canvas, create a context
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

//Find input box and disable it until canvas is ready
let input = document.querySelector('#image_text');
input.disabled = true;

// drawing the image - create an image and set the source
// add callback to know when the image is loaded and ready,
// so can draw it to the canvas and enable the input
let image = new Image();
let image2 = new Image();
image.src = 'backside.jpg';
// added second image
image2.src = 'bork.png';

image.addEventListener('load', function() {
    context.drawImage(image, 0, 0);
    input.disabled = false;
});

// Add event listener to input - will fire if the text is changed
input.addEventListener('input', function() {
    // Read the data typed in the input
    // 'this' is the HTML element this function is called for
    let text = this.value;

    context.drawImage(image, 0, 0);
    context.font = '40px "Comic Sans MS';
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.textAlign = "center";
    context.fillText(text, 246, 250);
    context.strokeText(text, 246, 250);
    // image is shown when the user input reaches 20 characters
    if(text.length === 20) {context.drawImage(image2, 125, 125);}

});

