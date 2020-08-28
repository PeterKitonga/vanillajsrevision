/*
* A javascript date object is instatiated by the Date() construct and can be used to 
* fetch the date of a single moment in time in a platform-independent format.
*/
var app = {
    date: new Date(),
    today: function() {
        return this.date.toLocaleDateString('en-GB', {timeZone: 'Africa/Nairobi', timeZoneName: 'long'});
    },
    now_formatted: function() {
        return this.date.toLocaleString('en-GB', {timeZone: 'Africa/Nairobi'});
    },
    format_date: function(date) {
        return new Date(date).toLocaleString('en-GB', {timeZone: 'Africa/Nairobi'});
    }
};

/*
* Using the .toLocalDateString() prototype we can fetch today's date and format it to the specific timezone and format
*/
console.log('Date today is: ' + app.today());

/*
* Here we can pass a UTC timestamp to be formatted.
*/
console.log('Formatted date is: ' + app.format_date(Date.UTC(2012, 11, 20, 3, 0, 0)));

/*
* Here we can pass the date as a string to be formatted
*/
console.log('Formatted date is: ' + app.format_date('2020-08-28 19:18:00'));