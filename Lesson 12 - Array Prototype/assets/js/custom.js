var names = ['Peter', 'Wayne', 'Fred', 'Jax'];

// here we are able to see that by default every Array() object has a length property
console.log(Object.getOwnPropertyNames(names));

// this property points back to the Array.prototype of the names Array() object and its available methods
console.log(names.__proto__);

// through inheritance we can access these available methods using the dot notation
names.push('Stacy')
console.log(names);