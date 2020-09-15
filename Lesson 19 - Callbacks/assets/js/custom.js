var app = {};

app.add = function (numbers, _callback) {
    var result = 0;

    // validate if the numbers are defined
    if (numbers !== undefined && numbers.length > 0) {
        // loop through and sum the numbers
        for(number in numbers) {
            result += numbers[number];
        }

        // checks if the callback is defined
        if (_callback !== undefined) {
            // if defined pass a parameter and run the defined callback
            return _callback(result);
        }

        return 'Result is: ' + result;
    } else {
        return 'Please provide numbers';
    }
}

