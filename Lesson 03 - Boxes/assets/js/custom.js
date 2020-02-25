var confirm = confirm('Please confirm this action.');

if (confirm) {
    alert('You have confirmed the action.');
} else {
    alert('Sorry, we did not receive your confirmation');
}

var prompt = prompt('Please enter your name');

if (prompt != '') {
    alert('Your name is ' + prompt);
}