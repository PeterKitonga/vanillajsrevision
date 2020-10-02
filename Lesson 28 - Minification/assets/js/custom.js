var app = {};

app.add = function(first, second) {
    return first + second;
};

app.button = document.querySelector(".result-button");

// Listen for the on click event and style the button
app.button.addEventListener("click", function(event) {
    var colors = ["red", "green", "blue", "cyan", "yellowgreen"];
    var color_select = colors[Math.floor(Math.random() * colors.length)];

    /*
    * The style property is an object with the various 
    * css properties that we can use to style an element.
    */ 
    event.target.style.backgroundImage = "none";
    event.target.style.backgroundColor = color_select;
});