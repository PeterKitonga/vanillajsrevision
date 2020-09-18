var app = {};

app.number = 1;

/*
* Using the document object available in JavaScript we can
* select specific elements in the DOM perform various actions to it
*/
app.element = document.getElementById('link');

/*
* There are various properties and methods available to an 
* element that had been selected. This properties and method help
* manipulate the element in the DOM
*/
console.log('Link href attribute: ' + app.element.getAttribute('href'));

console.log('X offset of element in pixels: ' + app.element.offsetLeft);

console.log('Y offset of element in pixels: ' + app.element.offsetTop);

app.interval = setInterval(function() {
    if (app.number === 1) {
        console.log('Text: "' + app.element.innerText + '" will change in 10 seconds');
    }

    if (app.number === 10) {
        app.element.innerText = 'Element Changed';
        console.log('Text for link is: "' + app.element.innerText + '"');
        console.log('Text: "' + app.element.innerText + '" will bolden in 10 seconds');
    }

    if (app.number === 20) {
        app.element.innerHTML = '<strong>Element Bold</strong>';
        console.log('Content for link is: "' + app.element.innerHTML + '"');
        clearInterval(app.interval);
    }

    app.number++;
}, 1000);

