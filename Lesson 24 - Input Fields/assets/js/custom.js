var app = {};

// Reduces redundant declaration of getElementById
app.getElement = function (element) {
    return document.getElementById(element);
}

// Get elements required
app.entry = app.getElement('result-input');
app.output = app.getElement('result-output');

// Create event handler
app.entry.addEventListener('keyup', function (event) {
    // event.target.value gets the value of the text input
    if (event.target.value.length > 0) {
        app.output.innerText = event.target.value;
    } else {
        app.output.innerText = 'Start typing again...';
    }
});