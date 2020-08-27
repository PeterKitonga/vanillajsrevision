/*
* Using object literals applies some best practice concepts where it prevents naming confilts of variables that are defined globaly. This provides a much cleaner
* approach to assigning and accessing values.
*/
var app = {
    version: 1.0,
    name: 'Vanilla JS Revision',
    getVersion: function () {
        /*
        * In below context, 'this' refers to the owner object 'app'. It gives us the ability to access the different values in the object literal.
        * More info: https://www.w3schools.com/js/js_this.asp
        */
        return this.version;
    }
};

/*
* To access a value in an object literal, we use the dot notation with the variable name like so.
*/
console.log('Object property result: ' + app.name);

/*
* We can also access methods within the object literal using the dot notation and adding brackets in the end of the declaration.
*/
console.log('Object method result: ' + app.getVersion());