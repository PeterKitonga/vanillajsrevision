var names = ['Peter'];

// adding items to the array
names[1] = 'Dex';
console.log('Adding item via index: ' + JSON.stringify(names));

// this method can add multiple items to the array
names.push('Wayne', 'Fred', 'Jax');
console.log('Adding items via push: ' + JSON.stringify(names));

// updating an item in the array
names[1] = 'Max';
console.log('Updating item via index: ' + JSON.stringify(names));

// changes Fred to Darrel
names.splice(3, 1, 'Darrel');
console.log('Updating item via splice: ' + JSON.stringify(names));

// removing items from array
names.splice(names.indexOf('Peter'), 1);
console.log('Removing item: ' + JSON.stringify(names));

// adding items with named indexes
names['color'] = 'black';
console.log('Adding items with named indexes: ');
console.log(names);
