var app = {};

/*
* Fetches the first item with the selector defined.
* In the example below it will select the first 'a' tag
* inside the nav element.
* More info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
*/
app.element = document.querySelector('nav ul li a');

console.log('Query selector result: ' + app.element);

/*
* Here, we can select an element using it's id.
*/
app.element_id = document.querySelector('a#home');

console.log('Query selector by id result: ' + app.element_id);

/*
* Here, we can select an element using it's class.
*/
app.element_class = document.querySelector('a.contact-link');

console.log('Query selector by class result: ' + app.element_class);

/*
* This method selects all items with the selector defined. 
* More info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/
app.elements = document.querySelectorAll('nav ul li a');

if (app.elements.length > 0) {
    for (index = 0; index < app.elements.length; index++) {
        var item = app.elements[index];
        console.log('Query selector all result: ' + item.text + ' - ' + item.getAttribute('href'));
    }
}