var name = 'Peter',
    names = ['Peter', 'Wayne', 'Fred', 'Jax', 'Stacy'],
    age = 26,
    app = {
        name: 'JavaScript',
        version: 6
    };

/*
 * JavaScript mainly works with objects. Each variable with a value of a string, number, date, array 
 * is usually an object with various properties and functions available to it.
 * More info at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */
console.log('String Object result: ' + name.length);
console.log('Array Object result: ' + names.indexOf('Fred'));
console.log('Number Object result: ' + age.toExponential(2));

/* 
* A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
* More info: https://www.dyn-web.com/tutorials/object-literal/
*/
console.log('Object literal result: ' + app.name);