var number_one = 100,
    number_two = 50,
    result = 0;

result = number_one + number_two
console.log('Addition result: ' + result);

result = number_one - number_two;
console.log('Subtraction result: ' + result);

result = number_one / number_two;
console.log('Division result: ' + result);

result = number_one * number_two;
console.log('Multiplication result: ' + result);

// this operator is mostly used in loop structures to increment the index of a for loop
number_one++;
console.log('Increment result: ' + number_one);

// this operator is mostly used in loop structures to decrement the index of a for loop
number_two--;
console.log('Decrement result: ' + number_two);

result = number_one % number_two;
console.log('Reminder result: ' + result);

// this operator can also be used to determine wether a number is even by dividing it by 2. If the result is 0, it is even
result = number_one % 2 === 0;
console.log('Even number (' + number_one + ') check result: ' + result);

// this will follow the BODMAS order of operations
result = number_two / (number_one % number_two) * number_two + number_one;
console.log('Combined operators result: ' + result);

// this operator is used to raise the numerical value by the power of the numerical value to the right of the operator
result = number_two ** 2;
console.log('Exponentiation result: ' + result);