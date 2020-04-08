var name = 'Peter',
    age = 26,
    fathers_age = 50;

// works with variables of different data types. Checks and converts variable data type before comparison
console.log(age == '26');
console.log(age != '26');

// strict, only works with vairables of the same data type
console.log(age === '26');
console.log(age !== '26');

console.log(age > fathers_age);
console.log(age < fathers_age);
