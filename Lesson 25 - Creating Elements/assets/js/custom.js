var app = {};

app.container = document.querySelector('.result-container');
app.button = document.querySelector('.result-button');

// Listen for the on click event, create and append elements to the container
app.button.addEventListener('click', function() {
    var spans = document.querySelectorAll('.result-element');
    
    var element_number = spans.length + 1;
    
    // Creates an element in the DOM
    app['element_'+element_number] = document.createElement('span');
    
    // Sets the attributes of the element created
    app['element_'+element_number].setAttribute('class', 'result-element');
    
    app['element_'+element_number].innerText = 'Created element ' + element_number
    
    app.container.appendChild(app['element_'+element_number]);
});