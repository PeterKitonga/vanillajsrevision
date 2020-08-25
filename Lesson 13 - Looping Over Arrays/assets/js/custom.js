var names = ['Peter', 'Wayne', 'Fred', 'Jax', 'Stacy'];

/* *
* Since arrays are 0 indexed, the second parameter(condition) of the for loop is a constraint to prevent the loop from iterating outside the bounds of the array.
* 
* The `names.length` will dynamically pick the number of items in the array and update the condition that constraints the iteration.
* */ 
for(var index = 0; index < names.length; index++) {
    console.log('for loop index ' + index + ': ' + names[index]);
}

// this loop structure is different since you can access the array values directly without specifying the index
for (var name of names) {
    console.log('for...of loop value: ' + name);
}

var car = {name: "Range Rover Velar", year_of_manufacture: 2019, price: 'USD 200,000', engine_no: 'SHHDSJD/SHDHJS/Q2829'};

/* *
 * This loop is used to iterate enumerable properties of an object. It is mostly used to iterate over objects with a key/value pair structure.
 * 
 * It may be most practically used for debugging purposes, being an easy way to check the properties of an object.
 * */ 
for(var key in car) {
    console.log('for...in loop key "' + key + '": ' + car[key]);
}
