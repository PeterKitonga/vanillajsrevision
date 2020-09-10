var app = {};

app.countdown = function(settings) {
    var interval,
        counter = 0,
        // Start and end points
        start_at = 0,
        end_at = 0,
        message = '';

    // Validate the function parameters
    if(settings === undefined) {
        message = 'Please provide settings';
    } else {
        // Check if one parameter is missing
        if (settings.start_at === undefined || settings.end_at === undefined) {
            /*
            * Below is a ternary operator which is similar to an if...else statement.
            * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
            */
            message = settings.hasOwnProperty('start_at') ? 'Please provide end_at setting' : 'Please provide start_at setting';
        } else {
            start_at = parseInt(settings.start_at);
            end_at = parseInt(settings.end_at);

            // Check if the parameters are numbers
            if (!isNaN(start_at) && !isNaN(end_at)) {
                message = 'Begin countdown from ' + start_at + ' to ' + end_at;
                counter = start_at;

                interval = setInterval(function() {
                    // Check if the counter has reached the end
                    if (counter < end_at) {
                        console.log('Finished countdown');
                        clearInterval(interval);
                    } else {
                        console.log('Countdown at: ' + counter);
                    }

                    counter--;
                }, 1000);
            } else {
                message = 'Please provide start_at and end_at settings as numbers';
            }
        }
    }

    return message;
};

