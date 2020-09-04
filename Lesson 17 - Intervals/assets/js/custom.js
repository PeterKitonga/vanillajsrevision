var app = {
    number: 1,
    add: function () {
        return this.number++;
    }
};

var interval = setInterval(function () {
    console.log('Interval result: ' + app.number);
    app.add();

    if (app.number > 10) {
        // clears the interval
        clearInterval(interval);
        console.log('Interval cleared');
    }
}, 1000);

