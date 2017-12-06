// Custom Javascript for donate button changes
// Set a global variable for the button and retrieve the figure with id of donate
var theButton = document.getElementById('donate');

// add an event listener for mouseover of the image and open a function
theButton.addEventListener('mouseover', function () {
    // console.log('entering');
    // Change the source of the image to the yellow button on mouseover
    this.src = 'img/button_yellow.png';
});

// Add an event listener to the image for mouseout and open a function
theButton.addEventListener('mouseout', function () {
    // console.log('leaving');
    // Change the source of the image back to the red button on mouseout
    this.src = 'img/button_red.png';
});

// Add an event listener to the image for click and open a function
theButton.addEventListener('mousedown', function () {
    // console.log('clicky');
    // Change the source of the image back to the blue button on mousedown
    this.src = 'img/button_blue.png';
});


// Document loaded function
$(document).ready(function () {
    // jQuery Navigation Plug-in on every page to change the top nav from hamburger on small screens to horizontal list on large screens
    $('#menu-container').responsiveMenu();


    // Custom jQuery to hide the Classes page Refund Policy
    $('#showpolicy').hide();

    // On click of the policy span, show the refund policy on the classes page
    $('#policy').on('click', function () {
        $('#showpolicy').show();
    });

    // On click of the x image, hide the policy on the classes page
    $('#closepolicy').on('click', function () {
        $('#showpolicy').hide();
    });


    // Custom jQuery to hide the About div on the home page
    $('#showabout').hide();

    // On click of the about span, show the about section
    $('#about').on('click', function () {
        $('#showabout').show();
    });

    // On click of the x image, hide the about section
    $('#closeabout').on('click', function () {
        $('#showabout').hide();
    });

});

//Custom JavaScript to insert a gift card on the classes page
// Get the element by id to add the new div after
var insertHere = document.getElementById('appendAfter');

// Create if loop to solve errors on other pages without the appendAfter id
if (insertHere === null) {
    console.log('This is not the card page.');
} else {

    // Custom Javascript on classes page to create a div, insert a card image and append to the page
    // Create a global variable set to a created div
    var newdiv = document.createElement('div');
    // Give the created div an id of card
    newdiv.id = 'card';
    //Give the created div the inner html of the image and paragraph suggesting people purchase a gift card.
    newdiv.innerHTML = '<img src="img/card1.png"><p>Give the gift of art and happiness this Christmas with a gift card from Arts and Design Society.</p>';

    // get the second child of the target and insert the newdiv
    insertHere.children['1'].append(newdiv);
}
