var name = 'Peter',
    age = 26,
    fathers_age = 50,
    married = false;

// operator And(&&) will always use false as the evaluator
console.log(age === 26 && fathers_age < age);

// operator Or(||) will always use true as the evaluator
console.log(name === 'Peter' || age === 27);

// operator Not(!) will always give you the opposite of the variable value
console.log(!married);