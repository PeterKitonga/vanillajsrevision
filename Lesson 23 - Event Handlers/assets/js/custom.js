var app = {};

app.elements = document.querySelectorAll('a.custom-nav-link');

/*
* Here we loop because the querySelectorAll method returns
* all elements with the defined selector as an array.
* Then within the loop we add the event handler for each element.
*/
app.elements.forEach(function (element) {
    element.onclick = function() {
        console.log('Example #1 click event handler result: ' + this.text);
    }
});

/*
* Here I used a different way to add event handlers which is
* now defined and executed via JavaScipt unlike the above which executes through
* the DOM.
*/ 
app.elements.forEach(function (element) {
    element.addEventListener('mouseenter', function (event) {
        console.log('Example #2 mouseenter event handler result: ' + event.target.getAttribute('href'));
    });
});

/*
* The above way of adding event handlers is not supported in Internet Explorer with
* versions 8 and below. A solution to this would be to attach the event like so:
* app.elements.forEach(function (element) {
*     element.attachEvent('onclick', function () {
*         // Logic Here
*     });
* });
*/
